import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: '⚖',
    title: 'Experience & Expertise',
    description:
      'Having perfected our craft over many years, we bring a rare combination of experience, expertise, and excellence — navigating complex and landmark matters with authority.',
  },
  {
    icon: '◎',
    title: 'Sound Legal Advice',
    description:
      'Clients retain us because we offer sound legal advice that anticipates challenges and seizes opportunities before they define the outcome.',
  },
  {
    icon: '✦',
    title: 'World-Class Delivery',
    description:
      "We deliver world-class legal services with the precision required to address our clients' most critical legal and business concerns — turning complexity into clarity.",
  },
  {
    icon: '◈',
    title: 'Four Distinguished Partners',
    description:
      'Steered by four distinguished partners, we possess the collective power to address every facet of the legal world. No specialisation is beyond our reach.',
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

      {/* 2 ── FIRM STORY — full width, no floating boxes */}
      <section className="about-story">
        <div className="about-story__inner">

          {/* Label + heading row */}
          <div className="about-story__head fade-up">
            <span className="section-label"><span className="label-line" /> OUR STORY</span>
            <h2 className="about-story__heading">
              Excellence Knows No Specialization
            </h2>
          </div>

          {/* Content row — text left, inline stats right */}
          <div className="about-story__body-row">
            <div className="about-story__text fade-up">
              <p className="about-story__para">
                At MWIHAKI NGANGA &amp; Company Advocates, excellence knows no
                specialization. As a dynamic firm steered by four distinguished
                partners, we possess the collective power to address every facet
                of the legal world. Having perfected our craft over many years,
                we bring a rare combination of experience, expertise, and
                excellence to our service delivery.
              </p>
              <p className="about-story__para">
                Our track record speaks for itself  we have successfully navigated
                complex and landmark matters, earning the trust of clients who seek
                not just representation, but victory. Clients retain us because we
                offer sound legal advice that anticipates challenges and seizes
                opportunities. We pride ourselves on delivering world-class legal
                services with the precision required to address our clients' most
                critical legal and business concerns, turning complexity into clarity.
              </p>
              <Link to="/contact" className="about-story__cta">Book a Consultation →</Link>
            </div>

            {/* Inline stats — horizontal bar, not a box grid */}
            <div className="about-story__stats fade-up">
              <div className="about-story__stat">
                <span className="about-story__stat-num">100<sup>+</sup></span>
                <span className="about-story__stat-label">Cases Won</span>
              </div>
              <div className="about-story__stat-divider" />
              <div className="about-story__stat">
                <span className="about-story__stat-num">200<sup>+</sup></span>
                <span className="about-story__stat-label">Clients Served</span>
              </div>
              <div className="about-story__stat-divider" />
              <div className="about-story__stat">
                <span className="about-story__stat-num">25<sup>+</sup></span>
                <span className="about-story__stat-label">Years of Excellence</span>
              </div>
              <div className="about-story__stat-divider" />
              <div className="about-story__stat">
                <span className="about-story__stat-num">4</span>
                <span className="about-story__stat-label">Distinguished Partners</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 ── WHY CHOOSE US — approved styling (image 1), client wording */}
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
                <div className="about-value-card__top">
                  <span className="about-value-card__num">0{i + 1}</span>
                  <span className="about-value-card__icon">{v.icon}</span>
                </div>
                <div className="about-value-card__divider" />
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