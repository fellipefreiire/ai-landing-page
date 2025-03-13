import { Tickers } from '@/components/Tickers'

export function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h1>Trusted by top innovative teams</h1>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <Tickers />
          </div>
        </div>
      </div>
    </section>
  )
}
