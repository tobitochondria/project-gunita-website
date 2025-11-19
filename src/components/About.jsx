import React from 'react'
import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="about" ref={ref} className={`about-section py-5 reveal reveal-children ${inView ? 'revealed' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3">About Us</h2>
            <p>
              Project Gunita is an academic research organization focused on debunking myths and countering historical distortion of Philippine contemporary history.
            </p>
            <p>
              The Project began as an online initiative to archive books, magazines, and other relevant materials that document
              the abuses during the Marcos dictatorship and expanded to on-the-ground projects such as partnering with schools and organizing different activities that popularize the fight against disinformation and historical distortion.
            </p>
            <p>
              Project Gunita has digitized over 100 newspapers and
              documents from the Martial Law era.
            </p>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="featured-photo shadow-sm">
              <img src="/decor/clipping-1.webp" alt="Featured clipping" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
