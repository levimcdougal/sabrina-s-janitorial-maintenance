import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__nav">
          <p className="footer__col-title">Quick Links</p>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/book">Book a Clean</Link>
          </div>
        </div>

        <div className="footer__contact">
          <p className="footer__col-title">Contact</p>
          <p className="footer__contact-item">(336) 392-2677</p>
          <p className="footer__contact-item">sabrinadumas85@yahoo.com</p>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Cleaning Company &mdash; Greensboro, NC &amp; Richmond, VA
      </p>
    </footer>
  )
}
