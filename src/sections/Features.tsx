import { FeatureAnimation } from '@/components/FeatureAnimation'

export function Features() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Elevate your SEO efforts.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg tracking-tight text-white/70 md:text-xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <FeatureAnimation />
      </div>
    </section>
  )
}
