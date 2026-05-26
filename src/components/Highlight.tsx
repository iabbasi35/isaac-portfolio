import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 1.8, ease: 'linear', delay: 0.4 }}
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(180,120,60,0.55), rgba(196,149,106,0.25))',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
        paddingBottom: '0.1em',
        paddingInline: '0.2em',
        borderRadius: '0.3em',
      }}
    >
      {children}
    </motion.span>
  )
}
