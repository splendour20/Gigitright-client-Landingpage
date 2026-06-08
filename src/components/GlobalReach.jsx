import { useEffect, useRef, useState } from 'react'
import { HelpCircle } from 'lucide-react'

function GlobalReach() {
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
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          {/* Top Label */}
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: '#0071CE',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
            }}
          >
            Global Reach
          </p>

          {/* Heading */}
          <h2
            className="font-bold text-4xl md:text-5xl leading-tight"
            style={{
              color: '#111827',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            Real Business Support —{' '}
            <span style={{ color: '#0071CE', fontStyle: 'italic' }}>
              Tapped Globally
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{
              color: '#6B7280',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            At Gigitright, we understand that businesses need more than
            random, unverified freelancers. You require reliable
            collaborators who understand your vision, practice transparent
            communication, and add meaningful growth to your baseline.
          </p>

        </div>

        {/* Right Side — Yellow Card */}
        <div
          className="w-full md:w-1/2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.97)',
            transition: 'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s',
          }}
        >
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: '#FACC15' }}
          >

            {/* Icon Box */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s',
              }}
            >
              <HelpCircle
                size={20}
                strokeWidth={1.5}
                style={{ color: '#111827' }}
              />
            </div>

            {/* Card Title */}
            <h3
              className="font-bold text-xl md:text-2xl mb-4"
              style={{
                color: '#111827',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
              }}
            >
              Why African Freelancers?
            </h3>

            {/* Card Description */}
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                color: '#1f2937',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
              }}
            >
              Africa hosts one of the fastest-growing digital talent
              ecosystems globally—bringing forth creative, innovative,
              highly skilled, and competitively structured solutions.
              Gigitright serves as your secure bridge to tap into this talent
              community securely.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default GlobalReach