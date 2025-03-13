import { useMotionValue } from 'framer-motion'
import { useEffect, type RefObject } from 'react'

export function useRelativeMousePosition(to: RefObject<HTMLElement | null>) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function updateMousePosition(event: MouseEvent) {
    if (!to.current) return

    const { top, left } = to.current.getBoundingClientRect()

    mouseX.set(event.x - left)
    mouseY.set(event.y - top)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return [mouseX, mouseY]
}
