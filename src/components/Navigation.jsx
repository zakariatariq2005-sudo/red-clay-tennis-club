import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#facilities', label: 'Facilities' },
    { href: '#coaching', label: 'Coaching' },
    { href: '#membership', label: 'Membership' },
    { href: '#location', label: 'Location' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold tracking-tight text-sand"
            whileHover={{ scale: 1.05 }}
          >
            RED CLAY
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sand/80 hover:text-sand transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#booking"
              className="px-6 py-2.5 text-sm font-semibold text-sand border border-sand/30 hover:border-clay-red hover:text-clay-red transition-all"
            >
              Book a Tour
            </a>
            <a
              href="#membership"
              className="px-6 py-2.5 text-sm font-semibold bg-clay-red text-sand hover:bg-deep-clay transition-colors"
            >
              Join as Founding Member
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sand"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : {}}
                className="block h-0.5 w-full bg-sand"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-sand"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : {}}
                className="block h-0.5 w-full bg-sand"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sand/80 hover:text-sand transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="#booking"
                className="block w-full text-center px-6 py-2.5 text-sm font-semibold text-sand border border-sand/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Tour
              </a>
              <a
                href="#membership"
                className="block w-full text-center px-6 py-2.5 text-sm font-semibold bg-clay-red text-sand"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join as Founding Member
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}


