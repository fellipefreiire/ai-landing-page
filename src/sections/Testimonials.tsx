import { TestimonialsAnimation } from '@/components/TestimonialsAnimation'

export function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Beyond Expectations.
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-lg tracking-tight text-white/70 md:text-xl">
          Our revolutionary AI SEO tools have transformed our client&apos;s
          strategies.
        </p>
        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsAnimation />
        </div>
      </div>
    </section>
  )
}
