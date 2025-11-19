import React from 'react'
import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <header id="top" ref={ref} className={`hero reveal ${inView ? 'revealed' : ''}`}>
      <div className="hero-overlay" />
      <div className="hero-content text-center">
        <div className="hero-inner">
          <img src="/logos/pg-logo-white.webp" alt="Project Gunita" className="hero-logo mb-3" />
          <h1 className="hero-title">Preserving the memory of the struggle against tyranny.</h1>
          <p className="hero-hashtag">#DefendHistorical Truth</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
            <a href="/archives" className="btn btn-primary btn-lg">See Archives</a>
          </div>
        </div>
      </div>
    </header>
  )
}
