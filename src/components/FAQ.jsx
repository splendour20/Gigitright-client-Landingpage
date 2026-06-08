import { useEffect, useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'

function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(1) // keep second FAQ open by default
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

  const faqs = [
    {
      number: '01',
      question: 'How do I hire on Gigitright?',
      answer: 'Hiring on Gigitright is simple. Submit your project requirements through our website or book a Discovery Call with our Concierge Team. We\'ll review your needs, match you with suitable verified freelancers, and guide you through the engagement process.',
    },
    {
      number: '02',
      question: 'Can I hire for long-term projects?',
      answer: 'Yes. Gigitright supports both short-term and long-term engagements. Whether you need a freelancer for a one-time project, ongoing monthly support, or a dedicated long-term contract, we can help you find the right talent.',
    },
    {
      number: '03',
      question: 'What kind of freelancers are available?',
      answer: 'Our talent network includes verified professionals across various fields, including:\n\nGraphic Design\nUI/UX Design\nWeb & Mobile Development\nDigital Marketing\nContent Writing\nVirtual Assistance\nCustomer Support\nProject Management\nBusiness Services\nVideo Editing & Animation\nData Analysis and Research\n\nAdditional skill categories will continue to be added as the platform grows.',
    },
    {
      number: '04',
      question: 'Is Gigitright only for big companies?',
      answer: 'No. Gigitright is designed for businesses of all sizes, including startups, small businesses, agencies, entrepreneurs, and established organizations. Whether you\'re launching your first project or scaling a growing team, we can connect you with the right talent.',
    },
    {
      number: '05',
      question: 'How does Gigitright ensure freelancer quality?',
      answer: 'Every freelancer goes through a screening and verification process before being invited to join the platform. We assess skills, experience, professionalism, and work samples to help maintain a high-quality talent network.',
    },
    {
      number: '06',
      question: 'Why hire through Gigitright instead of hiring directly?',
      answer: 'Gigitright provides access to vetted talent, structured project support, dispute resolution, and a trust-focused hiring experience designed to help clients hire with confidence and achieve better outcomes.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-16 py-20 md:py-28"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-2xl mx-auto">

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
          FAQ
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
          Frequently Asked{' '}
          <span style={{ color: '#0071CE', fontStyle: 'italic' }}>
            Questions
          </span>
        </h2>

        {/* FAQ Accordion */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #E5E7EB',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: openIndex === index ? '#EBF5FF' : '#ffffff',
                borderBottom: index !== faqs.length - 1 ? '1px solid #E5E7EB' : 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              {/* Question Row */}
              <button
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Number */}
                <span
                  className="text-sm font-semibold w-6 shrink-0"
                  style={{
                    color: openIndex === index ? '#0071CE' : '#9CA3AF',
                  }}
                >
                  {faq.number}
                </span>

                {/* Question */}
                <span
                  className="flex-1 font-semibold text-sm md:text-base"
                  style={{
                    color: openIndex === index ? '#0071CE' : '#374151',
                  }}
                >
                  {faq.question}
                </span>

                {/* Icon */}
                {openIndex === index ? (
                  <X
                    size={18}
                    strokeWidth={1.5}
                    style={{ color: '#9CA3AF', flexShrink: 0 }}
                  />
                ) : (
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    style={{ color: '#9CA3AF', flexShrink: 0 }}
                  />
                )}
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === index ? '400px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <p
                  className="text-sm leading-relaxed pb-5 whitespace-pre-line"
                  style={{
                    color: '#6B7280',
                    paddingLeft: '3.5rem',
                    paddingRight: '1.5rem',
                  }}
                >
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