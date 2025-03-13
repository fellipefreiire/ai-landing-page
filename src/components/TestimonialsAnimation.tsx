'use client'

import avatar1 from '@/assets/avatar-1.png'
import avatar2 from '@/assets/avatar-2.png'
import avatar3 from '@/assets/avatar-3.png'
import avatar4 from '@/assets/avatar-4.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    text: '"This product has completely transformed how I manage my projects and deadlines"',
    name: 'Sophia Perez',
    title: 'Director @ Quantum',
    avatarImg: avatar1,
  },
  {
    text: '"These AI tools have completely revolutionized our SEO entire strategy overnight"',
    name: 'Jamie Lee',
    title: 'Founder @ Pulse',
    avatarImg: avatar2,
  },
  {
    text: '"The user interface is so intuitive and easy to use, it has saved us countless hours"',
    name: 'Alisa Hester',
    title: 'Product Owner @ Innovate',
    avatarImg: avatar3,
  },
  {
    text: '"Our teams productivity has increased significantly since we started using this tool"',
    name: 'Alec Whitten',
    title: 'CTO @ Tech Solutions',
    avatarImg: avatar4,
  },
]

export function TestimonialsAnimation() {
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
        ease: 'linear',
        duration: 30,
      }}
      className="flex flex-none gap-5"
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          key={`${testimonial.name + index}`}
          className="max-w-xs flex-none rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:max-w-md md:p-10"
        >
          <div className="text-lg tracking-tight md:text-2xl">
            {testimonial.text}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="before:-content-[''] relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-['']">
              <Image
                src={testimonial.avatarImg}
                alt={`Avatar for ${testimonial.name}`}
                className="size-11 rounded-lg grayscale"
              />
            </div>
            <div>
              <div>{testimonial.name}</div>
              <div className="text-sm text-white/50">{testimonial.title}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
