import { Network, TrendingUp, Target, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const studies = [
  {
    title: 'AWS Generative AI & Cloud Training at Scale',
    tags: ['Curriculum Architecture', 'Generative AI', 'Coursera', 'DevOps'],
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #1a3a6b 55%, #0d2d55 100%)',
    icon: <Cpu size={22} color="rgba(100,180,255,0.7)" />,
    label: 'AWS · Training & Certification',
    href: '/work/aws-training',
    img: '/thumbnails/aws-training.png',
  },
  {
    title: 'Google Data Analytics & Cybersecurity Professional Certificates on Coursera',
    tags: ['Curriculum Design', 'Instructional Leadership', 'Coursera', 'Scale'],
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #1a3a6b 55%, #0d2d55 100%)',
    icon: <Network size={22} color="rgba(100,180,255,0.7)" />,
    label: 'Google · Coursera',
    href: '/work/google-certificates',
    img: '/thumbnails/google-certificate.png',
  },
  {
    title: 'AI-Powered Learning Ecosystem for Wheels Fleet Services',
    tags: ['AI Production', 'Articulate Rise', 'Synthesia', 'Workday LMS'],
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #1a3a6b 55%, #0d2d55 100%)',
    icon: <TrendingUp size={22} color="rgba(120,220,100,0.7)" />,
    label: 'Wheels · Enterprise L&D',
    href: '/work/wheels-fleet',
    img: '/thumbnails/wheels-fleet.png',
  },
  {
    title: 'Microsoft Insights to Outcomes (ITO) Sales Enablement Program',
    tags: ['Sales Enablement', 'MEDDPICC', 'VILT', 'Blended Learning'],
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #1a3a6b 55%, #0d2d55 100%)',
    icon: <Target size={22} color="rgba(100,180,255,0.7)" />,
    label: 'Microsoft · Sales Enablement',
    href: '/work/microsoft-ito',
    img: '/thumbnails/microsoft-ito.png',
  },
]

export default function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="section-inner">
        <h2 className="section-heading">Case studies</h2>
        <p className="section-sub">
          Each project is a different puzzle, but my approach stays the same: align people, process, and platforms to create measurable learning impact.
        </p>

        <div className="case-grid">
          {studies.map((study, i) => {
            const inner = (
              <>
                <div className="case-card-image" style={{ background: study.gradient }}>
                  {'img' in study && study.img && (
                    <img src={study.img} alt={study.title} className="case-card-thumb" />
                  )}
                  {!('img' in study && study.img) && (
                    <div className="case-card-image-inner">
                      <div className="case-card-image-icon">{study.icon}</div>
                      <span className="case-card-image-label">{study.label}</span>
                    </div>
                  )}
                </div>
                <h3 className="case-card-title">{study.title}</h3>
                <div className="case-card-tags">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {study.href && <span className="case-card-cta">Read case study →</span>}
              </>
            )
            return study.href ? (
              <Link key={i} to={study.href} className="case-card case-card--linked">
                {inner}
              </Link>
            ) : (
              <div key={i} className="case-card">{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
