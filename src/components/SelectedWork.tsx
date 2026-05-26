import { useState } from 'react'
import { Film, Zap, Monitor, Code2, FileText, MousePointer, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

type ContentType = 'youtube' | 'launch' | 'pdf' | 'apps' | 'elearning' | 'ilt'

const eLearningCourses = [
  {
    externalUrl: 'https://360.articulate.com/review/content/54c301a9-d5b5-4f4b-b58b-70bcdbbf6326/review',
    title: 'Call & Case Management with Wheels CCaaS AI',
  },
  {
    externalUrl: 'https://360.articulate.com/review/content/de1d80fa-4d29-45c0-b397-28026cbe8a8b/review',
    title: 'Navigating Salesforce',
  },
  // add more courses here as { externalUrl: '...', title: '...' }
]

const iltDecks = [
  {
    src: 'https://drive.google.com/file/d/12a1v0g8XEW0Z2RViSMzCd4ilfMls4Eup/preview',
    externalUrl: 'https://drive.google.com/file/d/12a1v0g8XEW0Z2RViSMzCd4ilfMls4Eup/view',
    title: 'Build Smarter Apps with Einstein Prediction Builder',
  },
  {
    src: 'https://drive.google.com/file/d/1P2UX0CAzHXbYK9f8qYfCAIFWc6cSFfqO/preview',
    externalUrl: 'https://drive.google.com/file/d/1P2UX0CAzHXbYK9f8qYfCAIFWc6cSFfqO/view',
    title: 'ILT Deck',
  },
  // add more decks here as { src: '...preview', externalUrl: '...view', title: '...' }
]

const learningApps = [
  { src: '/apps/methodology-explorer.html', label: 'Methodology Explorer' },
  { src: '/apps/battlecard-pro.html', label: 'Deal Desk Duel' },
  { src: '/apps/abac-policy-builder.html', label: 'ABAC Policy Builder' },
  // add more apps here as { src: '/apps/filename.html', label: 'App Name' }
]

interface WorkItem {
  id: string
  label: string
  icon: React.ReactNode
  title: string
  tools: string
  description: string
  type: ContentType
  src?: string
  externalUrl?: string
}

const items: WorkItem[] = [
  {
    id: 'video',
    label: 'Video Production',
    icon: <Film size={20} />,
    title: 'Wiz Code & CI/CD Policies',
    tools: 'Camtasia · ElevenLabs · Wiz Platform',
    description:
      'A product walkthrough explaining Wiz Code & CI/CD Policies — scripted, edited in Camtasia, and voiced with ElevenLabs AI audio. Published natively in the Wiz platform for all users.',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/_4A-q6KmisQ?rel=0&modestbranding=1',
  },
  {
    id: 'rapid',
    label: 'Concept to Quick Deliverable',
    icon: <Zap size={20} />,
    title: 'Virtru Product Explainer',
    tools: 'Rapid Development · Video',
    description:
      'A take-home assessment deliverable demonstrating the ability to go from zero context to a polished product explainer — concept, script, and production completed under time constraints.',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/sCSpMPD6vos?rel=0&modestbranding=1',
  },
  {
    id: 'elearning',
    label: 'eLearning Development',
    icon: <Monitor size={20} />,
    title: 'Call & Case Management with Wheels CCaaS AI',
    tools: 'Articulate Rise · Synthesia · Workday LMS',
    description:
      'A Rise course module built for Wheels Fleet Services call center reps — Synthesia AI video, knowledge checks, and job aids structured around Merrill\'s First Principles.',
    type: 'elearning',
  },
  {
    id: 'apps',
    label: 'Learning Apps',
    icon: <Code2 size={20} />,
    title: 'Interactive Learning Applications',
    tools: 'HTML · CSS · JavaScript · Generative AI',
    description:
      'Custom-built interactive learning applications developed using vibe coding and generative AI — designed for rapid deployment without an LMS.',
    type: 'apps',
  },
  {
    id: 'ilt',
    label: 'ILT / VILT Design',
    icon: <FileText size={20} />,
    title: 'Instructor-Led Training Decks',
    tools: 'PowerPoint · Salesforce · ILT/VILT',
    description:
      'Instructor-led training decks designed for live facilitation — built for conversation, not slide reading. Aligned to Bloom\'s Taxonomy and sales methodology.',
    type: 'ilt',
  },
  {
    id: 'simulation',
    label: 'Simulation Design',
    icon: <MousePointer size={20} />,
    title: 'AWS IAM Clickthrough Simulation',
    tools: 'Articulate Storyline · AWS · Simulation',
    description:
      'A software simulation and clickthrough exercise for AWS Identity and Access Management (IAM) — learners navigate the real interface in a guided, low-stakes environment.',
    type: 'launch',
    externalUrl: 'https://360.articulate.com/review/content/affadf35-6ad6-4ae5-ba10-0d28a5205b22/review',
  },
]

function AppsCarousel() {
  const [index, setIndex] = useState(0)
  const app = learningApps[index]
  const total = learningApps.length

  return (
    <div className="sw-apps-carousel">
      <div className="sw-apps-scaler">
        <iframe
          key={app.src}
          src={app.src}
          className="sw-embed"
          title={app.label}
        />
      </div>
      <div className="sw-carousel-controls">
        {total > 1 ? (
          <>
            <button
              className="sw-carousel-btn"
              onClick={() => setIndex((index - 1 + total) % total)}
              aria-label="Previous app"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="sw-carousel-counter">{app.label} · {index + 1} / {total}</span>
            <button
              className="sw-carousel-btn"
              onClick={() => setIndex((index + 1) % total)}
              aria-label="Next app"
            >
              <ChevronRight size={16} />
            </button>
          </>
        ) : (
          <span className="sw-carousel-counter">{app.label}</span>
        )}
        <a
          href={app.src}
          target="_blank"
          rel="noopener noreferrer"
          className="sw-carousel-popout"
          aria-label="Open in new window"
          title="Open in new window"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

function ELearningCarousel({ icon }: { icon: React.ReactNode }) {
  const [index, setIndex] = useState(0)
  const course = eLearningCourses[index]
  const total = eLearningCourses.length

  return (
    <div className="sw-apps-carousel">
      <div className="sw-launch">
        <div className="sw-launch-icon">{icon}</div>
        <p className="sw-launch-title">{course.title}</p>
        <a
          href={course.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sw-launch-btn"
        >
          Launch course <ArrowUpRight size={15} />
        </a>
        <p className="sw-launch-note">Opens in Articulate Review 360</p>
      </div>
      {total > 1 && (
        <div className="sw-carousel-controls">
          <button
            className="sw-carousel-btn"
            onClick={() => setIndex((index - 1 + total) % total)}
            aria-label="Previous course"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="sw-carousel-counter">{index + 1} / {total}</span>
          <button
            className="sw-carousel-btn"
            onClick={() => setIndex((index + 1) % total)}
            aria-label="Next course"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

function ILTCarousel() {
  const [index, setIndex] = useState(0)
  const deck = iltDecks[index]
  const total = iltDecks.length

  return (
    <div className="sw-apps-carousel">
      <iframe
        key={deck.src}
        src={deck.src}
        className="sw-embed"
        title={deck.title}
      />
      {total > 1 && (
        <div className="sw-carousel-controls">
          <button
            className="sw-carousel-btn"
            onClick={() => setIndex((index - 1 + total) % total)}
            aria-label="Previous deck"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="sw-carousel-counter">{deck.title} · {index + 1} / {total}</span>
          <button
            className="sw-carousel-btn"
            onClick={() => setIndex((index + 1) % total)}
            aria-label="Next deck"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

function EmbedPanel({ item }: { item: WorkItem }) {
  if (item.type === 'apps') {
    return <AppsCarousel />
  }

  if (item.type === 'elearning') {
    return <ELearningCarousel icon={item.icon} />
  }

  if (item.type === 'ilt') {
    return <ILTCarousel />
  }

  if (item.type === 'launch') {
    return (
      <div className="sw-launch">
        <div className="sw-launch-icon">{item.icon}</div>
        <p className="sw-launch-title">{item.title}</p>
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sw-launch-btn"
        >
          Launch course <ArrowUpRight size={15} />
        </a>
        <p className="sw-launch-note">Opens in Articulate Review 360</p>
      </div>
    )
  }

  return (
    <iframe
      key={item.id}
      src={item.src}
      className="sw-embed"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      title={item.title}
    />
  )
}

export default function SelectedWork() {
  const [activeId, setActiveId] = useState(items[0].id)
  const current = items.find(i => i.id === activeId)!

  return (
    <section className="ai-workflow" id="selected-work">
      <div className="section-inner">
        <div className="workflow-layout">
          <div className="workflow-sidebar">
            <h2 className="sw-sidebar-heading">Selected work</h2>
            <p className="sw-sidebar-sub">A sample of deliverables across production modalities — from product video to simulation design.</p>
            {items.map(item => (
              <button
                key={item.id}
                className={`workflow-item${activeId === item.id ? ' active' : ''}`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="workflow-item-icon">{item.icon}</span>
                <span>{item.label}</span>
                {activeId === item.id && <span className="workflow-item-arrow">→</span>}
              </button>
            ))}

          </div>

          <div className="sw-right-col">
            <div className="sw-media">
              <EmbedPanel item={current} />
            </div>
            <div className="sw-info">
              <div className="sw-panel-header">
                <div>
                  <h3 className="sw-panel-title">{current.title}</h3>
                  <span className="sw-tools-label">{current.tools}</span>
                </div>
                {current.externalUrl && (
                  <a
                    href={current.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sw-external-link"
                    title="Open in new tab"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
              <p className="sw-desc">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
