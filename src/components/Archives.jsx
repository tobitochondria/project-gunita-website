import React from 'react'
import useInView from '../hooks/useInView'

export default function Archives() {
  const [ref, inView] = useInView({ threshold: 0.12 })
  const cards = [
    {
      key: 'newspapers',
      title: 'Newspapers',
      desc: 'Access periodicals that reported—and sometimes resisted—the narratives of the Martial Law era.',
      link: '/archives/newspapers'
    },
    {
      key: 'books',
      title: 'Books',
      desc: 'Delve into scholarly works and testimonies that dissect the complexities of dictatorship and resistance.',
      link: '/archives/books'
    },
    {
      key: 'ephemera',
      title: 'Ephemera',
      desc: 'Explore campaign and protest materials that fueled the struggle for truth and freedom.',
      link: '/archives/ephemera'
    },
    {
      key: 'reports',
      title: 'Official Reports',
      desc: 'Review critical investigations and government records that document abuses and accountability efforts.',
      link: '/archives/reports'
    },
    {
      key: 'retrieved',
      title: 'Retrieved Collections',
      desc: 'Uncover rare and salvaged materials donated by private individuals that preserve the memories often erased from official history.',
      link: '/archives/retrieved-collections'
    },
    {
      key: 'documentaries',
      title: 'Documentaries',
      desc: 'Experience powerful visual accounts capturing the voices, events, and legacies of Martial Law.',
      link: '/archives/documentaries'
    }
  ]

  return (
    <section id="archives" ref={ref} className={`archives-section py-5 reveal ${inView ? 'revealed' : ''}`}>
      <div className="container">
        <h2 className="mb-4 text-center">Archives</h2>
        <div className="row g-4">
          {cards.map((c) => (
            <div className="col-md-4" key={c.key}>
              <div
                className="card h-100 shadow-sm interactive-card"
                onMouseMove={(e) => {
                  const el = e.currentTarget
                  const rect = el.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const cx = rect.width / 2
                  const cy = rect.height / 2
                  const maxRot = 10 // degrees
                  const maxTz = 12 // px
                  const ry = -((x - cx) / cx) * maxRot
                  const rx = ((y - cy) / cy) * maxRot
                  // distance from center (0..1)
                  const dx = (x - cx) / cx
                  const dy = (y - cy) / cy
                  const dist = Math.min(1, Math.hypot(dx, dy))
                  const tz = Math.round((1 - Math.abs(dist)) * maxTz)
                  el.style.setProperty('--rx', `${rx}deg`)
                  el.style.setProperty('--ry', `${ry}deg`)
                  el.style.setProperty('--tz', `${tz}px`)
                  el.classList.add('is-hover')
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.setProperty('--rx', `0deg`)
                  el.style.setProperty('--ry', `0deg`)
                  el.style.setProperty('--tz', `0px`)
                  el.classList.remove('is-hover')
                }}
              >
                <img
                  src="/logos/PG - Cover BG.png"
                  className="card-img-top"
                  alt={c.title}
                  style={{ height: 220, objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.desc}</p>
                  <div className="mt-auto">
                    <a href={c.link} className="btn btn-outline-primary">Go to {c.title} collection</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
