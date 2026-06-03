import { NAV, PRACTICE, IMAGES } from "../content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              className="brand-logo on-dark"
              src={IMAGES.logo}
              alt={PRACTICE.name}
              width={780}
              height={164}
            />
            <p>
              Private specialist cardiology on the Gold Coast since 1994.{" "}
              {PRACTICE.tagline}.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a>
            <a href={PRACTICE.emailHref}>{PRACTICE.email}</a>
            <p>{PRACTICE.address.line1}</p>
            <p>{PRACTICE.address.line2}</p>
            <p>{PRACTICE.hours}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {YEAR} {PRACTICE.name}. All rights reserved.
          </span>
          <span>Gold Coast Private Hospital · Southport, Queensland</span>
        </div>
      </div>
    </footer>
  );
}

const YEAR = 2026;
