import React, { useState, useEffect } from 'react'
import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  // Chronological order: 1972 (Sept) -> 1972 (Dec) -> 1983 (Sept) -> 1983 (Dec) -> 1986 (Feb)
  const images = [
    '/decor/clipping-2.webp',
    '/decor/clipping-3.webp',
    '/decor/clipping-4.webp',
    '/decor/clipping-5.webp',
    '/decor/clipping-1.webp'
  ]

  const captions = [
    {
      heading: 'Philippines Sunday Express (Sept. 24, 1972)',
      text: 'The day silence fell: The morning edition announcing the declaration of Martial Law and the beginning of the \u2018New Society.\u2019'
    },
    {
      heading: 'Liberation (Dec. 15, 1972)',
      text: 'Early underground resistance: Liberation campaigns against the ratification of the 1973 Constitution just months into Martial Law.'
    },
    {
      heading: 'Ang Pahayagang Malaya (Sept. 1983)',
      text: 'The turning point: Millions fill the streets for Ninoy Aquino\'s funeral, transforming grief into a massive show of defiance.'
    },
    {
      heading: 'The Guardian (Dec. 1983)',
      text: 'The crumbling economy: The \u2018Mosquito Press\u2019 exposes billions in hidden wealth as the country faces a financial crisis following the Aquino assassination.'
    },
    {
      heading: 'Philippine Daily Inquirer (Feb. 26, 1986)',
      text: 'Victory at EDSA: The iconic headline announcing the flight of the Marcos family and the end of the 21-year regime.'
    }
  ]

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // Preload images once
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (isPaused) return undefined
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isPaused])

  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length)
  const goNext = () => setCurrent((p) => (p + 1) % images.length)

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
              <div
                className="carousel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <div className="carousel-slide" key={src}>
                      <img src={src} alt={`Featured clipping ${i + 1}`} className="img-fluid rounded" />
                    </div>
                  ))}
                </div>

                <div className="carousel-caption" aria-hidden={false}>
                  <strong className="caption-heading">{captions[current].heading}</strong>
                  <div className="caption-text">{captions[current].text}</div>
                </div>

                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goPrev}
                  aria-label="Previous clipping"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goNext}
                  aria-label="Next clipping"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
