import { useState } from 'react'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faqs' },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">

      {/* Main Row */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/Gigitright-Full-logo.png" alt="Gigitright Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links — desktop only */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-gray-500 hover:text-[#0071CE] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons — desktop only */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Speak to Our Team */}
          <a
            href="https://discoverycall.zohobookings.eu/#/263936000000036050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md hover:opacity-90"
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

        {/* Hamburger — mobile and tablet */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#0071CE' }}
        >
          {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

      </div>

      {/* Mobile + Tablet Menu */}
      <div
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div className="flex flex-col px-6 pb-6 gap-5 border-t border-gray-100">

          {/* Nav Links */}
          <ul className="flex flex-col gap-4 pt-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-[#0071CE] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Speak to Our Team */}
          <a
            href="https://discoverycall.zohobookings.eu/#/263936000000036050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold w-full hover:opacity-90 transition-opacity duration-200"
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
            className="flex items-center justify-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity duration-200 bg-white px-5 py-3 rounded-full shadow-md w-full"
            style={{ color: '#0071CE' }}
          >
            Submit Project Brief
            <ArrowRight size={16} strokeWidth={2} />
          </a>

        </div>
      </div>

    </nav>
  )
}

export default Navbar