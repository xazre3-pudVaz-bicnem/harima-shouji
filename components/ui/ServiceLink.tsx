import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceLinkProps {
  href: string
  label?: string
  className?: string
}

export default function ServiceLink({ href, label = '詳しく見る', className = '' }: ServiceLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-bold text-amber-400 hover:text-amber-300 transition-colors duration-200 group/slink ${className}`.trim()}
    >
      {label}
      <ArrowRight className="w-5 h-5 group-hover/slink:translate-x-1 transition-transform duration-200" />
    </Link>
  )
}
