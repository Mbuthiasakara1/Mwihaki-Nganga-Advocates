import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Humeira2 from '../assets/attorneys/Humeira2.jpg'
import Masea from '../assets/attorneys/Masea.A.jpg'
import Mwihaki from '../assets/attorneys/Mwihaki.jpg'
import Salma from '../assets/attorneys/Salma.N.jpg'


const practiceAreas = [
  { num: '01', title: 'Dispute Resolution', snippet: 'From Kenyan courts to international arbitration — strategy, stamina, and clarity when it matters most.' },
  { num: '02', title: 'Real Estate & Conveyancing', snippet: 'Every transaction is a foundation. We ensure the ground beneath your vision never shifts.' },
  { num: '03', title: 'Family Law', snippet: 'Clarity without coldness. Advocacy that honours the life you are trying to rebuild.' },
  { num: '04', title: 'Banking & Finance', snippet: 'Former in-house counsel and transaction specialists — structuring, scrutinising, and safeguarding your deals.' },
  { num: '05', title: 'Immigration Laws', snippet: 'Where others see red tape, we see routes. Migration as both procedure and promise.' },
  { num: '06', title: 'Employment & Labour Relations', snippet: 'Contracts that anticipate trouble. Disputes resolved before they define a culture.' },
  { num: '07', title: 'Constitutional & Administrative Law', snippet: 'We do not fear the weight of the state — we meet it with precedent and principle.' },
  { num: '08', title: 'Technology, Data & Cybersecurity', snippet: 'Translating risk into resilience. You bring the innovation; we bring the armour.' },
]

const blogPosts = [
  {
    category: 'Family Law',
    date: 'Feb 8, 2026',
    read: '5 min read',
    title: 'Understanding Your Rights in Cross-Border Custody Disputes',
    excerpt: 'When families span continents, jurisdiction determines outcome. Here is what every parent should know.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  },
  {
    category: 'Real Estate',
    date: 'Feb 5, 2026',
    read: '4 min read',
    title: 'Title Verification: The Step Most Buyers Skip',
    excerpt: 'A clean title search can unearth decades of encumbrances before they become your problem.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
  {
    category: 'Technology Law',
    date: 'Jan 28, 2026',
    read: '6 min read',
    title: 'Kenya\'s Data Protection Act: What Businesses Must Do Now',
    excerpt: 'Compliance is not optional. We break down the obligations every company operating in Kenya faces.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
]

export default function Home() {
  const heroTextRef = useRef(null)
  const heroImgRef = useRef(null)

  // Scroll-triggered fade-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text" ref={heroTextRef}>
          <span className="eyebrow">Your Legal Solution Starts Here</span>
          <h1 className="hero-title">
            Trusted Legal<br />
            Guidance <em>When</em><br />
            You Need It Most
          </h1>
          <p className="hero-desc">
            We provide professional legal services with integrity, experience, and commitment.
            Whether you're facing a personal, business, or criminal legal issue  we are here every step of the way.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Book Appointment</Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>
        </div>
        <div className="hero-visual" ref={heroImgRef}>
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=900&fit=crop&crop=top"
            alt="Attorney"
            className="hero-img"
          />
          <div className="hero-stats">
            <div className="stat"><span className="stat-n">100+</span><span className="stat-l">Cases Won</span></div>
            <div className="stat"><span className="stat-n">200+</span><span className="stat-l">Clients</span></div>
            <div className="stat"><span className="stat-n">10yrs</span><span className="stat-l">Experience</span></div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-bar">
        <div className="marquee-track">
          {[...practiceAreas, ...practiceAreas].map((p, i) => (
            <span key={i}>{p.title} <span className="dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="who-section fade-up">
        <div className="who-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=800&fit=crop"
            alt="Team"
            className="who-img"
          />
          <div className="who-badge">
            <span className="badge-n">25+</span>
            <span className="badge-l">Years of Excellence</span>
          </div>
        </div>
        <div className="who-content">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">A Firm Built on<br />Trust &amp; Results</h2>
          <p className="who-text">
            Since 1999, our firm has stood at the forefront of Kenyan and international law.
            We combine decades of courtroom experience with a client-first approach — ensuring
            every case receives the dedication it deserves. From Nairobi to London, our counsel
            crosses borders so our clients never have to face them alone.
          </p>
          <div className="features">
            {[
              { icon: '⚖️', title: 'Experienced Legal Experts', sub: 'Decades of courtroom and advisory expertise across all practice areas.' },
              { icon: '🎯', title: 'Strategic Legal Advisory', sub: 'We listen, strategise, and move with precision — every time.' },
              { icon: '💼', title: 'Transparent & Fair Fees', sub: 'No surprises. Clear pricing that respects your trust and your budget.' },
            ].map((f, i) => (
              <div className="feature" key={i}>
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-sub">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-gold">More About Us</Link>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section className="practices-section">
        <div className="practices-header fade-up">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Practice Areas</h2>
          <p className="practices-sub">Click any area to read the full scope of our expertise.</p>
        </div>
        <div className="practices-grid">
          {practiceAreas.map((p, i) => (
            <Link to="/about" key={i} className="practice-card fade-up">
              <span className="practice-num">{p.num}</span>
              <h3 className="practice-title">{p.title}</h3>
              <p className="practice-snippet">{p.snippet}</p>
              <span className="practice-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section fade-up">
        <span className="section-label center">Words of Wisdom</span>
        <blockquote className="big-quote">
          The good lawyer is not the man who has an eye to every side and angle of contingency,
          but who throws himself on your part so heartily that he can get you out of a scrape.
        </blockquote>
        <cite className="quote-author">— Ralph Waldo Emerson</cite>
      </section>

      {/* ── ATTORNEYS ── */}
      <section className="attorneys-section">
        <div className="attorneys-header fade-up">
          <span className="section-label">The Team</span>
          <h2 className="section-title">Meet Our Attorneys</h2>
          <p className="attorneys-sub">Experienced advocates dedicated to your cause.</p>
        </div>
        <div className="attorneys-grid">
          {[
            { name: 'Mwihaki Nganga', role: 'Partner', email: 'mwihaki@mwihakingangaadvocates.co.ke', img:Mwihaki},
            { name: 'Masea Monari', role: 'Partner', email: 'maseamonari@mwihakingangaadvocates.co.ke', img:Masea},
            { name: 'Humeira Salim', role: 'Partner', email: 'humeira@mwihakingangaadvocates.co.ke', img:Humeira2},
             { name: 'Salma Nechesa', role: 'Partner', email: 'salm@mwihakingangaadvocates.co.ke', img:Salma }
          ].map((a, i) => (
            <div className="attorney-card fade-up" key={i}>
              <img src={a.img} alt={a.name} className="attorney-img" />
              <div className="attorney-overlay">
                <div className="attorney-name">{a.name}</div>
                <div className="attorney-role">{a.role}</div>
                <div className="attorney-contacts">
                  <a href={`mailto:${a.email}`} className="attorney-link" title="Email">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    {a.email}
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="attorney-link" title="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="blog-section">
        <div className="blog-header fade-up">
          <span className="section-label">Stay Informed</span>
          <h2 className="section-title">Latest From Our Blog</h2>
          <p className="blog-sub">Legal insights, case updates and practical guidance from our team.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <Link to="/blog" key={i} className="blog-card fade-up">
              <div className="blog-img-wrap">
                <img src={post.img} alt={post.title} className="blog-img" />
                <span className="blog-cat">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">{post.date} · {post.read}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-read">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}