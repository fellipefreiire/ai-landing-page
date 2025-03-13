'use client'

import { motion } from 'framer-motion'

export function OuterRing() {
  return (
    <motion.div
      style={{
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate={{
        rotate: '1turn',
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: 'linear',
      }}
      className="absolute top-1/2 left-1/2 size-[544px] rounded-full border border-white opacity-20 md:size-[980px]"
    >
      <div className="absolute top-1/2 left-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute top-1/2 left-full size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  )
}
