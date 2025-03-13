'use client'

import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react'
import { animate, motion, useMotionTemplate, useMotionValue, type ValueAnimationTransition } from 'framer-motion'
import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react'

type FeatureTabProps = {
  title: string
  icon: string
  isNew: boolean
  selected: boolean
} & ComponentPropsWithoutRef<'div'>

export function FeatureTab({ title, icon, isNew, selected, ...props }: FeatureTabProps) {
  const tabRef = useRef<HTMLDivElement>(null)
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

  const xPercentage = useMotionValue(0)
  const yPercentage = useMotionValue(0)

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`

  function handleTabHover() {
    if (dotLottie === null) return

    dotLottie.play()
  }

  useEffect(() => {
    if (!tabRef.current || !selected) return

    xPercentage.set(0)
    yPercentage.set(0)

    const { height, width } = tabRef.current?.getBoundingClientRect()
    const circumference = height * 2 + width * 2
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ]

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    }

    animate(xPercentage, [0, 100, 100, 0, 0], options)
    animate(yPercentage, [0, 0, 100, 100, 0], options)
  }, [selected])

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="relative flex items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1 cursor-pointer"
      onClick={props.onClick}
    >
      {selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        />
      )}
      <div className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottieReact
          dotLottieRefCallback={setDotLottie}
          src={icon}
          className="size-5"
          autoplay
        />
      </div>
      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="rounded-full bg-[#8C44FF] px-2 py-0.5 text-xs font-semibold text-black">
          new
        </div>
      )}
    </div>
  )
}
