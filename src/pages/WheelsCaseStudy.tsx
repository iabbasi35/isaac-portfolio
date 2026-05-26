import { ArrowLeft, BookOpen, Video, Users, Layers } from 'lucide-react'
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

const courses = [
  {
    num: '01',
    title: 'Handling Calls with Cresta AI',
    audience: 'Call center reps',
    videos: '4 videos: Overview, Single Match, Multi Match, No Match',
    goal: 'Handle every inbound driver call scenario with confidence using Five9 + Salesforce + Cresta AI.',
  },
  {
    num: '02',
    title: 'Navigating Salesforce',
    audience: 'Account managers, support reps',
    videos: '2 videos: Home/Cases/Dashboard Tabs, Cloning a Case',
    goal: 'Navigate Salesforce efficiently; manage cases, queues, and multi-department requests.',
  },
  {
    num: '03',
    title: 'Transportation Process',
    audience: 'Account managers, transportation team',
    videos: '2 videos: Who Does What, Submit a New Request',
    goal: 'Understand role responsibilities and execute end-to-end transportation requests in ePlan and Salesforce.',
  },
  {
    num: '04',
    title: 'Stage Gate Framework',
    audience: 'Project managers, cross-functional leads',
    videos: '1 video: Overview',
    goal: 'Understand the Stage Gate framework, why it exists, and how it governs project delivery at Wheels.',
  },
  {
    num: '05',
    title: 'EV Charging',
    audience: 'EV fleet drivers, field employees',
    videos: '1 video: Benefits of Proper EV Charger Setup',
    goal: 'Understand safe charger setup, fleet policy compliance, and reimbursement tracking.',
  },
]

const audiences = [
  {
    role: 'Call Center / Customer Support Reps',
    focus: 'Cresta AI + Five9 + Salesforce integration; handling Single Match, Multi Match, and No Match call scenarios; First Call Resolution logging.',
  },
  {
    role: 'Account Managers',
    focus: 'Transportation process submission via ePlan and Salesforce; client communication and request tracking.',
  },
  {
    role: 'Transportation / Operations Teams',
    focus: 'End-to-end transportation request workflow; vendor coordination; role clarity across the four-party process (Client, Account Manager, Transportation Team, Vendor).',
  },
  {
    role: 'EV Fleet Drivers / Field Employees',
    focus: 'Home EV charger setup; safety, performance, and reimbursement compliance.',
  },
]

const workflow = [
  { n: '01', title: 'Job Task Analysis', desc: 'Audience interviews and role analysis informed script outlines and what each role actually needed to know versus "nice to have."' },
  { n: '02', title: 'Script Drafting with Claude', desc: 'Prompted with role context, workflow steps, and tone guidelines. Every script reviewed and edited for instructional accuracy and plain-language clarity.' },
  { n: '03', title: 'AI Video Production in Synthesia', desc: 'Avatar selection, pacing, on-screen annotations — no studio, no scheduling, no re-shoots.' },
  { n: '04', title: 'Course Build in Articulate Rise', desc: 'Videos embedded alongside context-setting, knowledge checks, and job aids. Show-then-explain structure throughout.' },
  { n: '05', title: 'SCORM Publish & LMS Upload', desc: 'Courses published as SCORM packages and uploaded to Workday LMS.' },
  { n: '06', title: 'Workday Configuration', desc: 'Completion tracking, audience assignment, and routing configured — the right course to the right role, automatically.' },
]

export default function WheelsCaseStudy() {
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
            <span className="cs-logo-badge">Wheels Fleet Services</span>
            <span className="cs-logo-sep">via</span>
            <span className="cs-logo-badge">Axios Learning LLC</span>
          </motion.div>

          <motion.h1 className="cs-hero-title" variants={fadeUp}>
            Enterprise Learning Ecosystem<br />for Wheels Fleet Services
          </motion.h1>

          <motion.p className="cs-hero-meta" variants={fadeUp}>
            Learning Experience Designer · Consultant · AI-Powered Production
          </motion.p>

          <motion.div className="cs-hero-tools" variants={fadeUp}>
            {['Claude (AI scripts)', 'Synthesia (AI video)', 'Articulate Rise', 'Workday LMS'].map(tool => (
              <span key={tool} className="cs-tool-tag">{tool}</span>
            ))}
          </motion.div>

          <motion.div className="cs-stats" variants={fadeUp}>
            <div className="cs-stat">
              <BookOpen size={18} />
              <span className="cs-stat-num">5</span>
              <span className="cs-stat-label">Course modules</span>
            </div>
            <div className="cs-stat">
              <Video size={18} />
              <span className="cs-stat-num">10</span>
              <span className="cs-stat-label">AI-generated videos</span>
            </div>
            <div className="cs-stat">
              <Users size={18} />
              <span className="cs-stat-num">4</span>
              <span className="cs-stat-label">Distinct audience tracks</span>
            </div>
            <div className="cs-stat">
              <Layers size={18} />
              <span className="cs-stat-num">Full</span>
              <span className="cs-stat-label">LMS deployment</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <div className="cs-body">

        {/* 01 — CHALLENGE */}
        <Section id="challenge" label="01 — The Challenge">
          <motion.h2 className="cs-heading" variants={fadeUp}>Building from scratch, fast</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            Wheels Fleet Services needed to modernize how their internal teams learned and operated. Multiple departments were working with new technology — Salesforce, Cresta AI, Five9 — and new processes including transportation logistics, EV fleet management, and project governance. But there was no standardized training. Knowledge lived in people's heads, not in systems.
          </motion.p>
          <motion.div className="cs-insight-box" variants={fadeUp}>
            <p className="cs-insight-label">The ask</p>
            <p className="cs-insight-text">Build a scalable, consistent learning ecosystem from scratch that could onboard and upskill four distinct internal audiences simultaneously.</p>
          </motion.div>
        </Section>

        {/* 02 — AUDIENCES */}
        <Section id="audiences" label="02 — Audiences Identified">
          <motion.h2 className="cs-heading" variants={fadeUp}>Four roles, four distinct needs</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            The first step was defining who we were designing for — and being precise about it. Lumping audiences together would have produced training that served no one well.
          </motion.p>
          <motion.div className="cs-audience-grid" variants={fadeUp}>
            {audiences.map(({ role, focus }) => (
              <div key={role} className="cs-audience-card">
                <p className="cs-audience-role">{role}</p>
                <p className="cs-audience-focus">{focus}</p>
              </div>
            ))}
          </motion.div>
          <motion.p className="cs-prose" variants={fadeUp} style={{ marginTop: '1rem' }}>
            A fifth implicit audience — Project Managers and cross-functional leads — emerged from the content and was served through the Stage Gate Framework course.
          </motion.p>
        </Section>

        {/* 03 — ROLE */}
        <Section id="role" label="03 — My Role">
          <motion.h2 className="cs-heading" variants={fadeUp}>End-to-end ownership</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>AI script writing</strong> — wrote all video scripts using Claude as a writing partner; prompted, edited, and quality-reviewed every script for instructional clarity and tone</li>
            <li><strong>AI video direction</strong> — directed production in Synthesia; avatar selection, pacing, on-screen annotations across 10 videos</li>
            <li><strong>Course design and build</strong> — designed and built all 5 courses in Articulate Rise; lesson structure, interactivity, knowledge checks</li>
            <li><strong>LMS configuration</strong> — uploaded and configured all courses in Workday LMS; assignments, completion tracking, audience routing</li>
            <li><strong>Audience and job task analysis</strong> — determined what each role actually needed to know versus what was "nice to have"</li>
            <li><strong>Instructional sequencing</strong> — defined the design approach and course structure for each of the five tracks</li>
          </motion.ul>
        </Section>

        {/* 04 — COURSES */}
        <Section id="courses" label="04 — Course Breakdown">
          <motion.h2 className="cs-heading" variants={fadeUp}>Five courses, ten videos, four audiences</motion.h2>
          <motion.div className="cs-course-list" variants={fadeUp}>
            {courses.map(({ num, title, audience, videos, goal }) => (
              <div key={num} className="cs-course-item">
                <div className="cs-course-header">
                  <span className="cs-course-num">Course {num}</span>
                  <h3 className="cs-course-title">{title}</h3>
                  <span className="cs-course-audience">{audience}</span>
                </div>
                <p className="cs-course-videos">{videos}</p>
                <p className="cs-course-goal">{goal}</p>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 05 — ID APPROACH */}
        <Section id="design" label="05 — Instructional Design Approach">
          <motion.h2 className="cs-heading" variants={fadeUp}>Merrill's First Principles — demonstration before explanation</motion.h2>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Show-then-explain structure</strong> — every video shows the Salesforce screen or process in action before the concept is named</li>
            <li><strong>"Colleague showing you the ropes" voice</strong> — phrases like "Alright, so here we have..." were deliberate tone choices, not accidents</li>
            <li><strong>Cognitive load management</strong> — complex workflows broken into micro-videos (Single Match, Multi Match, No Match as separate short lessons rather than one long one)</li>
            <li><strong>Rise as scaffolding</strong> — context-setting, knowledge checks, and job aids surround each video rather than replacing it</li>
            <li><strong>Bloom's Taxonomy target: Remember and Apply</strong> — these are operational skills, not conceptual ones; the design reflects that</li>
          </motion.ul>
        </Section>

        {/* 06 — AI WORKFLOW */}
        <Section id="workflow" label="06 — The AI-Powered Production Workflow">
          <motion.h2 className="cs-heading" variants={fadeUp}>A full ecosystem in a fraction of the time</motion.h2>
          <motion.div className="cs-callout" variants={fadeUp}>
            <Layers size={18} />
            <p>This engagement is a live example of what AI-native instructional design looks like in practice — not AI as a novelty, but AI embedded at every stage of a real production workflow.</p>
          </motion.div>
          <motion.div className="cs-process-steps" variants={fadeUp}>
            {workflow.map(({ n, title, desc }) => (
              <div key={n} className="cs-step">
                <span className="cs-step-num">{n}</span>
                <div>
                  <p className="cs-step-title">{title}</p>
                  <p className="cs-step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* 07 — WHAT THIS DEMONSTRATES */}
        <Section id="reflection" label="07 — What This Demonstrates">
          <motion.h2 className="cs-heading" variants={fadeUp}>Why this engagement matters</motion.h2>
          <motion.div className="cs-reflections" variants={fadeUp}>
            {[
              {
                title: 'End-to-end ownership',
                body: 'From audience analysis through LMS deployment — this wasn\'t a handoff engagement. Every decision, from script tone to Workday configuration, was made and executed by one person.',
              },
              {
                title: 'AI fluency in the actual workflow',
                body: 'Claude and Synthesia weren\'t used as experiments. They were the production pipeline. The result: a multi-course ecosystem delivered faster and at lower cost than traditional video production.',
              },
              {
                title: 'Serving multiple audiences from one engagement',
                body: 'Four distinct roles, five courses, ten videos — all coherent, all purposeful, none redundant. That requires systems thinking, not just content creation.',
              },
              {
                title: 'Writing that sounds human',
                body: 'The hardest thing to do with AI-assisted writing is to not sound like AI wrote it. Every script was edited until it read like a real person — specific, conversational, and clear.',
              },
            ].map(({ title, body }) => (
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
