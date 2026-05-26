import { motion } from 'framer-motion'
import { Network, Layers, GraduationCap } from 'lucide-react'

const cards = [
  {
    id: 'ai',
    Icon: Network,
    title: 'AI-native, not AI-curious',
    teaser: 'Shipped before most teams had a policy.',
    back: "I built Prompt Engineering Standards at AWS before the industry was talking about it. Used Claude and Synthesia as the production pipeline at Wheels — not experiments. Embedded Copilot at every design stage at Microsoft. AI-native means it's in the workflow, not the talking points.",
  },
  {
    id: 'strategy',
    Icon: Layers,
    title: 'Strategy before slides',
    teaser: 'The business problem drives everything.',
    back: "MEDDPICC as the connective spine for Microsoft's enterprise sellers. Bloom's calibrated by track across four AWS programs. Job task analysis before a single script at Wheels. The authoring tool is the last thing I open.",
  },
  {
    id: 'scale',
    Icon: GraduationCap,
    title: '198,000+ learners. Proven at scale.',
    teaser: 'Enterprise-grade. Globally deployed.',
    back: "Four AWS program tracks on Coursera. Google Professional Certificates in Data Analytics and Cybersecurity. Microsoft's enterprise sales force. From tight cohorts to programs that reach millions — the design discipline stays the same.",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function ValueProps() {
  return (
    <section className="value-props">
      <motion.div
        className="value-props-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map(({ id, Icon, title, teaser, back }) => (
          <motion.div key={id} className="flip-card" variants={item}>
            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">
                <div className="flip-icon">
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className="flip-title">{title}</h3>
                <p className="flip-teaser">{teaser}</p>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <p className="flip-back-text">{back}</p>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
