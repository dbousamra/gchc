import { useState } from "react";
import { NAV, PRACTICE, IMAGES } from "../content";
import { Phone, Menu, Close } from "../icons";
import { useScrolled } from "../hooks";

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap header-inner">
          <a href="#top" aria-label={`${PRACTICE.name} home`}>
            <img className="brand-logo" src={IMAGES.logo} alt={PRACTICE.name} width={780} height={164} />
          </a>

          <nav className="nav" aria-label="Primary">
            <div className="nav-links">
              {NAV.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <a className="header-cta" href={PRACTICE.phoneHref}>
              <Phone /> {PRACTICE.phone}
            </a>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div className={`mobile-nav${open ? " open" : ""}`} role="dialog" aria-modal="true">
        <button
          className="nav-toggle"
          aria-label="Close menu"
          style={{ position: "absolute", top: "1.4rem", right: "var(--gutter)", color: "var(--cream-on-dark)" }}
          onClick={() => setOpen(false)}
        >
          <Close />
        </button>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="m-contact" href={PRACTICE.phoneHref}>
          {PRACTICE.phone} · {PRACTICE.email}
        </a>
      </div>
    </>
  );
}
