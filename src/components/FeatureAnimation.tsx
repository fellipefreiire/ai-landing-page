'use client'

import productImage from '@/assets/product-image.png'
import { FeatureTab } from '@/components/FeatureTab'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  type ValueAnimationTransition,
} from 'framer-motion'
import { useState } from 'react'

const tabs = [
  {
    icon: '/assets/lottie/vroom.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
]

export function FeatureAnimation() {
  const [selectedTab, setSelectedTab] = useState(0)

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`

  function handleSelectTab(index: number) {
    setSelectedTab(index)

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    }

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    )
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions,
    )
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions,
    )
  }
  return (
    <>
      <div className="mt-10 flex flex-col gap-3 lg:flex-row">
        {tabs.map((tab, tabIndex) => (
          <FeatureTab
            key={tab.title}
            {...tab}
            onClick={() => handleSelectTab(tabIndex)}
            selected={selectedTab === tabIndex}
          />
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-white/20 p-2.5">
        <motion.div
          className="aspect-video rounded-lg border border-white/20 bg-cover"
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${productImage.src})`,
          }}
        />
      </div>
    </>
  )
}
