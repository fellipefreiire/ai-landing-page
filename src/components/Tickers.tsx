'use client'

import { motion } from 'framer-motion'
import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'

export function Tickers() {
  return (
    <motion.div
      initial={{
        translateX: '-50%',
      }}
      animate={{
        translateX: '0',
      }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
      }}
      className="flex flex-none gap-14 pr-14"
    >
      {[
        acmeLogo,
        pulseLogo,
        echoLogo,
        celestialLogo,
        apexLogo,
        quantumLogo,
        acmeLogo,
        pulseLogo,
        echoLogo,
        celestialLogo,
        apexLogo,
        quantumLogo,
      ].map((logo, index) => (
        <img
          key={`${logo.src + index}`}
          src={logo.src}
          className="h-6 w-auto flex-none"
        />
      ))}
    </motion.div>
  )
}
