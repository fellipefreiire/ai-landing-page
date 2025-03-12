import LogoIcon from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border size-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm text-white/70 transition">
              <Link className="hover:text-white" href="#">
                Features
              </Link>
              <Link className="hover:text-white" href="#">
                Developers
              </Link>
              <Link className="hover:text-white" href="#">
                Pricing
              </Link>
              <Link className="hover:text-white" href="#">
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}
