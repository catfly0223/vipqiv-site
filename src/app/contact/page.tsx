import { ContactSection } from '@/components/features/contact/ContactSection'
import LainBackground from '@/components/LainBackground'
import GlitchText from '@/components/ui/GlitchText'

export default function ContactPage() {
  return (
    <>
      <LainBackground />
      <div className="space-y-8 relative py-20">  
        <div className="flex flex-col items-center mb-12">
            <GlitchText className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-4 tracking-wider">
            Contact
            </GlitchText>
            <p className="text-xl text-[#00ff00]/80 font-mono text-center max-w-2xl">
            お問い合わせやご相談は、以下のフォームからお気軽にご連絡ください。
            </p>
        </div>
      <ContactSection className="bg-transparent" />
    </div>
    </>
  )
} 