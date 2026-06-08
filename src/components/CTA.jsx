import { useEffect, useRef, useState } from 'react'
import { Phone, ArrowRight } from 'lucide-react'

function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-24 md:py-32 text-center"
      style={{ backgroundColor: '#0071CE' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">

        {/* Heading */}
        <h2
          className="font-bold text-4xl md:text-6xl leading-tight"
          style={{
            color: '#ffffff',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0s, transform 1s ease 0s',
          }}
        >
          Ready To Find Freelancers You Can{' '}
          <span style={{ color: '#FACC15', fontStyle: 'italic' }}>
            Actually
          </span>{' '}
          Rely On?
        </h2>

        {/* Subtext */}
        <p
          className="text-sm md:text-base leading-relaxed max-w-md"
          style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
          }}
        >
          Skip the stress of unpredictable platforms. Match with high-quality
          professionals today.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.45s, transform 1s ease 0.45s',
          }}
        >
          {/* Speak to Our Team */}
          <a
            href="https://discoverycall.zohobookings.eu/#/263936000000036050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-sm md:text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
            style={{
              backgroundColor: '#FACC15',
              color: '#111827',
            }}
          >
            Speak to Our Team
            <Phone size={16} strokeWidth={2} />
          </a>

          {/* Submit Project Brief */}
          <a
            href="https://forms.gigitright.com/Gigitright/form/ProjectRequest/formperma/XZPC-4sFNhaxT1wlBx0uQ7epDbrhkS1D7JY_bo6E70A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-sm md:text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.6)',
            }}
          >
            Submit Project Brief
            <ArrowRight size={16} strokeWidth={2} />
          </a>

        </div>

      </div>
    </section>
  )
}

export default CTA