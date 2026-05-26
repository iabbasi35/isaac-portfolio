import { ArrowLeft, Users, Layers, BookOpen, Zap } from 'lucide-react'
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

const tracks = [
  {
    num: '01',
    title: 'AI Agents & Agentic Workflow Training',
    learners: '12,000+ learners',
    audience: 'Developers and ML practitioners',
    bullets: [
      'Architected the AWS Generative AI Professional Certificate focused on AI agent development',
      'Curriculum covered: AI agent creation, multi-turn conversation handling, tool integration, and task automation using Amazon Bedrock Agents',
      'Hands-on labs for building intelligent agents with knowledge bases, implementing guardrails for content safety, and orchestrating complex workflows',
      'Scenario-based projects simulating real enterprise challenges — not toy examples',
    ],
  },
  {
    num: '02',
    title: 'Business-Focused AI & Automation Training',
    learners: '16,000+ learners',
    audience: 'Business professionals — no technical background required',
    bullets: [
      'Designed AWS Generative AI Applications program for non-technical professionals — the hardest curriculum calibration challenge in the portfolio',
      'Trained learners to build real AI applications using low-code tools: Amazon PartyRock and Amazon Q',
      'Multi-modal learning experiences covering prompt engineering, responsible AI implementation, and building AI-powered business applications',
      'Demonstrates the ability to calibrate technical depth for audience — making frontier AI concepts genuinely accessible without dumbing them down',
    ],
  },
  {
    num: '03',
    title: 'API Platform & Integration Training',
    learners: '20,000+ learners',
    audience: 'Developers moving from concepts to production systems',
    bullets: [
      'Designed comprehensive API training covering SDK integration, authentication/authorization, and API Gateway implementation',
      'Practical exercises for API-first development and data orchestration using DynamoDB and S3',
      'Serverless application training on event-driven architectures and cloud-native integration patterns',
    ],
  },
  {
    num: '04',
    title: 'Automation & DevOps Enablement',
    learners: '150,000+ learners',
    audience: 'DevOps engineers and cloud practitioners',
    bullets: [
      'The flagship program — DevOps training at a scale very few instructional designers ever touch',
      'Curriculum covered: automation philosophies, CI/CD pipelines, infrastructure as code, workflow automation, deployment optimization, monitoring, and source control',
      'Built for practitioners who needed both the theory and the hands-on implementation',
    ],
  },
]

const results = [
  { program: 'AI Agents & Agentic Workflow', learners: '12,000+' },
  { program: 'Business AI & Automation', learners: '16,000+' },
  { program: 'API Platform & Integration', learners: '20,000+' },
  { program: 'DevOps Enablement', learners: '150,000+' },
  { program: 'Total', learners: '198,000+' },
]

const demonstrations = [
  {
    title: 'Curriculum architecture at scale',
    body: '198,000 learners across four program tracks is not an accident. It required coherent architecture, not just content — learning objective frameworks, sequencing decisions, and multi-modal design working as an integrated system.',
  },
  {
    title: 'Technical depth in the actual subject matter',
    body: 'Bedrock, agents, guardrails, API Gateway, DynamoDB, CI/CD — this is real AWS, not surface-level cloud awareness. Designing for developers and ML practitioners requires genuine technical fluency, not just proximity to it.',
  },
  {
    title: 'Audience range within one portfolio',
    body: 'Designing for ML practitioners building production AI systems and non-technical business professionals building their first AI app requires completely different design registers. Both are in this portfolio.',
  },
  {
    title: 'Cross-functional collaboration at a product company',
    body: 'Working directly with AWS Product, Engineering, and Solutions Architecture teams is different from working with SMEs. It means content was accurate to the actual product — not documentation-lagged — and scenarios reflected real customer challenges.',
  },
  {
    title: 'Measurement discipline',
    body: 'Learner analytics were used to identify specific drop-off points, question difficulty curves, and lab completion patterns. Content was updated based on data, not intuition — and built for iteration from the start.',
  },
  {
    title: 'Coursera platform fluency',
    body: 'Professional Certificate programs on Coursera operate under quality standards beyond internal approval. Global scale, structured certification paths, and multi-modal delivery requirements are built into the design constraints from day one.',
  },
]

