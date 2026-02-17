

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Attorneys.css';
import Humeira2 from '../assets/attorneys/Humeira2.jpg'
import Masea from '../assets/attorneys/Masea.A.jpg'
import Mwihaki from '../assets/attorneys/Mwihaki.jpg'
import Salma from '../assets/attorneys/Salma.N.jpg'

const attorneys = [
  {
    name: 'Mwihaki Nganga',
    role: 'Managing Partner — Head of Banking, Finance & Family Law',
    phone: '+254 722 672 127',
    email: 'mwihaki@mwihakingangaadvocates.co.ke',
    linkedin: 'https://www.linkedin.com/in/mwihaki-ng-ang-a-119713398',
    photo: Mwihaki,
    specialties: ['Banking & Finance', 'Family Law', 'Dispute Resolution', 'Litigation'],
    bio: 'A formidable pillar of the firm, Mwihaki holds an LLB, a Post Graduate Diploma in Law and an LLM from the University of Nairobi. It is within the arena of the courtroom where her brilliance truly shines — she possesses an intuitive command of the law and an unmatched capability to dissect complex arguments on her feet. Her deep legal acumen, combined with many years of hard-fought litigation experience, makes her not only a trusted advisor to our clients but a commanding presence before the bench.',
  },
  {
    name: 'Masea Monari',
    role: 'Partner — Head of Civil Litigation & Corporate Department',
    phone: '+254 705 300 052',
    email: 'maseamonari@mwihakingangaadvocates.co.ke',
    linkedin: 'https://ke.linkedin.com/in/masea-monari-138531116',
    photo: Masea,
    specialties: ['Civil Litigation', 'Corporate Law', 'Tax Advisory'],
    bio: 'A former in-house counsel at a leading financial institution, Masea brings rare transactional precision to every deal. She heads our civil litigation and corporate department.',
  },
  {
    name: 'Humeira Salim',
    role: 'Partner — Head of Real Estate & Conveyancing Department',
    phone: '+254 711 742 974',
    email: 'humeira@mwihakingangaadvocates.co.ke',
    linkedin: 'https://www.linkedin.com/in/humeira-salim-a6693516a',
    photo: Humeira2,
    specialties: ['Real Estate', 'Conveyancing', 'Family Law', 'Immigration'],
    bio: 'Humeira navigates property transactions and personal legal matters with both firmness and deep empathy. Her cross-border expertise in real estate and conveyancing is unmatched in the region.',
  },
  {
    name: 'Salma Nechesa',
    role: 'Partner — Head of Technology & Cybersecurity Department',
    phone: '+254 759 589 315',
    email: 'salm@mwihakingangaadvocates.co.ke',
    linkedin: 'https://www.linkedin.com/in/salma-nechesa-5b71b6220',
    photo: Salma,
    specialties: ['Technology Law', 'Cybersecurity', 'Data Protection', 'Employment Law'],
    bio: "Salma's meticulous command of technology law and data protection has positioned her as the firm's leading voice on cybersecurity compliance. She ensures clients stay ahead of Kenya's fast-evolving digital legal landscape.",
  },
];

export default function Attorneys() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="att-page">

      {/* HERO */}
      <section className="att-hero">
        <div className="att-hero__inner">
          <p className="att-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Our Attorneys
          </p>
          <h1 className="att-hero__title">Our Attorneys</h1>
          <p className="att-hero__sub">Four distinguished partners. One collective force.</p>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="att-section">
        <div className="att-section__inner">
          {attorneys.map((a, i) => (
            <article className="att-card fade-up" key={i} style={{ '--i': i }}>

              {/* Photo — stretches full card height */}
              <div className="att-card__photo-wrap">
                <img
                  src={a.photo}
                  alt={a.name}
                  className="att-card__photo"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="att-card__content">

                <div className="att-card__top">
                  <div>
                    <p className="att-card__role">{a.role}</p>
                    <h3 className="att-card__name">{a.name}</h3>
                  </div>
                  <span className="att-card__number">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="att-card__specialties">
                  {a.specialties.map((s, j) => (
                    <span className="att-card__tag" key={j}>{s}</span>
                  ))}
                </div>

                <p className="att-card__bio">{a.bio}</p>

                <div className="att-card__contacts">
                  <a href={`tel:${a.phone}`} className="att-contact">
                    <span className="att-contact__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.87 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </span>
                    <span>{a.phone}</span>
                  </a>

                  <a href={`mailto:${a.email}`} className="att-contact">
                    <span className="att-contact__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <span>{a.email}</span>
                  </a>

                  <a href={a.linkedin} target="_blank" rel="noreferrer" className="att-contact att-contact--li">
                    <span className="att-contact__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </span>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}