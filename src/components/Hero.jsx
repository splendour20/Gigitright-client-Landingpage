import { useEffect, useRef, useState } from 'react'
import { Phone, ArrowRight, CheckCircle, Zap, Briefcase, LayoutGrid } from 'lucide-react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const badges = [
    { icon: <CheckCircle size={18} strokeWidth={1.5} style={{ color: '#FACC15' }} />, label: 'Pre-vetted talent' },
    { icon: <Zap size={18} strokeWidth={1.5} style={{ color: '#FACC15' }} />, label: 'Fast matching process' },
    { icon: <Briefcase size={18} strokeWidth={1.5} style={{ color: '#FACC15' }} />, label: 'Affordable & professional' },
    { icon: <LayoutGrid size={18} strokeWidth={1.5} style={{ color: '#FACC15' }} />, label: 'Flexible for every business size' },
  ]

  return (
    <div ref={sectionRef}>

      {/* Hero Section */}
      <section
        className="w-full px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10"
        style={{ backgroundColor: '#F0F4FA' }}
      >

        {/* Left Side */}
        <div className="flex flex-col gap-6 max-w-xl w-full">

          {/* Badge */}
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: '#0071CE',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
            }}
          >
            Africa's Premier Talent Bridge
          </p>

          {/* Heading */}
          <h1
            className="font-bold text-5xl md:text-6xl leading-tight"
            style={{
              color: '#111827',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            Hire Reliable Freelancers{' '}
            <span style={{ color: '#0071CE', fontStyle: 'italic' }}>
              Without
            </span>{' '}
            the Hiring Headache
          </h1>

          {/* Subtext */}
          <p
            className="text-base leading-relaxed"
            style={{
              color: '#6B7280',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            Connect with vetted African freelancers who deliver quality work,
            communicate professionally, and help your business grow faster.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex items-center gap-4 flex-wrap"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s',
            }}
          >
            {/* Speak to Our Team */}
            <a
              href="https://discoverycall.zohobookings.eu/#/263936000000036050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity duration-200 shadow-md"
              style={{ backgroundColor: '#0071CE' }}
            >
              Speak to Our Team
              <Phone size={16} strokeWidth={2} />
            </a>

            {/* Submit Project Brief */}
            <a
              href="https://forms.gigitright.com/Gigitright/form/ProjectRequest/formperma/XZPC-4sFNhaxT1wlBx0uQ7epDbrhkS1D7JY_bo6E70A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity duration-200 bg-white px-5 py-3 rounded-full shadow-md"
              style={{ color: '#0071CE' }}
            >
              Submit Project Brief
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>

        </div>

        {/* Right Side — Image */}
        <div
          className="relative w-full md:w-1/2 max-w-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          <img
            src="/Hero-client-image.png"
            alt="Gigitright Hero"
            className="w-full h-[550px] object-cover object-top rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />

          {/* Trusted By Badge */}
          <div
            className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl px-5 py-4 shadow-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.9s ease 0.6s',
            }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: '#9CA3AF' }}
            >
              Trusted By
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: '#111827' }}
            >
              Startups, Creators, Agencies & Growing Businesses
            </p>
          </div>
        </div>

      </section>

      {/* Blue Badge Bar */}
      <div
        className="w-full px-6 md:px-16 py-6"
        style={{ backgroundColor: '#0071CE' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${0.5 + index * 0.15}s, transform 0.8s ease ${0.5 + index * 0.15}s`,
              }}
            >
              {badge.icon}
              <span
                className="text-sm font-medium"
                style={{ color: '#ffffff' }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Hero