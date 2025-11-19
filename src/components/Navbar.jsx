import React from 'react'
import useInView from '../hooks/useInView'

export default function Navbar() {
  const [ref, inView] = useInView({ threshold: 0 })
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const currentHash = typeof window !== 'undefined' ? window.location.hash : ''

  return (
    <nav ref={ref} className={`navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm reveal reveal-top ${inView ? 'revealed' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center py-1" href="/">
          <img src="/logos/pg-logo-black.webp" alt="Project Gunita" height="38" className="me-2" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPath === '/' && (currentHash === '' || currentHash === '#top') ? 'active' : ''}`}
                aria-current={currentPath === '/' && (currentHash === '' || currentHash === '#top') ? 'page' : undefined}
                href="/#top"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPath === '/' && currentHash === '#about' ? 'active' : ''}`}
                aria-current={currentPath === '/' && currentHash === '#about' ? 'page' : undefined}
                href="/#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPath === '/' && currentHash === '#archives' ? 'active' : ''}`}
                aria-current={currentPath === '/' && currentHash === '#archives' ? 'page' : undefined}
                href="/#archives"
              >
                Archives
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
