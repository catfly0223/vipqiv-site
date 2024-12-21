export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  category: 'web' | 'app' | 'design' | 'marketing'
  technologies: string[]
  url?: string
  github?: string
  details: {
    challenge: string
    solution: string
    results: string[]
  }
}

export interface PortfolioFilter {
  category: string | null
  technology: string | null
} 