import { useRef, useState, useEffect } from 'react'

export default function useInView(options = {}) {
  const { threshold = 0.15, root = null, rootMargin = '0px' } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (obs && entry.target) obs.unobserve(entry.target)
          }
        })
      },
      { threshold, root, rootMargin }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [threshold, root, rootMargin])

  return [ref, inView]
}
