
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import  logo from '../assets/images/logo.jpg'
 
function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">

      <Link to='/'  className='navbar-logo'>
      <img src={logo} alt="Mwihaki Nganga Advocates" className="navbar-logo-img" />
      </Link>
        <div className="navbar-links">
          <Link to="/"          className={location.pathname === '/'          ? 'active' : ''}>Home</Link>
          <Link to="/about"     className={location.pathname === '/about'     ? 'active' : ''}>About</Link>
          <Link to="/services"  className={location.pathname === '/services'  ? 'active' : ''}>Services</Link>
          <Link to="/attorneys" className={location.pathname === '/attorneys' ? 'active' : ''}>Attorneys</Link>
          <Link to="/blog"      className={location.pathname === '/blog'      ? 'active' : ''}>Blog</Link>
          <Link to="/contact"   className={location.pathname === '/contact'   ? 'active' : ''}>Contact</Link>
        </div>

        <Link to="/contact" className="navbar-cta">Let's Talk</Link>

      </div>
    </nav>
  )
}

export default Navbar