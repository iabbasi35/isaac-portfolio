import { CalendarDays, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import heroImage from '../assets/hero.webp'
import { LogosSlider } from './LogosSlider'
import { Highlight } from './Highlight'

function ParallaxPortrait() {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.5 })

  const rotateY = useTransform(x, [-0.5, 0.5], ['-10deg', '10deg'])
  const rotateX = useTransform(y, [-0.5, 0.5], ['8deg', '-8deg'])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    rawX.set((e.clientX - left) / width - 0.5)
    rawY.set((e.clientY - top) / height - 0.5)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: '800px' }}
    >
      <motion.div
        className="hero-portrait-wrap"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <img src={heroImage} alt="Isaac Abbasi" className="hero-portrait" />
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content-col">
          <span className="hero-eyebrow">Learning Architect · AI-Forward</span>
          <h1 className="hero-heading">
            Built for what learning looks like{' '}
            <Highlight><span className="hero-accent">next.</span></Highlight>
          </h1>
          <p className="hero-sub">
            I design learning experiences that work — for the people taking them, and the AI era
            they're living in. Strategy, architecture, and execution in one.
          </p>
          <div className="hero-ctas">
            <a href="#case-studies" className="btn-primary">
              <ArrowRight size={16} /> See how I work
            </a>
            <a href="#contact" className="btn-outline">
              <CalendarDays size={16} /> Let's talk
            </a>
          </div>
        </div>

        <div className="hero-portrait-col">
          <ParallaxPortrait />
        </div>
      </div>

      <LogosSlider />
    </section>
  )
}
