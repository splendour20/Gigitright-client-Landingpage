import { useEffect, useRef, useState } from 'react'

function Domains() {
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

  const cards = [
    {
      title: 'Creative Services',
      items: ['Video Editing', 'Graphic Design', 'Content Creation', 'Social Media Mgt.'],
    },
    {
      title: 'Business Support',
      items: ['Virtual Assistance', 'Customer Support', 'Data Entry', 'Admin Assistance'],
    },
    {
      title: 'Digital & Tech',
      items: ['Web Design', 'UI/UX Design', 'Digital Marketing', 'Tech & Development'],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Top Label */}
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{
            color: '#0071CE',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
          }}
        >
          Our Domains
        </p>

        {/* Heading */}
        <h2
          className="font-bold text-4xl md:text-5xl leading-tight mb-4 max-w-2xl"
          style={{
            color: '#111827',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          Find Freelancers For{' '}
          <span style={{ color: '#0071CE', fontStyle: 'italic' }}>Any</span>{' '}
          Business Domain
        </h2>

        {/* Subtext */}
        <p
          className="text-sm md:text-base leading-relaxed mb-14 max-w-lg"
          style={{
            color: '#6B7280',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}
        >
          Whether you're building a brand, scaling a startup, or expanding an
          enterprise, Gigitright supplies the skilled professionals you need.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-2xl p-7 hover-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.9s ease ${0.4 + index * 0.15}s, transform 0.9s ease ${0.4 + index * 0.15}s`,
              }}
            >
              {/* Card Title */}
              <h3
                className="font-bold text-lg mb-5"
                style={{ color: '#111827' }}
              >
                {card.title}
              </h3>

              {/* List */}
              <ul className="flex flex-col gap-3">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm"
                    style={{
                      color: '#6B7280',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `opacity 0.7s ease ${0.5 + index * 0.15 + itemIndex * 0.07}s, transform 0.7s ease ${0.5 + index * 0.15 + itemIndex * 0.07}s`,
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#0071CE',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Image Banner */}
        <div
          className="relative w-full rounded-2xl overflow-hidden hover-image"
          style={{
            height: '260px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease 0.85s, transform 0.9s ease 0.85s',
          }}
        >
          <img
            src="/domains-section-img.png"
            alt="Simple Fast Effective"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
          />

          {/* Text */}
          <div className="absolute bottom-8 left-8">
            <h3
              className="font-bold text-3xl md:text-4xl"
              style={{ color: '#ffffff' }}
            >
              Simple. Fast.{' '}
              <span style={{ color: '#0071CE' }}>Effective.</span>
            </h3>
          </div>

        </div>

      </div>

      {/* Hover animations */}
      <style>{`
        /* Card hover effect: subtle lift and shadow */
        .hover-card {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.15);
          border-color: #0071CE !important;
        }

        /* Image banner hover effect: gentle scale on the image */
        .hover-image:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  )
}

export default Domains