import { useEffect, useRef, useState } from 'react'

function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Detect desktop vs mobile
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024 && !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const handleFAQScroll = (e) => {
    e.preventDefault()
    const target = document.querySelector('#faqs')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const emailLink = isDesktop
    ? 'https://mail.google.com/mail/?view=cm&fs=1&to=concierge@gigitright.com'
    : 'mailto:concierge@gigitright.com'

  const emailTarget = isDesktop ? '_blank' : '_self'
  const emailRel = isDesktop ? 'noopener noreferrer' : undefined

  return (
    <footer
      ref={sectionRef}
      className="w-full px-6 md:px-16 pt-16 pb-8"
      style={{ backgroundColor: '#0071CE' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">

          {/* Column 1 — Logo + Tagline */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
            }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="Gigitright-White-logo.png"
                alt="Gigitright Logo"
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Connecting global businesses with pre-vetted, highly skilled African
              freelancers ready to deliver professional remote talent services.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <span
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.85)', cursor: 'default' }}
                >
                  About Us
                </span>
              </li>
              <li>
                <a
                  href="https://forms.gigitright.com/Gigitright/form/ProjectRequest/formperma/XZPC-4sFNhaxT1wlBx0uQ7epDbrhkS1D7JY_bo6E70A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-opacity duration-200 hover:opacity-70"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  Hire Talent
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={handleFAQScroll}
                  className="text-sm transition-opacity duration-200 hover:opacity-70"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Contact
            </p>
            <a
              href={emailLink}
              target={emailTarget}
              rel={emailRel}
              className="text-sm transition-opacity duration-200 hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              concierge@gigitright.com
            </a>
          </div>

          {/* Column 4 — Live Now */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s',
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Live Now
            </p>
            <p
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Lagos • Nairobi • Accra
            </p>
          </div>

        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        />

        {/* Bottom Row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            © 2026 Gigitright. All rights reserved.
          </p>
          <p
            className="text-xs text-center md:text-right"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Built on Trust, Designed for Result
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer