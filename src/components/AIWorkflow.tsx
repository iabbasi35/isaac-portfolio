import { useState } from 'react'
import { MessageSquare, Users, Lightbulb, Play, BarChart2 } from 'lucide-react'

const workflows = [
  {
    id: 'synthesis',
    label: 'Synthesis',
    icon: <MessageSquare size={20} />,
    tool: 'Claude',
    description:
      'I use AI to analyze hours of stakeholder interviews and survey data in seconds, clustering themes and extracting actionable insights to define precise learning objectives faster.',
    bg: 'linear-gradient(135deg, #051a17 0%, #0d3830 100%)',
  },
  {
    id: 'personas',
    label: 'Personas',
    icon: <Users size={20} />,
    tool: 'Claude',
    description:
      'I prompt AI to synthesize interview transcripts and behavioral data into rich learner personas—uncovering motivations, barriers, and mental models that shape the design.',
    bg: 'linear-gradient(135deg, #0f0f2e 0%, #1e1060 100%)',
  },
  {
    id: 'concepting',
    label: 'Concepting',
    icon: <Lightbulb size={20} />,
    tool: 'Claude + Figma',
    description:
      'I use AI to rapidly generate first-draft learning flows, branching scenarios, and module structures—then refine each concept for tone, accuracy, and learner context.',
    bg: 'linear-gradient(135deg, #1a0a30 0%, #35145a 100%)',
  },
  {
    id: 'prototyping',
    label: 'Prototyping',
    icon: <Play size={20} />,
    tool: 'Figma + AI plugins',
    description:
      'I use AI to iterate on interaction patterns and learning flows at speed, validating concepts with stakeholders before committing to a full build.',
    bg: 'linear-gradient(135deg, #0a1525 0%, #162a50 100%)',
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    icon: <BarChart2 size={20} />,
    tool: 'Claude + data tools',
    description:
      'I use AI to design Kirkpatrick-aligned assessments and analyze learner performance data, turning behavioral signals into actionable iterations on program effectiveness.',
    bg: 'linear-gradient(135deg, #0f1a0a 0%, #1e3a10 100%)',
  },
]

export default function AIWorkflow() {
  const [activeId, setActiveId] = useState(workflows[0].id)
  const current = workflows.find((w) => w.id === activeId)!

  return (
    <section className="ai-workflow">
      <div className="section-inner">
        <h2 className="section-heading">AI workflow</h2>
        <p className="section-sub">
          AI accelerates generation but creates a new responsibility: verifying logic and{' '}
          <strong>translating machine output into meaningful human learning</strong>.
        </p>

        <div className="workflow-layout">
          <div className="workflow-sidebar">
            {workflows.map((w) => (
              <button
                key={w.id}
                className={`workflow-item${activeId === w.id ? ' active' : ''}`}
                onClick={() => setActiveId(w.id)}
              >
                <span className="workflow-item-icon">{w.icon}</span>
                <span>{w.label}</span>
                {activeId === w.id && <span className="workflow-item-arrow">→</span>}
              </button>
            ))}
          </div>

          <div className="workflow-panel">
            <div className="workflow-panel-image" style={{ background: current.bg }}>
              <div className="workflow-panel-icon-wrap">{current.icon}</div>
            </div>
            <div className="workflow-panel-body">
              <span className="workflow-tool-label">
                Preferred tool: <strong>{current.tool}</strong>
              </span>
              <p className="workflow-panel-desc">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
