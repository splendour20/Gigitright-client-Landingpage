import { useEffect, useRef, useState } from 'react'
import { UserCheck, DollarSign, Clock, Layers } from 'lucide-react'

function WhyClients() {
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
      icon: <UserCheck size={22} strokeWidth={1.5} style={{ color: '#FACC15' }} />,
      title: 'Vetted Freelancers',
      description: 'We focus strictly on skilled professionals with proven capabilities, stellar communication, and complete work readiness.',
    },
    {
      icon: <DollarSign size={22} strokeWidth={1.5} style={{ color: '#FACC15' }} />,
      title: 'Affordable Without Sacrificing Quality',
      description: 'Access exceptional talent pools that align with your scaling budgets and dynamic project requirements.',
    },
    {
      icon: <Clock size={22} strokeWidth={1.5} style={{ color: '#FACC15' }} />,
      title: 'Save Time Hiring',
      description: 'Skip the endless profile scrolling and interviews. We help you find the right strategic fit much faster.',
    },
    {
      icon: <Layers size={22} strokeWidth={1.5} style={{ color: '#FACC15' }} />,
      title: 'Flexible Hiring Options',
      description: 'Hire for one-time projects, ongoing support, remote team collaboration, or targeted creative campaigns.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: '#0071CE' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{
            color: '#FACC15',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
          }}
        >
          Why Gigitright
        </p>

        {/* Heading */}
        <h2
          className="font-bold text-4xl md:text-5xl leading-tight mb-16"
          style={{
            color: '#ffffff',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          Why Clients Choose{' '}
          <span style={{ color: '#ffffff', fontStyle: 'italic' }}>
            Gigitright
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-2xl p-8 hover-card"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.9s ease ${0.3 + index * 0.15}s, transform 0.9s ease ${0.3 + index * 0.15}s`,
              }}
            >
              {/* Icon Box */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: `opacity 0.9s ease ${0.4 + index * 0.15}s, transform 0.9s ease ${0.4 + index * 0.15}s`,
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg mb-3"
                style={{ color: '#ffffff' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {card.description}
              </p>

            </div>
          ))}
        </div>

      </div>

      {/* Hover animation styles */}
      <style>{`
        .hover-card {
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .hover-card:hover {
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.25);
          border-color: rgba(250, 204, 21, 0.4);
        }
      `}</style>
    </section>
  )
}

export default WhyClients