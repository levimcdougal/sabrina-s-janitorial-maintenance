import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const STEPS = [
  {
    n: '01',
    title: 'Reach Out',
    desc: 'Call, text, or email us with a few details about your space. No forms, no hassle, just a real conversation.',
  },
  {
    n: '02',
    title: 'Get Your Plan',
    desc: "We'll put together a cleaning approach and schedule tailored to your home or office and what matters most to you.",
  },
  {
    n: '03',
    title: 'Enjoy the Clean',
    desc: "We show up on time, handle everything top to bottom, and don't leave until you're completely satisfied.",
  },
]

export default function Book() {
  useEffect(() => {
    ;(function(C, A, L) {
      let p = function(a, ar) { a.q.push(ar) }
      let d = C.document
      C.Cal = C.Cal || function() {
        let cal = C.Cal, ar = arguments
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function() { p(api, arguments) }
          const ns = ar[1]
          api.q = api.q || []
          if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, [L, ar[1], ar[2]]) } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', { origin: 'https://cal.com' })
    window.Cal('inline', {
      elementOrSelector: '#cal-inline',
      calLink: 'sabrina-s-janitorial-maintenance',
    })
    window.Cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="book-hero book-hero--no-img">
        <div className="book-hero__content">
          <p className="eyebrow eyebrow--dark">// Let's Get Started</p>
          <h1 className="book-hero__headline">
            Book a<br /><em>Clean</em>
          </h1>
          <p className="book-hero__sub">
            Ready for a prettier space? Reach out directly and we'll get
            you scheduled as soon as possible.
          </p>
          <div className="book-hero__badges">
            <span className="book-badge">Free Estimates</span>
            <span className="book-badge">Greensboro, NC &amp; Richmond, VA</span>
            <span className="book-badge">Homes &amp; Offices</span>
          </div>
        </div>
      </section>

      {/* ── Calendar ── */}
      <section className="book-calendar">
        <div className="book-calendar__inner">
          <p className="eyebrow eyebrow--dark">// Schedule Online</p>
          <h2 className="section-title">Pick a <em>Time That Works</em></h2>
          <div className="book-calendar__embed">
            <div id="cal-inline" style={{ width: '100%', height: '700px', overflow: 'scroll' }} />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="book-contact">
        <div className="book-contact__inner">
          <div className="book-contact__header">
            <p className="eyebrow eyebrow--dark">// Prefer to Talk Directly?</p>
            <h2 className="section-title">
              Reach Us<br /><em>Directly</em>
            </h2>
            <p className="book-contact__sub">
              Skip the calendar and contact us directly by phone, text, or email.
              We typically respond within a few hours.
            </p>
          </div>
          <div className="contact-info__cards">
            <a href="tel:+13363922677" className="contact-card">
              <div className="contact-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <p className="contact-card__label">Call Us</p>
                <p className="contact-card__value">(336) 392-2677</p>
                <p className="contact-card__note">Mon – Sat, 8am – 6pm</p>
              </div>
            </a>

            <a href="sms:+13363922677" className="contact-card">
              <div className="contact-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <p className="contact-card__label">Text Us</p>
                <p className="contact-card__value">(336) 392-2677</p>
                <p className="contact-card__note">We'll reply as soon as possible</p>
              </div>
            </a>

            <a href="mailto:sabrinadumas85@yahoo.com" className="contact-card">
              <div className="contact-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <p className="contact-card__label">Email Us</p>
                <p className="contact-card__value">sabrinadumas85@yahoo.com</p>
                <p className="contact-card__note">We'll respond within 24 hours</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Business Hours ── */}
      <section className="book-hours">
        <div className="book-hours__inner">
          <p className="eyebrow eyebrow--dark">// Business Hours</p>
          <h2 className="section-title">When We're <em>Available</em></h2>
          <div className="hours__grid">
            <div className="hours__row">
              <span className="hours__day">Monday – Friday</span>
              <span className="hours__time">8:00 AM – 6:00 PM</span>
            </div>
            <div className="hours__row">
              <span className="hours__day">Saturday</span>
              <span className="hours__time">9:00 AM – 4:00 PM</span>
            </div>
            <div className="hours__row">
              <span className="hours__day">Sunday</span>
              <span className="hours__time">Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="book-steps">
        <div className="book-steps__inner">
          <div className="book-steps__header">
            <p className="eyebrow eyebrow--dark">// The Process</p>
            <h2 className="section-title">
              Simple from Start<br /><em>to Spotless</em>
            </h2>
          </div>
          <div className="book-steps__grid">
            {STEPS.map((s) => (
              <div key={s.n} className="book-step">
                <span className="book-step__num">{s.n}</span>
                <h3 className="book-step__title">{s.title}</h3>
                <p className="book-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
