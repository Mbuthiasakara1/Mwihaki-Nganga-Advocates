import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: '⚖',
    title: 'Integrity First',
    description:
      'Every instruction we receive is handled with the highest ethical standards. Our reputation is built on doing right by our clients — always.',
  },
  {
    icon: '◎',
    title: 'Surgical Precision',
    description:
      'We read every clause. We anticipate every argument. Attention to detail is not a value we preach — it is a habit we practise daily.',
  },
  {
    icon: '→',
    title: 'Client-First Always',
    description:
      'Your outcome shapes our strategy. We listen before we advise, and we measure success by the results we achieve for the people we serve.',
  },
  {
    icon: '◈',
    title: 'Cross-Border Reach',
    description:
      'From Nairobi to London, our counsel crosses borders. Our clients never have to face international legal complexity alone.',
  },
];

const clients = [
  { name: 'Safaricom PLC',      abbr: 'SAF' },
  { name: 'KCB Group',          abbr: 'KCB' },
  { name: 'Equity Bank',        abbr: 'EQT' },
  { name: 'Nation Media Group', abbr: 'NMG' },
  { name: 'KPMG Kenya',         abbr: 'KPM' },
  { name: 'PwC Nairobi',        abbr: 'PwC' },
  { name: 'Stanbic Bank',       abbr: 'STB' },
  { name: 'NCBA Group',         abbr: 'NCB' },
  { name: 'Kenya Airways',      abbr: 'KQA' },
  { name: 'Deloitte EA',        abbr: 'DEL' },
  { name: 'TotalEnergies',      abbr: 'TTE' },
  { name: 'Britam Holdings',    abbr: 'BTM' },
];

export default function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="about-page">

      {/* 1 ── HERO */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <p className="about-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> About Us
          </p>
          <h1 className="about-hero__title">About Us</h1>
          <p className="about-hero__sub">Decades of experience. One unwavering commitment.</p>
        </div>
      </section>

      {/* 2 ── FIRM STORY + STATS */}
      <section className="about-story">
        <div className="about-story__inner">

          <div className="about-story__left fade-up">
            <span className="section-label"><span className="label-line" /> OUR STORY</span>
            <h2 className="about-story__heading">
              A Firm Built on <br />Trust &amp; Results
            </h2>
            <p className="about-story__body">
              Founded in 1999, Mwihaki Nganga &amp; Company Advocates has stood at the
              forefront of Kenyan and international law for over two decades. What began
              as a boutique practice in Nairobi has grown into a full-service firm trusted
              by individuals, corporations, and institutions across East Africa and beyond.
            </p>
            <p className="about-story__body">
              We combine deep courtroom experience with a client-first approach — ensuring
              every matter receives the dedication it deserves. From complex commercial
              litigation to sensitive family proceedings, our advocates bring the same
              rigour, creativity, and commitment to every brief we accept.
            </p>
            <p className="about-story__body">
              From Nairobi to London, our counsel crosses borders so our clients never
              have to face legal complexity alone.
            </p>
            <Link to="/contact" className="about-story__cta">Book a Consultation →</Link>
          </div>

          <div className="about-story__right fade-up">
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat__number">100<sup>+</sup></span>
                <span className="about-stat__label">Cases Won</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__number">200<sup>+</sup></span>
                <span className="about-stat__label">Clients Served</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__number">25<sup>+</sup></span>
                <span className="about-stat__label">Years of Excellence</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__number">9</span>
                <span className="about-stat__label">Practice Areas</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 ── VALUES */}
      <section className="about-values">
        <div className="about-values__inner">
          <div className="about-values__header fade-up">
            <span className="section-label section-label--light">
              <span className="label-line" /> WHY CHOOSE US
            </span>
            <h2 className="about-values__heading">
              The Principles That Guide <br />Everything We Do
            </h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="about-value-card fade-up" key={i}>
                <span className="about-value-card__icon">{v.icon}</span>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── CLIENT LOGOS */}
      <section className="about-clients">
        <div className="about-clients__inner">
          <div className="about-clients__header fade-up">
            <span className="section-label">
              <span className="label-line" /> TRUSTED BY
            </span>
            <h2 className="about-clients__heading">Companies We've Worked With</h2>
            <p className="about-clients__sub">
              Trusted by leading corporations, financial institutions, and public bodies
              across East Africa and beyond.
            </p>
          </div>
          <div className="about-clients__marquee-wrapper">
            <div className="about-clients__track">
              {[...clients, ...clients].map((c, i) => (
                <div className="about-clients__logo-card" key={i}>
                  <div className="about-clients__logo-abbr">{c.abbr}</div>
                  <div className="about-clients__logo-name">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── CTA */}
      <section className="about-cta">
        <div className="about-cta__inner fade-up">
          <span className="section-label section-label--light">
            <span className="label-line" /> GET STARTED
          </span>
          <h2 className="about-cta__heading">
            Ready to Protect <br />What Matters Most?
          </h2>
          <p className="about-cta__sub">
            Schedule a confidential consultation with one of our advocates today.
          </p>
          <Link to="/contact" className="about-cta__btn">Book Appointment</Link>
        </div>
      </section>

    </main>
  );
}