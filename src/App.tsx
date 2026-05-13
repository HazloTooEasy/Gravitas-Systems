import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import ExecutivePositioningSection from '@/sections/ExecutivePositioningSection'
import MarketProblemSection from '@/sections/MarketProblemSection'
import CoreDivisionsSection from '@/sections/CoreDivisionsSection'
import InvestmentOpportunitiesSection from '@/sections/InvestmentOpportunitiesSection'
import OperationalVerticalsSection from '@/sections/OperationalVerticalsSection'
import InvestorWorkflowSection from '@/sections/InvestorWorkflowSection'
import InvestorContactSection from '@/sections/InvestorContactSection'
import LegalDisclaimerSection from '@/sections/LegalDisclaimerSection'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <ExecutivePositioningSection />
        <MarketProblemSection />
        <CoreDivisionsSection />
        <InvestmentOpportunitiesSection />
        <OperationalVerticalsSection />
        <InvestorWorkflowSection />
        <InvestorContactSection />
        <LegalDisclaimerSection />
      </main>
      <Footer />
    </div>
  )
}
