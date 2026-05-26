import { motion } from 'framer-motion'

// Gradients cycle through warm cream → golden warmth → dusty rose-gold → back
// All derived from the brand palette: --void #F7F4EE, --void2 #EDE8DE, --elec #C4956A, --spark #8A796B
const gradients = [
  'linear-gradient(135deg, #F7F4EE 0%, #EDE8DE 100%)',
  'linear-gradient(140deg, #F2EAD8 0%, #E8D5B2 100%)',
  'linear-gradient(150deg, #F7F4EE 0%, #EBD9BE 50%, #EDE8DE 100%)',
  'linear-gradient(130deg, #EDE8DE 0%, #F0E4CC 60%, #F7F4EE 100%)',
  'linear-gradient(145deg, #F5EEE1 0%, #E6D0AF 100%)',
  'linear-gradient(135deg, #F7F4EE 0%, #EDE8DE 100%)',
]

export function GradientBackground() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: gradients[0],
      }}
      animate={{ background: gradients }}
      transition={{
        delay: 0.3,
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
    />
  )
}
