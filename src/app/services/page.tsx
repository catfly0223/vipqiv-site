import { ServiceSection } from '@/components/features/services/ServiceSection'
import LainBackground from '@/components/LainBackground'
import GlitchText from '@/components/ui/GlitchText'

export default function ServicesPage() {
  return (
    <>
      <LainBackground />
      <div className="space-y-8 relative py-20">  
        <div className="flex flex-col items-center mb-12">
          <GlitchText className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-4 tracking-wider">
            Services
          </GlitchText>
          <p className="text-xl text-[#00ff00]/80 font-mono text-center max-w-2xl">
            vipqiv Labは、最先端のデジタルソリューションを提供します。私たちの専門知識を活用して、あなたのビジネスを次のレベルへ引き上げましょう。
          </p>
        </div>
        <ServiceSection className="bg-transparent" />
      </div>
    </>
  )
}

