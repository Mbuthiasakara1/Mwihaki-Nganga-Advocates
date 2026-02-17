import { useState } from 'react'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Dispute Resolution',
    tagline: 'When the noise rises, we are the calm.',
    body: 'Our team is equally at home before Kenyan courts, international arbitration tribunals and mediation tables spanning multiple time zones. We combine courtroom pedigree with commercial instinct — we do not simply litigate; we listen, we strategize, and we move with precision.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v36M12 18l12-12 12 12M8 42h32"/>
        <path d="M8 28c0 4.4 3.6 8 8 8s8-3.6 8-8M24 28c0 4.4 3.6 8 8 8s8-3.6 8-8"/>
        <path d="M8 28h16M24 28h16"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Real Estate & Conveyancing',
    tagline: 'The ground beneath your vision will not shift.',
    body: 'From first title deed to 99-year leasehold — we have guided diplomats through Land Control Board consent, families through succession disputes and investors through title verification. We speak the language of the registry, the bank, and the surveyor.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 42V20L24 8l18 12v22H6z"/>
        <path d="M18 42V30h12v12"/>
        <path d="M24 8v4"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Family Law',
    tagline: 'Clarity without coldness.',
    body: 'We stand beside Kenyan parents negotiating custody, spouses dividing assets after decades together and foreign nationals seeking recognition of divorces granted oceans away. The need for dignity is universal — we honour it in every case.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="13" r="5"/>
        <circle cx="32" cy="13" r="5"/>
        <path d="M6 42c0-7.7 4.5-14 10-14M32 28c5.5 0 10 6.3 10 14"/>
        <circle cx="24" cy="30" r="5"/>
        <path d="M18 42c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Banking & Finance',
    tagline: 'In a world of compounding risk, we are your constant.',
    body: 'Our team is composed of former in-house counsel, regulatory advisors and transaction specialists who have sat on both sides of the deal table. We structure, scrutinise, and safeguard — whether you are a lender or a borrower.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="20" width="40" height="22" rx="2"/>
        <path d="M4 26h40"/>
        <path d="M24 6l20 14H4L24 6z"/>
        <path d="M14 33h4M26 33h8"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Immigration Laws',
    tagline: 'Where others see red tape, we see routes.',
    body: 'Our immigration practice understands migration not just as procedure but as a promise. We have secured permits for multinational corporations and asylum for the displaced — always with an eye on both the law and the human behind the application.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18"/>
        <path d="M24 6c0 0-8 8-8 18s8 18 8 18M24 6c0 0 8 8 8 18s-8 18-8 18"/>
        <path d="M6 24h36"/>
        <path d="M9 16h30M9 32h30"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Employment & Labour',
    tagline: 'Your voice heard. Your rights honoured.',
    body: 'We draft contracts that anticipate trouble and resolve disputes before they define a culture. Our employment team brings deep experience across private and public sectors — whether you sit in the C-suite or on the shop floor.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="6" width="20" height="10" rx="2"/>
        <path d="M6 42V24c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v18"/>
        <path d="M6 30h36"/>
        <path d="M20 30v12M28 30v12"/>
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Constitutional Law',
    tagline: 'We meet the weight of the state with precedent.',
    body: 'Our constitutional team has challenged executive overreach and defended institutional process with equal vigour. We do not fear the weight of the state — we meet it with precedent, principle and the quiet confidence of those who have walked this path before.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4L6 14v4h36v-4L24 4z"/>
        <rect x="10" y="18" width="4" height="20"/>
        <rect x="22" y="18" width="4" height="20"/>
        <rect x="34" y="18" width="4" height="20"/>
        <path d="M4 38h40v4H4z"/>
        <path d="M4 14h40"/>
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Technology & Cybersecurity',
    tagline: 'You bring the innovation; we bring the armour.',
    body: 'Our technology team blends privacy practitioners, cyber law specialists and policy advisors. We speak fluent legalese and technical syntax — translating risk into resilience from data compliance frameworks to live breach response.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4L8 10v14c0 10.5 6.8 20.3 16 23 9.2-2.7 16-12.5 16-23V10L24 4z"/>
        <path d="M16 24l5 5 11-11"/>
      </svg>
    ),
  },
  {
    num: '09',
    title: 'Tax & Corporate Law',
    tagline: 'Every idea deserves a structure that protects it.',
    body: 'We guide Kenyan founders, diaspora professionals and foreign investors through incorporation, shareholding structures, VAT, withholding obligations and double taxation treaties. From KRA audits to day-one compliance — lawful, sustainable, ready for growth.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="32" height="36" rx="2"/>
        <path d="M16 16h16M16 22h16M16 28h10"/>
        <path d="M30 34l3 3 5-5"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [active, setActive] = useState(null)
  return (
    <main className="srv-page">

      {/* HEADER */}
      <section className="srv-header">
        <div className="srv-header__inner">
          <span className="srv-eyebrow">What We Do</span>
          <h1 className="srv-title">Our Practice Areas</h1>
          <p className="srv-desc">Nine disciplines. One firm. Unwavering counsel wherever the law takes you.</p>
        </div>
      </section>

      {/* GRID */}
      <section className="srv-grid-section">
        <div className="srv-grid">
          {services.map((s, i) => (
            <article
              key={i}
              className={`srv-card ${active === i ? 'srv-card--active' : ''}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="srv-card__icon">{s.icon}</div>
              <span className="srv-card__num">{s.num}</span>
              <h3 className="srv-card__title">{s.title}</h3>
              <p className="srv-card__tagline">{s.tagline}</p>
              <div className="srv-card__body">
                <p>{s.body}</p>
              </div>
              <span className="srv-card__toggle">
                {active === i ? '− Close' : '+ Learn more'}
              </span>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}