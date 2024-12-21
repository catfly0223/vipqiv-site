import Link from 'next/link'
import { motion } from 'framer-motion'
import { Twitter, Facebook, Linkedin, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#00ff00]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h3 className="text-[#00ff00] font-mono text-xl mb-4">{siteConfig.name}</h3>
            <p className="text-[#00ff00]/80 font-mono">{siteConfig.description}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h4 className="text-[#00ff00] font-mono text-lg mb-4">お問い合わせ</h4>
            <div className="space-y-2">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-[#00ff00]/80 hover:text-[#00ff00] transition-colors font-mono"
                aria-label="メールでのお問い合わせ"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-[#00ff00]/80 hover:text-[#00ff00] transition-colors font-mono"
                aria-label="電話でのお問い合わせ"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <h4 className="text-[#00ff00] font-mono text-lg mb-4">フォローする</h4>
            <div className="flex space-x-4">
              {siteConfig.links.twitter && (
                <a 
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {siteConfig.links.facebook && (
                <a 
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a 
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#00ff00]/20 text-center text-[#00ff00]/60 font-mono"
        >
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

