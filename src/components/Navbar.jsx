
// import { Link, useLocation } from 'react-router-dom'
// import './Navbar.css'
// import  logo from '../assets/images/logo.jpg'
 
// function Navbar() {
//   const location = useLocation()

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">

//       <Link to='/'  className='navbar-logo'>
//       <img src={logo} alt="Mwihaki Nganga Advocates" className="navbar-logo-img" />
//       </Link>
//         <div className="navbar-links">
//           <Link to="/"          className={location.pathname === '/'          ? 'active' : ''}>Home</Link>
//           <Link to="/about"     className={location.pathname === '/about'     ? 'active' : ''}>About</Link>
//           <Link to="/services"  className={location.pathname === '/services'  ? 'active' : ''}>Services</Link>
//           <Link to="/attorneys" className={location.pathname === '/attorneys' ? 'active' : ''}>Attorneys</Link>
//           <Link to="/blog"      className={location.pathname === '/blog'      ? 'active' : ''}>Blog</Link>
//           <Link to="/contact"   className={location.pathname === '/contact'   ? 'active' : ''}>Contact</Link>
//         </div>

//         <Link to="/contact" className="navbar-cta">Let's Talk</Link>

//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.jpg'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About' },
    { to: '/services',  label: 'Services' },
    { to: '/attorneys', label: 'Attorneys' },
    { to: '/blog',      label: 'Blog' },
    { to: '/contact',   label: 'Contact' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to='/' className='navbar-logo'>
            <img src={logo} alt="Mwihaki Nganga Advocates" className="navbar-logo-img" />
          </Link>

          {/* Desktop links */}
          <div className="navbar-links">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="navbar-right">
            <Link to="/contact" className="navbar-cta">Let's Talk</Link>

            {/* Hamburger */}
            <button
              className={`navbar-burger ${menuOpen ? 'navbar-burger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`navbar-overlay ${menuOpen ? 'navbar-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`navbar-drawer ${menuOpen ? 'navbar-drawer--open' : ''}`}>
        <div className="navbar-drawer__head">
          <img src={logo} alt="Mwihaki Nganga Advocates" className="navbar-logo-img" />
        </div>
        <nav className="navbar-drawer__links">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={`navbar-drawer__link ${location.pathname === to ? 'active' : ''}`}
              style={{ '--i': i }}
            >
              <span>{label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="navbar-drawer__cta" onClick={() => setMenuOpen(false)}>
          Book a Consultation
        </Link>
      </div>
    </>
  )
}

export default Navbar