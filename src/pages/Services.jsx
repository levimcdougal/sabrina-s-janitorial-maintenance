import { Link } from 'react-router-dom'
import cleanImg from '../assets/clean.png'
import houseImg from '../assets/house.png'
import mopImg from '../assets/mop.png'
import buildImg from '../assets/build.png'
import vacImg from '../assets/vac.png'

const SERVICES = [
  {
    id: 'deep',
    img: mopImg,
    contain: true,
    title: 'Deep Clean',
    tagline: 'A Total Transformation',
    desc: 'Top-to-bottom, inside-out, every surface, every corner, every forgotten space brought back to its best. Perfect for first-time clients or seasonal refreshes.',
    includes: ['Kitchen appliances inside & out', 'Baseboards & ceiling fans', 'Inside cabinets & drawers', 'Windows & window sills', 'Full bathroom scrub-down'],
  },
  {
    id: 'regular',
    img: vacImg,
    contain: true,
    title: 'Regular Maintenance',
    tagline: 'Consistently Pristine',
    desc: 'Weekly, bi-weekly, or monthly, we build a routine around your life so your space always looks and feels its best without you lifting a finger.',
    includes: ['Dusting all surfaces', 'Vacuuming & mopping', 'Kitchen & bathroom wipe-downs', 'Trash removal', 'Bed linen change (on request)'],
  },
  {
    id: 'office',
    img: buildImg,
    title: 'Office Cleaning',
    tagline: 'Professional Spaces, Professional Standard',
    desc: 'A clean workplace boosts focus, morale, and the impression you leave on every client and colleague who walks through your door.',
    includes: ['Desks, chairs & shared surfaces', 'Kitchen & break rooms', 'Restrooms sanitized', 'Trash & recycling', 'Flexible scheduling around your hours'],
  },
  {
    id: 'moveinout',
    img: houseImg,
    title: 'Move In / Move Out',
    tagline: 'Start or End on the Right Note',
    desc: 'Transitioning between homes? We leave the old place spotless and make the new one feel like it was always yours, clean, fresh, and ready.',
    includes: ['Every room floor to ceiling', 'Inside all cabinets & closets', 'Appliances inside & out', 'Walls, doors & light switches', 'Final walkthrough included'],
  },
]

/* ─── PAGE HERO ───────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <img
          src={cleanImg}
          alt="Clean space"
        />
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__content">
        <p className="eyebrow">// What We Offer</p>
        <h1 className="hero__headline">
          Cleaning Built<br /><em>Around Your Life</em>
        </h1>
        <p className="hero__sub">
          From a single deep clean to ongoing care — homes, offices,
          move-ins and move-outs across Mexico City and the surrounding region.
        </p>
      </div>
    </section>
  )
}

/* ─── SERVICE LIST ────────────────────────────────────── */
function ServiceList() {
  return (
    <section className="svc-list">
      <div className="svc-list__inner">
        {SERVICES.map((s, i) => (
          <article key={s.id} className={`svc-item${i % 2 !== 0 ? ' svc-item--flip' : ''}`}>
            <div className="svc-item__img-wrap">
              <img src={s.img} alt={s.title} loading="lazy" style={s.contain ? { objectFit: 'contain' } : {}} />
            </div>
            <div className="svc-item__body">
              <p className="eyebrow eyebrow--dark">// {String(i + 1).padStart(2, '0')}</p>
              <h2 className="svc-item__title">{s.title}</h2>
              <p className="svc-item__tagline"><em>{s.tagline}</em></p>
              <p className="svc-item__desc">{s.desc}</p>
              <ul className="svc-item__includes">
                {s.includes.map((item) => (
                  <li key={item}>
                    <span className="svc-item__dot" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/book" className="btn btn--dark svc-item__cta">Book This Service</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceList />
    </>
  )
}
