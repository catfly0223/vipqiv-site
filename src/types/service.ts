import { LucideIcon } from 'lucide-react'

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
}

export interface ServiceCardProps extends Service {
  isExpanded: boolean
  onToggle: () => void
} 