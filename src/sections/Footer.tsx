import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import XSocial from '@/assets/social-x.svg'
import InstaSocial from '@/assets/social-instagram.svg'
import YTSocial from '@/assets/social-youtube.svg'

export function Footer() {
  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="size-6" />
            <div>AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col gap-5 text-xs text-white/70 md:text-sm lg:flex-1 lg:flex-row lg:justify-center lg:gap-7">
            <Link href="#" className="transition hover:text-white">
              Features
            </Link>
            <Link href="#" className="transition hover:text-white">
              Developers
            </Link>
            <Link href="#" className="transition hover:text-white">
              Company
            </Link>
            <Link href="#" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="#" className="transition hover:text-white">
              Changelog
            </Link>
          </nav>
          <div className="flex gap-5 text-white/40 lg:flex-1 lg:justify-end">
            <XSocial className="transition hover:text-white" />
            <InstaSocial className="transition hover:text-white" />
            <YTSocial className="transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  )
}
