import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/mbdayjre', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <p className="contact-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Contact
          </p>
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__sub">We are ready to hear from you.</p>
        </div>
      </section>

      {/* INFO STRIP — 3 icons */}
      <section className="contact-strip">
        <div className="contact-strip__inner">

          <div className="contact-strip__item">
            <div className="contact-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="contact-strip__text">
              <span className="contact-strip__label">Our Office</span>
              <span className="contact-strip__value">Nairobi GPO, Nairobi, Kenya</span>
            </div>
          </div>

          <div className="contact-strip__divider" />

          <div className="contact-strip__item">
            <div className="contact-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.87 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="contact-strip__text">
              <span className="contact-strip__label">Phone</span>
              <a href="tel:+254712345678" className="contact-strip__value contact-strip__link">
                +254 712 345 678
              </a>
            </div>
          </div>

          <div className="contact-strip__divider" />

          <div className="contact-strip__item">
            <div className="contact-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-strip__text">
              <span className="contact-strip__label">Email</span>
              <a href="mailto:info@mwihakingangaadvocates.co.ke" className="contact-strip__value contact-strip__link">
                info@mwihakingangaadvocates.co.ke
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* MAP + FORM */}
      <section className="contact-main">
        <div className="contact-main__inner">

          {/* Google Map */}
          <div className="contact-map">
            <iframe
              title="Nairobi GPO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176985360086!2d36.81656!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664e6857f%3A0x37b7ef5c0c4e7fc5!2sNairobi%20GPO!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-head">
              <span className="contact-form-label">
                <span className="label-line" /> GET IN TOUCH
              </span>
              <h2 className="contact-form-title">Book an Appointment</h2>
              <p className="contact-form-sub">
                Fill in the form below and one of our advocates will get back
                to you within 24 hours.
              </p>
            </div>

            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="contact-form__input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="contact-form__input"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="contact-form__input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Select a Service</label>
                  <select name="service" className="contact-form__input contact-form__select" required>
                    <option value="" disabled selected>Choose a practice area</option>
                    <option>Dispute Resolution & Litigation</option>
                    <option>Banking & Finance</option>
                    <option>Real Estate & Conveyancing</option>
                    <option>Corporate & Commercial Law</option>
                    <option>Family Law & Mediation</option>
                    <option>Employment & Labour Law</option>
                    <option>Immigration Law</option>
                    <option>Constitutional Law</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Your Message</label>
                  <textarea
                    name="message"
                    className="contact-form__input contact-form__textarea"
                    placeholder="Briefly describe your matter..."
                    rows={4}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="contact-form__error">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-form__btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Book Appointment'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}