export default function AWSCaseStudy() {
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
            <span className="cs-logo-badge">Amazon Web Services</span>
            <span className="cs-logo-sep">·</span>
            <span className="cs-logo-badge">Training & Certification</span>
          </motion.div>

          <motion.h1 className="cs-hero-title" variants={fadeUp}>
            Generative AI & Cloud Training<br />at Scale for AWS
          </motion.h1>

          <motion.p className="cs-hero-meta" variants={fadeUp}>
            Senior Instructional Designer · Curriculum Architect · Internal
          </motion.p>

          <motion.div className="cs-hero-tools" variants={fadeUp}>
            {['Amazon Bedrock', 'PartyRock', 'Amazon Q', 'Coursera', 'DevOps', 'API Gateway'].map(tool => (
              <span key={tool} className="cs-tool-tag">{tool}</span>
            ))}
          </motion.div>

          <motion.div className="cs-stats" variants={fadeUp}>
            <div className="cs-stat">
              <Users size={18} />
              <span className="cs-stat-num">198K+</span>
              <span className="cs-stat-label">Learners globally</span>
            </div>
            <div className="cs-stat">
              <Layers size={18} />
              <span className="cs-stat-num">4</span>
              <span className="cs-stat-label">Program tracks</span>
            </div>
            <div className="cs-stat">
              <BookOpen size={18} />
              <span className="cs-stat-num">Coursera</span>
              <span className="cs-stat-label">Professional certificates</span>
            </div>
            <div className="cs-stat">
              <Zap size={18} />
              <span className="cs-stat-num">Multi-modal</span>
              <span className="cs-stat-label">Video, labs, projects</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <div className="cs-body">

        {/* 01 — SCALE */}
        <Section id="scale" label="01 — The Scale">
          <motion.h2 className="cs-heading" variants={fadeUp}>Four tracks. Four audiences. 198,000 learners.</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            This wasn't one course. It was four distinct curriculum tracks serving radically different audiences — from enterprise developers building agentic AI systems to business professionals who'd never written a line of code. Total reach: 198,000+ learners globally across professional certificate programs on Coursera.
          </motion.p>
          <motion.p className="cs-prose" variants={fadeUp}>
            The work spanned the full spectrum of cloud and AI training: hands-on labs in Amazon Bedrock, low-code AI app building in PartyRock, DevOps automation pipelines, and enterprise API architecture. Every program was built around one standard — learners had to be able to do something real when they finished.
          </motion.p>
          <motion.div className="cs-insight-box" variants={fadeUp}>
            <p className="cs-insight-label">The design standard</p>
            <p className="cs-insight-text">Labs and projects were designed before lecture content. The conceptual scaffolding was built to support the hands-on work — not the other way around.</p>
          </motion.div>
        </Section>

        {/* 02 — FOUR TRACKS */}
        <Section id="tracks" label="02 — The Four Program Tracks">
          <motion.h2 className="cs-heading" variants={fadeUp}>From ML practitioners to non-technical professionals</motion.h2>
          <motion.div className="cs-course-list" variants={fadeUp}>
            {tracks.map(({ num, title, learners, audience, bullets }) => (
              <div key={num} className="cs-course-item">
                <div className="cs-course-header">
                  <span className="cs-course-num">Track {num}</span>
                  <h3 className="cs-course-title">{title}</h3>
                  <span className="cs-course-audience">{audience}</span>
                </div>
                <p className="cs-course-videos" style={{ color: 'var(--elec)', fontWeight: 500 }}>{learners}</p>
                <ul className="cs-track-bullets">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 03 — MY ROLE */}
        <Section id="role" label="03 — My Role">
          <motion.h2 className="cs-heading" variants={fadeUp}>Architecture, design, measurement — end to end</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Curriculum architecture</strong> — designed the full structure, sequencing, and learning objective framework for each track from scratch</li>
            <li><strong>Multi-modal experience design</strong> — video lectures, interactive labs, hands-on projects, assessments, and certification exams designed as an integrated system — not separate components bolted together</li>
            <li><strong>Cross-functional partnership</strong> — worked directly with AWS Product, Engineering, and Solutions Architecture teams to align training with product roadmaps and feature releases. Content was accurate to the actual product, not documentation-lagged</li>
            <li><strong>Analytics and iteration</strong> — implemented feedback loops using learner analytics to continuously improve course quality and engagement. Measurement built in from the start, not added after launch</li>
            <li><strong>Audience range</strong> — designed for developers, DevOps engineers, and non-technical business professionals within the same portfolio, requiring three completely different design registers</li>
          </motion.ul>
        </Section>

        {/* 04 — ID APPROACH */}
        <Section id="design" label="04 — Instructional Design Approach">
          <motion.h2 className="cs-heading" variants={fadeUp}>Lab-first. Problem-centered. Data-driven.</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Lab-first philosophy</strong> — labs and projects were designed before lecture content, then the conceptual scaffolding was built to support them. This reversed the typical instructional sequence and dramatically improved transfer</li>
            <li><strong>Technical content for non-technical audiences</strong> — the business AI track required abstraction without condescension. Every concept was anchored to a business outcome first, then the mechanism explained second. PartyRock and Amazon Q removed the syntax barrier while preserving the genuine experience of building with AI</li>
            <li><strong>Scenario-based project design</strong> — hands-on labs simulated enterprise challenges, not academic exercises. A developer building an AI agent in the lab was solving the same class of problem they'd face in production — which required deep collaboration with Solutions Architecture to get the scenarios right</li>
            <li><strong>Bloom's Taxonomy by track</strong> — DevOps: Apply and Analyze (operational skills); API: Apply and Create (building integrations); Agentic AI: Analyze, Evaluate, Create (frontier technical skills); Business AI: Remember, Understand, Apply (concept accessibility first)</li>
            <li><strong>Feedback loop design</strong> — learner analytics used to identify drop-off points, question difficulty curves, and lab completion patterns. Content updated based on data, not intuition</li>
          </motion.ul>
        </Section>

        {/* 05 — COLLABORATION MODEL */}
        <Section id="collaboration" label="05 — The Collaboration Model">
          <motion.h2 className="cs-heading" variants={fadeUp}>Working inside the product company</motion.h2>
          <motion.div className="cs-callout" variants={fadeUp}>
            <Layers size={18} />
            <p>Working inside AWS meant direct access to the people who built the products being taught. This is not how most training gets made — and it's a significant part of why these programs reached 198,000 learners and kept them.</p>
          </motion.div>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Product teams</strong> — what's shipping, what's changing, what customers are struggling with. Content stayed current because it was built in partnership with the roadmap</li>
            <li><strong>Engineering teams</strong> — technical accuracy reviews, lab environment validation. Every hands-on exercise verified against the actual service behavior</li>
            <li><strong>Solutions Architecture</strong> — real customer use cases that shaped the scenario-based projects. The labs weren't invented — they were drawn from real enterprise patterns</li>
            <li><strong>Learner analytics</strong> — post-launch data fed back into pre-launch design decisions for subsequent programs, creating a continuous improvement loop across the portfolio</li>
          </motion.ul>
        </Section>

        {/* 06 — RESULTS */}
        <Section id="results" label="06 — Results">
          <motion.h2 className="cs-heading" variants={fadeUp}>198,000 learners across four programs</motion.h2>
          <motion.div className="cs-tools-grid" variants={fadeUp}>
            {results.map(({ program, learners }) => (
              <div key={program} className={`cs-tools-row${program === 'Total' ? ' cs-tools-row--total' : ''}`}>
                <span className="cs-tools-category">{program}</span>
                <span className="cs-tools-value" style={program === 'Total' ? { color: 'var(--fg)', fontWeight: 600 } : {}}>{learners}</span>
              </div>
            ))}
          </motion.div>
          <motion.ul className="cs-list" variants={fadeUp} style={{ marginTop: '2rem' }}>
            <li>Programs delivered as Coursera Professional Certificates — subject to Coursera's quality standards, not just internal approval</li>
            <li>Curriculum aligned to AWS certification paths — technically accurate enough to support exam preparation</li>
            <li>Cross-audience reach: developers, DevOps engineers, and business professionals served by one design portfolio</li>
          </motion.ul>
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

        {/* 08 — PROMPT ENGINEERING STANDARDS */}
        <Section id="bonus" label="08 — Prompt Engineering Standards">
          <motion.h2 className="cs-heading" variants={fadeUp}>Internal thought leadership — before it was a conversation</motion.h2>
          <motion.div className="cs-callout" variants={fadeUp}>
            <Zap size={18} />
            <p>While at AWS, Isaac developed and documented a Prompt Engineering Standards framework adopted across the AWS Training & Certification instructional design team — establishing repeatable, quality-controlled processes for integrating AI into the ID workflow before most teams had any formal approach. This was internal thought leadership that predated most of the industry conversation about AI in L&D.</p>
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
