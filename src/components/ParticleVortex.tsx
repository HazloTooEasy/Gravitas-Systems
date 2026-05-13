import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParticleVortexConfig {
  particleCount?: number
  particleColor?: number
  particleSize?: number
  speed?: number
  mouseInfluence?: number
}

class ParticleVortexSystem {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private particles: THREE.Points
  private particleData: Float32Array
  private velocities: Float32Array
  private originalPositions: Float32Array
  private time = 0
  private mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
  private rafId = 0
  private width: number
  private height: number
  private config: Required<ParticleVortexConfig>

  constructor(canvas: HTMLCanvasElement, config: ParticleVortexConfig = {}) {
    this.config = {
      particleCount: config.particleCount ?? 8000,
      particleColor: config.particleColor ?? 0xc4a882,
      particleSize: config.particleSize ?? 1.2,
      speed: config.speed ?? 0.3,
      mouseInfluence: config.mouseInfluence ?? 0.5,
    }

    this.width = canvas.clientWidth
    this.height = canvas.clientHeight

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    })
    this.renderer.setPixelRatio(Math.min(1.6, window.devicePixelRatio))
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0x050402, 1)

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x050402, 0.035)

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 500)
    this.camera.position.set(0, 8, 16)
    this.camera.lookAt(0, 0, 0)

    this.particleData = new Float32Array(this.config.particleCount * 3)
    this.velocities = new Float32Array(this.config.particleCount * 3)
    this.originalPositions = new Float32Array(this.config.particleCount * 3)

    this.initParticles()
    this.particles = this.createParticleMesh()
    this.scene.add(this.particles)

    window.addEventListener('resize', this.handleResize)
    canvas.addEventListener('mousemove', this.handleMouseMove)
    canvas.addEventListener('touchmove', this.handleTouchMove, { passive: true })

    this.loop()
  }

  private initParticles() {
    const count = this.config.particleCount
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 2.5 + Math.random() * 6
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 10

      this.particleData[i3] = Math.cos(angle) * radius
      this.particleData[i3 + 1] = height
      this.particleData[i3 + 2] = Math.sin(angle) * radius

      this.originalPositions[i3] = this.particleData[i3]
      this.originalPositions[i3 + 1] = this.particleData[i3 + 1]
      this.originalPositions[i3 + 2] = this.particleData[i3 + 2]

      this.velocities[i3] = 0
      this.velocities[i3 + 1] = 0
      this.velocities[i3 + 2] = 0
    }
  }

  private createParticleMesh(): THREE.Points {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(this.particleData, 3))

    const sizes = new Float32Array(this.config.particleCount)
    const opacities = new Float32Array(this.config.particleCount)
    for (let i = 0; i < this.config.particleCount; i++) {
      sizes[i] = 0.5 + Math.random() * 1.5
      opacities[i] = 0.2 + Math.random() * 0.8
    }
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(this.config.particleColor) },
        time: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        uniform float time;
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vOpacity;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, dist) * vOpacity;
          gl_FragColor = vec4(color, alpha * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    return new THREE.Points(geometry, material)
  }

  private handleResize = () => {
    const canvas = this.renderer.domElement
    this.width = canvas.clientWidth
    this.height = canvas.clientHeight
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  private handleMouseMove = (e: MouseEvent) => {
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    this.mouse.targetY = -((e.clientY - rect.top) / rect.height - 0.5) * 10
  }

  private handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 0) return
    const rect = this.renderer.domElement.getBoundingClientRect()
    const touch = e.touches[0]
    this.mouse.targetX = ((touch.clientX - rect.left) / rect.width - 0.5) * 20
    this.mouse.targetY = -((touch.clientY - rect.top) / rect.height - 0.5) * 10
  }

  private updateParticles() {
    const positions = this.particles.geometry.attributes.position.array as Float32Array
    const count = this.config.particleCount
    const speed = this.config.speed
    const time = this.time

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const ox = this.originalPositions[i3]
      const oy = this.originalPositions[i3 + 1]
      const oz = this.originalPositions[i3 + 2]

      const baseRadius = Math.sqrt(ox * ox + oz * oz)
      const baseAngle = Math.atan2(oz, ox)

      const rotationSpeed = 0.3 + 0.15 * Math.sin(oy * 0.3 + i * 0.01)
      const angle = baseAngle + time * rotationSpeed * speed + i * 0.001

      const radiusVariation = Math.sin(time * 0.5 + i * 0.05) * 0.3
      const r = Math.max(0.5, baseRadius + radiusVariation)

      const heightOscillation = Math.sin(time * 0.4 + baseAngle * 2 + i * 0.02) * 0.8
      let h = oy + heightOscillation

      h += Math.sin(time * 0.2 + i * 0.1) * 0.4

      let x = Math.cos(angle) * r
      let z = Math.sin(angle) * r
      let y = h

      const dx = x - this.mouse.x
      const dz = z - this.mouse.y
      const dist = Math.sqrt(dx * dx + dz * dz)
      if (dist < 5) {
        const influence = (1 - dist / 5) * 0.15
        x += dx * influence
        z += dz * influence
        y += influence * 0.5
      }

      positions[i3] += (x - positions[i3]) * 0.1
      positions[i3 + 1] += (y - positions[i3 + 1]) * 0.1
      positions[i3 + 2] += (z - positions[i3 + 2]) * 0.1
    }

    this.particles.geometry.attributes.position.needsUpdate = true
  }

  private loop = () => {
    this.time += 0.004
    this.updateParticles()
    this.renderer.render(this.scene, this.camera)
    this.rafId = requestAnimationFrame(this.loop)
  }

  dispose() {
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.handleResize)
    this.renderer.domElement.removeEventListener('mousemove', this.handleMouseMove)
    this.renderer.domElement.removeEventListener('touchmove', this.handleTouchMove)
    this.particles.geometry.dispose()
    ;(this.particles.material as THREE.ShaderMaterial).dispose()
    this.renderer.dispose()
  }
}

export default function ParticleVortex() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const systemRef = useRef<ParticleVortexSystem | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    systemRef.current = new ParticleVortexSystem(canvasRef.current)

    return () => {
      systemRef.current?.dispose()
      systemRef.current = null
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}
