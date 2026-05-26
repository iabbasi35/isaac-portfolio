import { ArrowLeft, Users, Star, BookOpen, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
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

export default function GoogleCaseStudy() {
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
            <span className="cs-logo-badge">Google</span>
            <span className="cs-logo-sep">×</span>
            <span className="cs-logo-badge">Coursera</span>
          </motion.div>

          <motion.h1 className="cs-hero-title" variants={fadeUp}>
            Google Data Analytics &amp; Cybersecurity<br />Professional Certificates
          </motion.h1>

          <motion.p className="cs-hero-meta" variants={fadeUp}>
            Curriculum Development Manager · Instructional Design Lead
          </motion.p>

          <motion.div className="cs-stats" variants={fadeUp}>
            <div className="cs-stat">
              <Users size={18} />
              <span className="cs-stat-num">3.5M+</span>
              <span className="cs-stat-label">Data Analytics learners</span>
            </div>
            <div className="cs-stat">
              <Users size={18} />
              <span className="cs-stat-num">1.4M+</span>
              <span className="cs-stat-label">Cybersecurity learners</span>
            </div>
            <div className="cs-stat">
              <Star size={18} />
              <span className="cs-stat-num">4.8★</span>
              <span className="cs-stat-label">Average rating</span>
            </div>
            <div className="cs-stat">
              <BookOpen size={18} />
              <span className="cs-stat-num">18</span>
              <span className="cs-stat-label">Courses (9 per certificate)</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <div className="cs-body">

        {/* 01 — THE BRIEF */}
        <Section id="brief" label="01 — The Brief">
          <motion.h2 className="cs-heading" variants={fadeUp}>What was the goal?</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            Google needed two industry-grade professional certificates accessible to complete beginners — no degree required, no prior experience assumed. The target: job-ready skills in under six months at 10 hours per week, delivered fully online and self-paced on Coursera.
          </motion.p>
          <motion.p className="cs-prose" variants={fadeUp}>
            The stakes were high. These would become Google Career Certificates — Google's flagship workforce development initiative, designed to open doors in data analytics and cybersecurity for people who had been locked out of those careers by traditional gatekeeping.
          </motion.p>
          <motion.div className="cs-callout" variants={fadeUp}>
            <Award size={18} />
            <p>These certificates are now among the top 5 most-enrolled professional certificates on Coursera globally and are recognized by the Biden administration's national cybersecurity workforce initiative.</p>
          </motion.div>
        </Section>

        {/* 02 — MY ROLE */}
        <Section id="role" label="02 — My Role">
          <motion.h2 className="cs-heading" variants={fadeUp}>Scope and responsibility</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            I managed a team of 12 writers and instructional designers split evenly across both certificates — six per track. Running both simultaneously meant managing two parallel workstreams: timelines, milestones, deliverables, and SME scheduling across 18 courses total.
          </motion.p>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li><strong>Script review and editing</strong> — reviewed every script for instructional clarity, accuracy, tone consistency, and learning alignment before it moved to production</li>
            <li><strong>Instructional strategy</strong> — set the design approach, frameworks, and quality bar across both teams; documented standards so 12 people produced one coherent voice</li>
            <li><strong>Audience and job task analysis</strong> — led the learner research that shaped course sequencing and content decisions</li>
            <li><strong>SME facilitation</strong> — ran subject matter expert sessions to extract and translate technical knowledge into learnable content</li>
            <li><strong>Course metadata review</strong> — approved all titles, descriptions, learning objectives, and quiz logic before launch</li>
            <li><strong>Project management</strong> — owned the production calendar, dependency mapping, and stakeholder communication for both tracks</li>
          </motion.ul>
        </Section>

        {/* 03 — AUDIENCE ANALYSIS */}
        <Section id="audience" label="03 — Audience Analysis">
          <motion.h2 className="cs-heading" variants={fadeUp}>Who were we designing for?</motion.h2>
          <motion.p className="cs-prose" variants={fadeUp}>
            Career changers with no technical background — the "curious but intimidated" learner. Median age 28–35, working adults balancing jobs and family. Their motivation was economic mobility, not academic interest. That distinction drove every design decision.
          </motion.p>
          <motion.div className="cs-insight-box" variants={fadeUp}>
            <p className="cs-insight-label">Key insight from job task analysis</p>
            <p className="cs-insight-text">Learners needed to think like practitioners, not pass certification exams. This single realization reshaped the entire content strategy — away from comprehensive coverage, toward high-frequency job tasks.</p>
          </motion.div>
          <motion.h3 className="cs-subheading" variants={fadeUp}>Job Task Analysis approach</motion.h3>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li>Interviewed working data analysts and cybersecurity professionals across industries</li>
            <li>Identified the 20% of tasks that account for 80% of day-to-day work</li>
            <li>Mapped those tasks directly to course modules and hands-on activities</li>
            <li>Deliberately cut topics that were academically interesting but professionally irrelevant</li>
          </motion.ul>
        </Section>

        {/* 04 — ID APPROACH */}
        <Section id="design" label="04 — Instructional Design Approach">
          <motion.h2 className="cs-heading" variants={fadeUp}>Framework: Merrill's First Principles + Problem-Centered Learning</motion.h2>
          <motion.div className="cs-principles-grid" variants={fadeUp}>
            {[
              { label: 'Activation', body: 'Every module opens by connecting to something learners already know — grounding new concepts in existing mental models.' },
              { label: 'Demonstration', body: 'Concepts shown in real workplace contexts, not abstract definitions. What does a data analyst actually do on a Tuesday?' },
              { label: 'Application', body: 'Hands-on projects and labs at every stage — not stockpiled at the end where dropout risk is highest.' },
              { label: 'Integration', body: 'Capstone projects mirror actual job tasks: a data dashboard, an incident response report, a real deliverable for a portfolio.' },
            ].map(({ label, body }) => (
              <div key={label} className="cs-principle-card">
                <span className="cs-principle-label">{label}</span>
                <p className="cs-principle-body">{body}</p>
              </div>
            ))}
          </motion.div>

          <motion.h3 className="cs-subheading" variants={fadeUp}>Bloom's Taxonomy alignment across 9 courses</motion.h3>
          <motion.div className="cs-bloom" variants={fadeUp}>
            {[
              { courses: 'Courses 1–2', level: 'Remember · Understand', desc: 'Foundational vocabulary, concepts, and mental models' },
              { courses: 'Courses 3–5', level: 'Apply · Analyze', desc: 'Tools, case studies, real datasets, practical problem-solving' },
              { courses: '6–8 / Capstone', level: 'Evaluate · Create', desc: 'Portfolio-ready projects, independent judgment, job simulation' },
            ].map(({ courses, level, desc }) => (
              <div key={courses} className="cs-bloom-row">
                <span className="cs-bloom-course">{courses}</span>
                <span className="cs-bloom-level">{level}</span>
                <span className="cs-bloom-desc">{desc}</span>
              </div>
            ))}
          </motion.div>

          <motion.h3 className="cs-subheading" variants={fadeUp}>Video design principles</motion.h3>
          <motion.ul className="cs-list" variants={fadeUp}>
            <li>Scripts written for a "mentor, not lecturer" tone — conversational, encouraging, specific</li>
            <li>Average video length capped at 4–6 minutes based on engagement and drop-off data</li>
            <li>Mix of talking head, screen recording, and motion graphics to prevent cognitive fatigue</li>
            <li>Global audience editing: eliminated idioms, cultural assumptions, and US-centric examples</li>
          </motion.ul>
        </Section>

        {/* 05 — DEVELOPMENT PROCESS */}
        <Section id="process" label="05 — Development Process">
          <motion.h2 className="cs-heading" variants={fadeUp}>How the machine worked</motion.h2>
          <motion.div className="cs-process-steps" variants={fadeUp}>
            {[
              { n: '01', title: 'Job Task Analysis', desc: 'Informed course outline and learning objective mapping. The foundation everything else rested on.' },
              { n: '02', title: 'Outline Review', desc: 'Instructional review against Bloom\'s taxonomy, sequencing logic checked, scope debated and locked.' },
              { n: '03', title: 'Script Development', desc: 'Writers drafted, Isaac reviewed against instructional standards and SME accuracy before external review.' },
              { n: '04', title: 'SME Review Cycles', desc: 'Two rounds: content accuracy first, then tone, accessibility, and global language calibration.' },
              { n: '05', title: 'Production Handoff', desc: 'Scripts to production with shot notes, pacing guidance, and visual treatment flags.' },
              { n: '06', title: 'Assessment Design', desc: 'Quizzes, graded assignments, and peer reviews mapped explicitly to learning objectives.' },
              { n: '07', title: 'Platform QA', desc: 'Every description, objective, label, and quiz logic reviewed before publish on Coursera.' },
              { n: '08', title: 'Launch & Iteration', desc: 'Learner feedback monitored post-launch. Content updated based on ratings and drop-off patterns.' },
            ].map(({ n, title, desc }) => (
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

        {/* 06 — RESULTS */}
        <Section id="results" label="06 — The Results">
          <motion.h2 className="cs-heading" variants={fadeUp}>Impact at scale</motion.h2>
          <motion.div className="cs-results-grid" variants={fadeUp}>
            <div className="cs-result-card cs-result-card--google">
              <p className="cs-result-cert">Data Analytics Certificate</p>
              <div className="cs-result-stats">
                <div><span className="cs-result-big">3.5M+</span><span>learners enrolled</span></div>
                <div><span className="cs-result-big">4.8★</span><span>average rating</span></div>
                <div><span className="cs-result-big">Top 5</span><span>most-enrolled on Coursera globally</span></div>
                <div><span className="cs-result-big">9</span><span>courses · ~180 hours of content</span></div>
              </div>
            </div>
            <div className="cs-result-card cs-result-card--cyber">
              <p className="cs-result-cert">Cybersecurity Certificate</p>
              <div className="cs-result-stats">
                <div><span className="cs-result-big">1.4M+</span><span>learners enrolled</span></div>
                <div><span className="cs-result-big">4.8★</span><span>average rating</span></div>
                <div><span className="cs-result-big">White House</span><span>recognized workforce development program</span></div>
                <div><span className="cs-result-big">9</span><span>courses · ~180 hours of content</span></div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* 07 — REFLECTION */}
        <Section id="reflection" label="07 — What I Learned">
          <motion.h2 className="cs-heading" variants={fadeUp}>Reflections on scale</motion.h2>
          <motion.div className="cs-reflections" variants={fadeUp}>
            {[
              {
                title: 'Document the quality bar before you start',
                body: 'Managing two tracks simultaneously required ruthless prioritization and shared standards documented upfront. Without a rubric, 12 people produce 12 different tones.',
              },
              {
                title: 'The job task analysis is the highest-leverage hour',
                body: 'Every hour spent on JTA saved ten hours of revision later. The single best investment in any curriculum project is understanding the actual job before writing a single learning objective.',
              },
              {
                title: 'Learner motivation is fragile at scale',
                body: 'A confusing transition between videos costs thousands of completions. When you\'re building for 3.5 million people, friction compounds. Clarity is not a nice-to-have — it\'s a retention strategy.',
              },
              {
                title: 'Global means genuinely global',
                body: 'Writing for a global audience means eliminating idioms, cultural assumptions, and US-centric examples. The hardest editing note to give, and the most important one.',
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
        <div className="cs-footer-links">
          <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" rel="noopener noreferrer" className="cs-ext-link">
            View Data Analytics Certificate ↗
          </a>
          <a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="cs-ext-link">
            View Cybersecurity Certificate ↗
          </a>
        </div>
      </footer>

    </div>
  )
}
