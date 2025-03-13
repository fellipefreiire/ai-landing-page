'use client'

import { motion } from 'framer-motion'

export function MiddleRing() {
  return (
    <motion.div
      style={{
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate={{
        rotate: '-1turn',
      }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: 'linear',
      }}
      className="absolute top-1/2 left-1/2 size-[444px] rounded-full border border-dashed border-white/20 md:size-[780px]"
    />
  )
}
