import React from 'react'
import ContactForm from './ContactForm'

const pillars = ['Clarity', 'Systems', 'Culture']

export default function Evolution() {
  return (
    <>
      <section className="evolution">
        <div className="section-inner">
          <div className="evolution-layout">
          <div className="evolution-photo">
            <img src="/dog-and-me.jpeg" alt="Isaac Abbasi" />
          </div>
          <div className="evolution-card">
            <h2 className="evolution-heading">Evolution</h2>
            <p className="evolution-text">
              When I started in L&D, I thought success meant polished deliverables: the perfect slide deck, the clever interaction. Over time, I learned that the real craft lives in alignment. Most learning challenges aren't content problems. They're communication problems. They're about how organizations make decisions together.
            </p>
            <p className="evolution-text">
              Today, I measure success by how well learning solutions keep guiding teams long after the project ends. That's when I know it truly worked.
            </p>

            <div className="evolution-pillars">
              {pillars.map((p, i) => (
                <React.Fragment key={p}>
                  <div className="pillar-item">
                    <div className="pillar-dot" />
                    <span className="pillar-label">{p}</span>
                  </div>
                  {i < pillars.length - 1 && (
                    <div className="pillar-connector">
                      <div className="pillar-connector-line" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="still-evolving">
        <div className="section-inner">
          <h2 className="still-evolving-heading">Still learning</h2>
          <p className="still-evolving-sub">
            My thinking keeps changing, and that's the point. Learning should evolve with the people who experience it and with the ones who design it.
          </p>
          <div className="still-evolving-ctas">
            <a href="#case-studies" className="btn-primary">View my work</a>
            <a
              href="https://www.linkedin.com/in/isaacabbasi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Let's connect on LinkedIn
            </a>
          </div>
          <div className="still-evolving-footnote">
            <img src="/dog.png" alt="My dog" className="still-evolving-avatar" />
            <p>(My dog approves of this message from his curled-up spot nearby)</p>
          </div>
        </div>
      </section>
    </>
  )
}
