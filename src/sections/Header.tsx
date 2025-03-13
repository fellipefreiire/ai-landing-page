import LogoIcon from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/15 py-4 backdrop-blur md:border-none md:backdrop-blur-none">
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5 md:backdrop-blur">
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15">
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
