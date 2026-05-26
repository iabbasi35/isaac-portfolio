import { ArrowLeft, Layers, Users, Video, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: any) => ({
    opacity: 1, y: 0,
    transition: { delay: (i ?? 0) * 0.1, duration: 0.55, ease: 'easeOut' as const },
  }),
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="cs-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.span className="cs-section-label" variants={fadeUp}>{label}</motion.span>
      {children}
    </motion.section>
  )
}

const components = [
  {
    num: '01',
    title: 'Self-Paced Video Content',
    desc: 'Scenario-based videos produced in a professional studio with actors. Each video depicted a realistic enterprise sales interaction — a team of Microsoft sellers and a customer — structured as a three-part arc: what happened, what went wrong or right, and how it could have been approached better. Scripts written by Isaac, produced by Microsoft\'s studio team.',
  },
  {
    num: '02',
    title: 'Instructor-Led / VILT Sessions',
    desc: 'Live sessions delivered on Microsoft Teams with PowerPoint decks built for instructor-led conversation — not slide dumps. Topics included MEDDPICC sales methodology, objection handling, trusted advisor positioning, and industry vertical fluency. Isaac facilitated live sessions including real-time breakout activities.',
  },
  {
    num: '03',
    title: 'Cohort Group Project',
    desc: 'Sellers learned alongside peers in the same role or vertical. The group project required applying ITO concepts to a real or realistic customer scenario, creating peer accountability and knowledge transfer beyond the formal content.',
  },
]

const scriptStructure = [
  { step: 'Setup', desc: 'Context on the customer, their business, and what\'s at stake.' },
  { step: 'The Interaction', desc: 'Seller team meets with customer. Something goes sideways — or multiple things.' },
  { step: 'The Analysis', desc: 'Narrator or on-screen text highlights key moments. What did they miss? What worked?' },
  { step: 'The Better Approach', desc: 'Same scenario, different choices. What does good look like here?' },
  { step: 'The Takeaway', desc: 'One or two concrete things the learner can apply immediately.' },
]

const tools = [
  { category: 'Authoring', value: 'PowerPoint (ILT/VILT decks)' },
  { category: 'AI Tools', value: 'Microsoft Copilot, AI voiceover' },
  { category: 'Facilitation', value: 'Microsoft Teams VILT, breakout sessions' },
  { category: 'Video', value: 'Scripts delivered to Microsoft studio; actor-produced' },
  { category: 'Methodology', value: 'MEDDPICC, solution selling, trusted advisor model' },
  { category: 'Format', value: 'Blended: VILT + self-paced + cohort project' },
]

const demonstrations = [
  {
    title: 'Sales enablement at enterprise scale',
    body: 'This wasn\'t a small-company initiative. Designing for Microsoft\'s enterprise sales force means operating at a different level of stakeholder complexity, seller sophistication, and program rigor.',
  },
  {
    title: 'Script writing for studio production',
    body: 'Writing for actor-produced studio video is a harder and rarer skill than writing for Synthesia or screen recording. The dialogue had to feel real, the mistakes had to be believable, and the improvement arc had to land without feeling scripted.',
  },
  {
    title: 'Live facilitation for experienced adult professionals',
    body: 'Facilitating VILT for seasoned enterprise sellers requires a different approach than onboarding new hires. The content and delivery both had to treat them as intelligent professionals who needed sharper tools — not a skills deficit.',
  },
  {
    title: 'MEDDPICC fluency as a design throughline',
    body: 'MEDDPICC wasn\'t a topic to cover — it was the connective spine across every scenario, breakout, and group project. Fluency in the framework is a credible signal to any B2B sales enablement buyer.',
  },
]

export default function MicrosoftCaseStudy() {
  return (
    <div className="cs-page">

      {/* NAV */}
      <nav className="cs-nav">
        <a href="/#case-studies" className="cs-back">
          <ArrowLeft size={16} /> Back to portfolio
        </a>
      </nav>

      {/* HERO */}
      <header className="cs-hero">
        <motion.div
          className="cs-hero-inner"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="cs-logos" variants={fadeUp}>
            <span className="cs-logo-badge">Microsoft</span>
            <span className="cs-logo-sep">·</span>
            <span className="cs-logo-badge">Insights to Outcomes (ITO)</span>
          </motion.div>

          <motion.h1 className="cs-hero-title" variants={fadeUp}>
            Enterprise Sales Enablement<br />for Microsoft's ITO Program
          </motion.h1>

          <motion.p className="cs-hero-meta" variants={fadeUp}>
            Instructional Designer · Sales Enablement Consultant · Live Facilitator
          </motion.p>

          <motion.div className="cs-hero-tools" variants={fadeUp}>
            {['MEDDPICC', 'VILT on Teams', 'Studio Actor Videos', 'Microsoft Copilot', 'Blended Learning'].map(tool => (
              <span key={tool} className="cs-tool-tag">{tool}</span>
            ))}
          </motion.div>

          <motion.div className="cs-stats" variants={fadeUp}>
            <div className="cs-stat">
              <Layers size={18} />
              <span className="cs-stat-num">3</span>
              <span className="cs-stat-label">Delivery modalities</span>
            </div>
            <div className="cs-stat">
              <Video size={18} />
              <span className="cs-stat-num">Studio</span>
              <span className="cs-stat-label">Actor-produced videos</span>
            </div>
            <div className="cs-stat">
              <Target size={18} />
              <span className="cs-stat-num">MEDDPICC</span>
              <span className="cs-stat-label">Sales framework</span>
            </div>
            <div className="cs-stat">
              <Users size={18} />
              <span className="cs-stat-num">Cohort</span>
              <span className="cs-stat-label">Group learning design</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <div className="cs-body">

        {/* 01 — CHALLENGE */}
        <Section id="challenge" label="01 — The Challenge">
          <motion.h2 className="cs-heading" variants={fadeUp}>From feature-led to outcome-led</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            Microsoft's enterprise sales force needed to operate at a different level. The goal wasn't product training — it was a mindset and skill shift. Sellers needed to show up as trusted technology advisors who understood their customers' businesses deeply enough to offer genuinely insightful solutions, not just pitch Microsoft products.
          </motion.p>
          <motion.p className="cs-prose" variants={fadeUp}>
            The Insights to Outcomes program was built to close that gap: moving sellers from feature-led conversations to business-outcome-led ones. The audience was experienced enterprise sellers who needed sophisticated, scenario-driven learning — not basic onboarding.
          </motion.p>
          <motion.div className="cs-insight-box" variants={fadeUp}>
            <p className="cs-insight-label">The ask</p>
            <p className="cs-insight-text">Design a blended learning program that shifts experienced enterprise sellers from product-pitching to trusted advisor conversations — at Microsoft scale.</p>
          </motion.div>
        </Section>

        {/* 02 — MY ROLE */}
        <Section id="role" label="02 — My Role">
          <motion.h2 className="cs-heading" variants={fadeUp}>Design, script, and facilitate</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>ILT/VILT content development</strong> — built PowerPoint decks for instructor-led sessions on core sales methodology topics including MEDDPICC, objection handling, and trusted advisor positioning</li>
            <li><strong>Video script writing</strong> — wrote scenario-based scripts featuring a team of sellers and a customer enacting realistic enterprise sales situations, showing what went right, what went wrong, and how the approach could have been improved</li>
            <li><strong>SME collaboration</strong> — facilitated SME interviews to extract authentic selling insights; reviewed scripts against sales methodology accuracy</li>
            <li><strong>AI integration</strong> — used Microsoft Copilot throughout the design and development workflow; used AI voiceover for select content elements</li>
            <li><strong>Live VILT facilitation</strong> — facilitated live sessions on Microsoft Teams including breakout session design and moderation</li>
            <li><strong>Cohort group project design</strong> — designed the collaborative project component for cohort learning groups</li>
          </motion.ul>
        </Section>

        {/* 03 — PROGRAM STRUCTURE */}
        <Section id="structure" label="03 — Program Structure">
          <motion.h2 className="cs-heading" variants={fadeUp}>Three integrated components</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            ITO was a blended learning architecture, not a single-channel program. Each component served a distinct purpose and reinforced the others.
          </motion.p>
          <motion.div className="cs-course-list" variants={fadeUp}>
            {components.map(({ num, title, desc }) => (
              <div key={num} className="cs-course-item">
                <div className="cs-course-header">
                  <span className="cs-course-num">Component {num}</span>
                  <h3 className="cs-course-title">{title}</h3>
                </div>
                <p className="cs-course-goal">{desc}</p>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 04 — ID APPROACH */}
        <Section id="design" label="04 — Instructional Design Approach">
          <motion.h2 className="cs-heading" variants={fadeUp}>Scenario-based learning + MEDDPICC as the spine</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Authentic scenario design</strong> — scripts built around real enterprise sales moments, not idealized versions. Deliberate inclusion of realistic mistakes: interrupted customers, feature-led pitching, missed discovery questions, weak objection handling</li>
            <li><strong>Debrief structure built in</strong> — "pause and reflect" moments written into each scenario before the analysis, inspired by the Harvard Business School case method: present the situation, surface the tension, facilitate the discussion</li>
            <li><strong>MEDDPICC as the connective spine</strong> — every scenario, every breakout, every group project tied back to which MEDDPICC elements were present, missing, or mishandled</li>
            <li><strong>Tone calibrated for experienced sellers</strong> — content written for intelligent professionals who needed sharper tools, not a skills deficit. Scenarios treated sellers with respect, not condescension</li>
            <li><strong>Bloom's Taxonomy target: Apply and Analyze</strong> — the program was built for behavior change in real selling situations, not knowledge recall</li>
          </motion.ul>
        </Section>

        {/* 05 — SCRIPT APPROACH */}
        <Section id="scripts" label="05 — The Video Script Approach">
          <motion.h2 className="cs-heading" variants={fadeUp}>What made these scripts hard — and different</motion.h2>
          <motion.div className="cs-callout" variants={fadeUp}>
            <Video size={18} />
            <p>Studio-produced actor videos are a premium deliverable. Writing for actors performing realistic enterprise sales conversations is a different and harder skill than writing for screen recording or AI avatars — the dialogue has to be real, the mistakes believable, and the improvement arc earned.</p>
          </motion.div>
          <motion.div className="cs-process-steps" variants={fadeUp}>
            {scriptStructure.map(({ step, desc }) => (
              <div key={step} className="cs-step">
                <span className="cs-step-num">—</span>
                <div>
                  <p className="cs-step-title">{step}</p>
                  <p className="cs-step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 06 — TOOLS */}
        <Section id="tools" label="06 — Tools & Methods">
          <motion.h2 className="cs-heading" variants={fadeUp}>How the work got done</motion.h2>
          <motion.div className="cs-tools-grid" variants={fadeUp}>
            {tools.map(({ category, value }) => (
              <div key={category} className="cs-tools-row">
                <span className="cs-tools-category">{category}</span>
                <span className="cs-tools-value">{value}</span>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 07 — WHAT THIS DEMONSTRATES */}
        <Section id="reflection" label="07 — What This Demonstrates">
          <motion.h2 className="cs-heading" variants={fadeUp}>Why this engagement matters</motion.h2>
          <motion.div className="cs-reflections" variants={fadeUp}>
            {demonstrations.map(({ title, body }) => (
              <div key={title} className="cs-reflection">
                <h3 className="cs-reflection-title">{title}</h3>
                <p className="cs-reflection-body">{body}</p>
              </div>
            ))}
          </motion.div>
        </Section>

      </div>

      {/* FOOTER */}
      <footer className="cs-footer">
        <a href="/#case-studies" className="cs-back">
          <ArrowLeft size={16} /> Back to portfolio
        </a>
      </footer>

    </div>
  )
}
