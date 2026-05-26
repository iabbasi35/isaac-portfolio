import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
}

type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES
  blurLayers?: number
  blurIntensity?: number
  style?: CSSProperties
}

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  blurIntensity = 0.25,
  style,
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2)
  const segmentSize = 1 / (blurLayers + 1)
  const angle = GRADIENT_ANGLES[direction]

  return (
    <div style={{ pointerEvents: 'none', ...style }}>
      {Array.from({ length: layers }).map((_, index) => {
        const stops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (pos, i) =>
            `rgba(255,255,255,${i === 1 || i === 2 ? 1 : 0}) ${(pos * 100).toFixed(1)}%`
        )

        const mask = `linear-gradient(${angle}deg, ${stops.join(', ')})`

        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              maskImage: mask,
              WebkitMaskImage: mask,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
          />
        )
      })}
    </div>
  )
}
