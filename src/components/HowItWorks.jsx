import { useEffect, useRef, useState } from 'react'

function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Share your unique business operational constraints or core creative project goals with us.',
    },
    {
      number: '02',
      title: 'Get Matched With Talent',
      description: 'We immediately curate and connect you with freelancers perfectly matched to your specific criteria.',
    },
    {
      number: '03',
      title: 'Start Working',
      description: 'Collaborate confidently under professional standards and enjoy high-quality deliverables on time.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: '#F0F4FA' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">

        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col">

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
            How It Works
          </p>

          {/* Heading */}
          <h2
            className="font-bold text-4xl md:text-5xl leading-tight mb-12"
            style={{
              color: '#111827',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            Three Steps to{' '}
            <span style={{ color: '#0071CE', fontStyle: 'italic' }}>
              Great
            </span>{' '}
            Talent
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `opacity 0.9s ease ${0.3 + index * 0.2}s, transform 0.9s ease ${0.3 + index * 0.2}s`,
                }}
              >
                {/* Number */}
                <span
                  className="font-bold text-5xl md:text-6xl leading-none shrink-0 select-none"
                  style={{ color: '#D1E8FF' }}
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2 pt-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: '#111827' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6B7280' }}
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Right Side — Image */}
        <div
          className="w-full md:w-1/2 hover-image-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
          }}
        >
          <img
            src="/How-it-works.png"
            alt="How It Works"
            className="w-full h-[380px] object-cover rounded-3xl shadow-xl hover-image"
          />
        </div>

      </div>

      {/* Subtle hover animation for the image */}
      <style>{`
        .hover-image {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
        }
        .hover-image-container:hover .hover-image {
          transform: scale(1.02);
          box-shadow: 0 25px 30px -12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  )
}

export default HowItWorks