import { useEffect, useRef, useState } from 'react'
import { X, Check } from 'lucide-react'

function Problem() {
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

  const painPoints = [
    'Poor communication',
    'Missed deadlines',
    'Inconsistent quality',
    'Endless searching',
    'Freelancers disappearing midway',
  ]

  const solutions = [
    'Vetted & reliable professionals',
    'Clear communication standards',
    'On-time delivery guaranteed',
    'Seamless matching process',
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto">

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
          The Problem
        </p>

        {/* Heading */}
        <h2
          className="font-bold text-4xl md:text-5xl leading-tight mb-16 max-w-2xl"
          style={{
            color: '#111827',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          Hiring Freelancers Shouldn't Feel Like{' '}
          <span style={{ color: '#0071CE', fontStyle: 'italic' }}>
            Guesswork
          </span>
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Left — Pain Points */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
            }}
          >
            {/* Label */}
            <div className="mb-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase pb-3"
                style={{
                  color: '#9CA3AF',
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                The Exhausting Pain Points
              </p>
            </div>

            {/* Pain Points List */}
            <ul className="flex flex-col gap-4 mt-6">
              {painPoints.map((point, index) => (
                <li
                  key={point}
                  className="flex items-center gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.7s ease ${0.4 + index * 0.1}s, transform 0.7s ease ${0.4 + index * 0.1}s`,
                  }}
                >
                  {/* X Icon */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(239,68,68,0.15)' }}
                  >
                    <X size={14} strokeWidth={2.5} style={{ color: '#EF4444' }} />
                  </div>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: '#374151' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Gigitright Solution */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
            }}
          >
            {/* Label */}
            <div className="mb-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase pb-3"
                style={{
                  color: '#9CA3AF',
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                The Gigitright Solution
              </p>
            </div>

            {/* Description */}
            <p
              className="text-sm md:text-base leading-relaxed mt-6 mb-8"
              style={{
                color: '#6B7280',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.5s',
              }}
            >
              Gigitright was built to solve exactly that. We connect businesses
              directly with skilled African freelancers who are dedicated,
              professional, and serious about delivering consistent results.
            </p>

            {/* Solutions List */}
            <ul className="flex flex-col gap-4">
              {solutions.map((solution, index) => (
                <li
                  key={solution}
                  className="flex items-center gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.7s ease ${0.6 + index * 0.1}s, transform 0.7s ease ${0.6 + index * 0.1}s`,
                  }}
                >
                  {/* Check Icon */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(16,185,129,0.15)' }}
                  >
                    <Check size={14} strokeWidth={2.5} style={{ color: '#10B981' }} />
                  </div>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: '#374151' }}
                  >
                    {solution}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem