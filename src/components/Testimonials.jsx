import { useEffect, useRef, useState } from 'react'

function Testimonials() {
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

  const testimonials = [
    {
      quote: '"We found a reliable social media manager faster than expected, and the quality of work was impressive."',
      author: '— Startup Founder',
    },
    {
      quote: '"Working with Gigitright saved us so much time during hiring."',
      author: '— Small Business Owner',
    },
    {
      quote: '"The communication and professionalism stood out immediately."',
      author: '— Creative Director',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: '#F0F4FA' }}
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
          Testimonials
        </p>

        {/* Heading */}
        <h2
          className="font-bold text-4xl md:text-5xl leading-tight mb-14"
          style={{
            color: '#111827',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          What Clients{' '}
          <span style={{ color: '#0071CE', fontStyle: 'italic' }}>Say</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-8 rounded-2xl testimonial-card"
              style={{
                backgroundColor: '#FAF9F7',
                border: '1px solid #E5E7EB',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.9s ease ${0.3 + index * 0.15}s, transform 0.9s ease ${0.3 + index * 0.15}s`,
              }}
            >

              {/* Quote Icon */}
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.8s ease ${0.4 + index * 0.15}s`,
                }}
              >
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 22V13.6C0 11.4667 0.4 9.4 1.2 7.4C2.05333 5.4 3.2 3.65333 4.6 2.16C6.05333 0.666667 7.72 0 9.6 0.266667L10.4 2.26667C8.96 2.8 7.72 3.73333 6.68 5.06667C5.69333 6.4 5.2 7.86667 5.2 9.46667H10.4V22H0ZM17.6 22V13.6C17.6 11.4667 18 9.4 18.8 7.4C19.6533 5.4 20.8 3.65333 22.2 2.16C23.6533 0.666667 25.32 0 27.2 0.266667L28 2.26667C26.56 2.8 25.32 3.73333 24.28 5.06667C23.2933 6.4 22.8 7.86667 22.8 9.46667H28V22H17.6Z"
                    fill="#93C5FD"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <p
                className="text-sm md:text-base leading-relaxed flex-1"
                style={{
                  color: '#374151',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.8s ease ${0.5 + index * 0.15}s, transform 0.8s ease ${0.5 + index * 0.15}s`,
                }}
              >
                {item.quote}
              </p>

              {/* Author */}
              <p
                className="text-xs font-semibold"
                style={{
                  color: '#6B7280',
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.8s ease ${0.6 + index * 0.15}s`,
                }}
              >
                {item.author}
              </p>

            </div>
          ))}
        </div>

      </div>

      {/* Subtle hover animation for cards */}
      <style>{`
        .testimonial-card {
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 15px 25px -12px rgba(0, 0, 0, 0.1);
          border-color: #0071CE !important;
        }
      `}</style>
    </section>
  )
}

export default Testimonials