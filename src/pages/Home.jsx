import { Link } from 'react-router-dom'
import heroBg from '../assets/backgorund.png'
import backImg from '../assets/back.png'
import bathImg from '../assets/bath.png'
import bedImg from '../assets/bed.png'
import kitImg from '../assets/kit.png'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.jpg'
import img6 from '../assets/image6.jpg'
import img7 from '../assets/image7.jpg'
import img8 from '../assets/image8.jpg'

/* ─── HERO ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow eyebrow--dark">Greensboro, NC &amp; Richmond, VA</p>
        <h1 className="hero__headline">
          <em>A spotless space, guaranteed.</em>
        </h1>
        <p className="hero__sub">
          Meticulous cleaning services that transform every space, from cozy homes
          and offices, into something you're proud to walk into.
        </p>
        <div className="hero__actions">
          <Link to="/book" className="btn btn--dark">Book Your Clean</Link>
          <Link to="/services" className="btn btn--outline">See Services</Link>
        </div>
      </div>

      <div className="hero__img">
        <img src={heroBg} alt="Clean space" />
      </div>
    </section>
  )
}

/* ─── PHILOSOPHY ──────────────────────────────────────── */
function Philosophy() {
  return (
    <section className="philosophy">
      <div className="philosophy__inner">
        <div className="philosophy__images">
          <div className="philosophy__img-wrap">
            <img src={kitImg} alt="Clean space" />
          </div>
          <div className="philosophy__img-stack">
            <div className="philosophy__img-wrap">
              <img src={bathImg} alt="Clean space" />
            </div>
            <div className="philosophy__img-wrap">
              <img src={bedImg} alt="Clean space" />
            </div>
          </div>
        </div>

        <div className="philosophy__left">
          <p className="eyebrow eyebrow--dark">// Our Philosophy</p>
          <blockquote className="philosophy__quote">
            "A clean space is not a luxury, it's the foundation everything
            else is built upon."
            <cite>Cleaning Company Founding Principle</cite>
          </blockquote>
          <p className="philosophy__body">
            At Cleaning Company, we believe a clean space isn't just about appearances,
            it's about how you feel the moment you walk through the door. Every corner
            we touch, every surface we restore, is done with genuine care and
            unwavering attention to detail.
          </p>
          <p className="philosophy__body">
            Whether it's your home or office, you deserve a space
            that feels clean and cared for. That's the standard we hold ourselves to.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS ─────────────────────────────────────────── */
const STEPS = [
  {
    n: '01',
    title: 'Consultation',
    desc: 'We start with a quick conversation to understand your space, your priorities, and what a truly clean home or office means to you.',
  },
  {
    n: '02',
    title: 'Personalized Plan',
    desc: 'Every space is different. Whether it\'s a home, an office, or a move-in/out, we craft a cleaning approach tailored specifically to your needs and schedule.',
  },
  {
    n: '03',
    title: 'Thorough Clean',
    desc: 'We work systematically through your space with professional-grade attention to detail, no corner overlooked, no surface forgotten.',
  },
  {
    n: '04',
    title: 'Your Approval',
    desc: "We don't consider the job done until you're completely satisfied. Walk through with us and let us know if anything needs a second look.",
  },
]

function Process() {
  return (
    <section className="process" id="process">
      <div className="process__inner">
        <div className="process__header">
          <p className="eyebrow eyebrow--dark">// The Cleaning Journey</p>
          <h2 className="section-title">
            A Guided Path to<br /><em>A Spotless Space</em>
          </h2>
          <p className="section-sub">
            From the first call to the final walkthrough, our process is
            built to be seamless, transparent, and completely stress-free.
          </p>
        </div>

        <div className="process__steps">
          {STEPS.map((step) => (
            <div key={step.n} className="step">
              <span className="step__num">{step.n}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─── PHOTO STRIP ─────────────────────────────────────── */
const STRIP_IMGS = [img1, img2, img3, img4, img5, img6, img7, img8]

function PhotoStrip() {
  return (
    <div className="photo-strip">
      <div className="photo-strip__track">
        {[...STRIP_IMGS, ...STRIP_IMGS].map((src, i) => (
          <div key={i} className="photo-strip__item">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── AREAS ───────────────────────────────────────────── */
const AREAS = [
  { city: 'Greensboro, NC', note: 'Our home base' },
  { city: 'Richmond, VA', note: 'Serving the Richmond area' },
]

function Areas() {
  return (
    <section className="areas" id="areas">
      <div className="areas__bg">
        <img
          src={backImg}
          alt="Service area background"
        />
        <div className="areas__overlay" />
      </div>

      <div className="areas__inner">
        <p className="eyebrow eyebrow--dark">// Where We Serve</p>
        <h2 className="section-title">
          Proudly Serving<br /><em>Greensboro &amp; Richmond</em>
        </h2>
        <p className="section-sub">
          Serving the Greensboro, NC and Richmond, VA areas —
          wherever you are, we'll come to you.
        </p>

        <div className="areas__grid">
          {AREAS.map((a) => (
            <div key={a.city} className="area-card">
              <h3 className="area-card__city">{a.city}</h3>
              <p className="area-card__note">{a.note}</p>
            </div>
          ))}
        </div>

        <p className="areas__note">
          Don't see your city? Reach out, we may still be able to come to you.
        </p>
      </div>
    </section>
  )
}

/* ─── HOME CTA STRIP ──────────────────────────────────── */
function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="cta-strip__inner">
        <div>
          <h2 className="section-title cta-strip__title">
            Ready for a <em>Cleaner Space?</em>
          </h2>
          <p className="section-sub">
            Book your first clean today — homes, offices,
            deep cleans, and move-in/out. We'll handle the rest.
          </p>
        </div>
        <Link to="/book" className="btn btn--dark cta-strip__btn">Book a Clean</Link>
      </div>
    </section>
  )
}

/* ─── PAGE ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Philosophy />
      <div className="section-divider" />
      <Process />
      <PhotoStrip />
      <div className="section-divider" />
      <Areas />
      <div className="section-divider" />
      <CTAStrip />
    </>
  )
}
