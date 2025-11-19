import React from 'react'
import { SiGmail, SiFacebook, SiX, SiInstagram, SiBluesky } from 'react-icons/si'
import { FaFacebookMessenger } from 'react-icons/fa'
import useInView from '../hooks/useInView'

export default function Footer() {
  const year = new Date().getFullYear()
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <footer ref={ref} className={`site-footer py-4 reveal reveal-top ${inView ? 'revealed' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small>© {year} Project Gunita. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-inline-flex align-items-center gap-2">
              <a
                href="https://www.facebook.com/projectgunita"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Gunita on Facebook"
                title="Facebook"
              >
                <SiFacebook />
              </a>

              <a
                href="https://www.facebook.com/messages/t/23952695604316951/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Project Gunita on Facebook Messenger"
                title="Messenger"
              >
                <FaFacebookMessenger />
              </a>

              <a
                href="https://x.com/ProjectGunitaPH"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Gunita on X"
                title="X"
              >
                <SiX />
              </a>

              <a
                href="https://www.instagram.com/projectgunitaph/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Gunita on Instagram"
                title="Instagram"
              >
                <SiInstagram />
              </a>

              <a
                href="https://bsky.app/profile/projectgunita.com"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Gunita on BlueSky"
                title="BlueSky"
              >
                <SiBluesky />
              </a>
            </div>
            <div className="mt-3">
              <a
                href="mailto:archives@projectgunita.com"
                className="d-inline-block text-decoration-none footer-email"
                aria-label="Email archives@projectgunita.com"
              >
                <SiGmail className="me-2" style={{ verticalAlign: 'text-bottom' }} />
                <span className="fw-semibold">archives@projectgunita.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
