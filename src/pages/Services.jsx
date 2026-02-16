import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Dispute Resolution',
    tagline: 'When the noise rises, we are the calm.',
    body: [
      'Behind every dispute is a story of something broken — a contract, a promise, a trust. Our vibrant team of dispute resolution specialists has spent years navigating these fractures and we know that the sharpest weapon in any conflict is clarity.',
      'Our team is equally at home before Kenyan courts, international arbitration tribunals and mediation tables spanning multiple time zones. We represent local companies defending their commercial interests and foreign investors protecting their treaty rights. We guide diaspora families through contested estates that straddle jurisdictions and multinational corporations through cross-border contractual disputes.',
      'Whether before tribunals, in boardrooms or across mediation tables, we combine courtroom pedigree with commercial instinct. We do not simply litigate; we listen, we strategize, and we move with precision.',
    ],
  },
  {
    num: '02',
    title: 'Real Estate & Conveyancing',
    tagline: 'You bring the vision; we ensure the ground beneath it does not shift.',
    body: [
      'Land does not move, but the law around it never stops shifting. Our real estate team is a collective of seasoned conveyancers and property strategists who treat every transaction as a foundation.',
      'Whether you are a Kenyan citizen acquiring your first title deed or a foreign national securing a 99-year leasehold title, the law does not distinguish between dreams — only between how they are documented. Our conveyancing team has guided diplomats through Land Control Board consent, families through succession disputes and investors through title verification that unearthed problems before they became losses.',
      'We speak the language of the registry, the bank, and the surveyor.',
    ],
  },
  {
    num: '03',
    title: 'Family Law',
    tagline: 'Clarity without coldness. Advocacy that honours the life you are trying to rebuild.',
    body: [
      'Families are not built in courtrooms, yet courtrooms so often decide their futures. We stand beside Kenyan parents negotiating custody, spouses dividing assets after decades together and foreign nationals seeking recognition of divorces granted oceans away.',
      'Our team understands that love, loss and loyalty wear different faces depending on where you come from — but the need for dignity is universal. Whether you are filing in a magistrates\' court in Nairobi or petitioning the High Court to register a decree from London or Dubai, we offer the same thing: clarity without coldness, and advocacy that honours the life you are trying to rebuild.',
    ],
  },
  {
    num: '04',
    title: 'Banking & Finance',
    tagline: 'In a world of compounding risk, we are your constant.',
    body: [
      'Our banking and finance team is composed of former in-house counsel, regulatory advisors and transaction specialists who have sat on both sides of the deal table.',
      'We structure, we scrutinise, and we safeguard — whether you are a lender extending credit or a borrower seeking runway. In a world of compounding risk, we are your constant.',
    ],
  },
  {
    num: '05',
    title: 'Immigration Laws',
    tagline: 'Where others see red tape, we see routes.',
    body: [
      'Borders are drawn on maps, but lives are drawn across them. Our immigration practice is led by a multidisciplinary team that understands migration not just as procedure but as a promise.',
      'We have secured permits for multinational corporations and asylum for the displaced, always with an eye on both the law and the human behind the application. Where others see red tape, we see routes.',
    ],
  },
  {
    num: '06',
    title: 'Employment & Labour Relations',
    tagline: 'Your voice heard. Your rights honoured.',
    body: [
      'A workplace is a living thing built on relationships, sustained by respect and tested by conflict. Our employment team brings together advocates, negotiators and policy architects with deep experience across both private and public sectors.',
      'We draft contracts that anticipate trouble and resolve disputes before they define a culture. Whether you sit in the C-suite or on the shop floor, we ensure your voice is heard and your rights are honoured.',
    ],
  },
  {
    num: '07',
    title: 'Constitutional & Administrative Law',
    tagline: 'We do not fear the weight of the state — we meet it with precedent and principle.',
    body: [
      'The constitution is not parchment; it is a promise between a people and their government. Our constitutional and administrative team includes some of the sharpest minds in public law litigation — lawyers who have challenged executive overreach and defended institutional process with equal vigour.',
      'We do not fear the weight of the state; we meet it with precedent, principle and the quiet confidence of those who have walked this path many times before.',
    ],
  },
  {
    num: '08',
    title: 'Technology, Data & Cybersecurity',
    tagline: 'You bring the innovation; we bring the armour.',
    body: [
      'Code is language, and data is currency — but without law, both run wild. Our technology team is a blend of privacy practitioners, cyber law specialists and policy advisors who have advised startups, regulators and multinational platforms.',
      'We speak fluent legalese and technical syntax, translating risk into resilience. Whether you are securing your first data compliance framework or responding to a live breach, you bring the innovation; we bring the armour.',
    ],
  },
  {
    num: '09',
    title: 'Tax & Corporate Law',
    tagline: 'You bring the vision; we ensure it rests on a foundation that is lawful, sustainable, and ready for growth.',
    body: [
      'Every company begins as an idea and every idea deserves a structure that protects it. We guide Kenyan founders registering their first private company, diaspora professionals building investment vehicles back home and foreign investors navigating the Kenyan incorporation process from abroad.',
      'From memorandum and articles to shareholding structures to incorporation — we ensure your entity is properly birthed and compliant from day one. On the tax front, we advise on corporate income tax, VAT, withholding obligations and the subtle complexities of double taxation treaties.',
      'Whether you are responding to a KRA audit or simply seeking to understand your filing obligations, we offer clear practical counsel. You bring the vision; we ensure it rests on a foundation that is lawful, sustainable, and ready for growth.',
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const rightRef = useRef(null)
  const sectionRefs = useRef([])

  // Scroll spy — update active based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    sectionRefs.current.forEach(ref => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  // Click nav item → scroll to section
  const scrollTo = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setActive(idx)
  }

  return (
    <main className="services-page">

      {/* ── HERO ── */}
      <section className="services-hero">
        <div className="services-hero-inner">
          <span className="services-eyebrow">What We Do</span>
          <h1 className="services-hero-title">Our Practice Areas</h1>
          <p className="services-hero-sub">
            Nine disciplines. One firm. Unwavering counsel wherever the law takes you.
          </p>
        </div>
      </section>

      {/* ── SPLIT LAYOUT ── */}
      <div className="services-split">

        {/* LEFT — sticky nav */}
        <aside className="services-nav">
          <div className="services-nav-inner">
            <p className="services-nav-label">Practice Areas</p>
            {services.map((s, i) => (
              <button
                key={i}
                className={`services-nav-item ${active === i ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
              >
                <span className="nav-num">{s.num}</span>
                <span className="nav-title">{s.title}</span>
              </button>
            ))}
            <Link to="/contact" className="services-nav-cta">
              Book a Consultation
            </Link>
          </div>
        </aside>

        {/* RIGHT — scrollable content */}
        <div className="services-content" ref={rightRef}>
          {services.map((s, i) => (
            <div
              key={i}
              className="service-entry"
              ref={el => sectionRefs.current[i] = el}
            >
              <div className="entry-num">{s.num}</div>
              <h2 className="entry-title">{s.title}</h2>
              <p className="entry-tagline">{s.tagline}</p>
              <div className="entry-divider" />
              {s.body.map((para, j) => (
                <p key={j} className="entry-body">{para}</p>
              ))}
              <Link to="/contact" className="entry-cta">
                Speak to a Specialist →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="services-bottom-cta">
        <div className="services-cta-inner">
          <span className="section-label center">Ready to Begin?</span>
          <h2 className="cta-title">Every case begins with a conversation.</h2>
          <p className="cta-sub">Book a free consultation with one of our specialists today.</p>
          <Link to="/contact" className="btn-gold-lg">Book Free Consultation</Link>
        </div>
      </section>

    </main>
  )
}