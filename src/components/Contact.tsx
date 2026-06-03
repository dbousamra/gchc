import { useState } from "react";
import type { FormEvent } from "react";
import { PRACTICE, MAP_EMBED } from "../content";
import { Phone, Mail, Pin, Clock, ArrowRight } from "../icons";
import { useReveal } from "../hooks";

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  // Static site: compose a mailto with the form contents.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = `${f.get("first") ?? ""} ${f.get("last") ?? ""}`.trim();
    const subject = encodeURIComponent(
      String(f.get("subject") || "Website enquiry")
    );
    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${f.get("email") ?? ""}\n` +
        `Referring doctor: ${f.get("referrer") || "—"}\n\n` +
        `${f.get("message") ?? ""}`
    );
    window.location.href = `${PRACTICE.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="contact section-pad" id="contact" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2>We're here to help.</h2>
          <p>
            Call us, send an enquiry, or visit us at Gold Coast Private Hospital.
            Our reception team is available {PRACTICE.hours}.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-detail">
            <div className="cd-row reveal">
              <div className="cd-icon">
                <Phone />
              </div>
              <div>
                <div className="label">Phone</div>
                <a className="val" href={PRACTICE.phoneHref}>
                  {PRACTICE.phone}
                </a>
              </div>
            </div>

            <div className="cd-row reveal">
              <div className="cd-icon">
                <Mail />
              </div>
              <div>
                <div className="label">Email</div>
                <a className="val" href={PRACTICE.emailHref}>
                  {PRACTICE.email}
                </a>
              </div>
            </div>

            <div className="cd-row reveal">
              <div className="cd-icon">
                <Pin />
              </div>
              <div>
                <div className="label">Visit</div>
                <div className="val">{PRACTICE.address.line1}</div>
                <div className="sub">{PRACTICE.address.line2}</div>
                <a className="map-link" href={PRACTICE.address.mapHref} target="_blank" rel="noreferrer">
                  Get directions <ArrowRight />
                </a>
              </div>
            </div>

            <div className="cd-row reveal">
              <div className="cd-icon">
                <Clock />
              </div>
              <div>
                <div className="label">Office hours</div>
                <div className="val">9:00am – 4:00pm</div>
                <div className="sub">Monday to Friday</div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <h3>Send an enquiry</h3>
            <div className="form-row">
              <div className="field">
                <label htmlFor="first">First name</label>
                <input id="first" name="first" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label htmlFor="last">Last name</label>
                <input id="last" name="last" autoComplete="family-name" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="field">
              <label htmlFor="referrer">Referring doctor (optional)</label>
              <input id="referrer" name="referrer" />
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>

            <button className="btn btn-primary form-submit" type="submit">
              {sent ? "Opening your email…" : "Send enquiry"} <ArrowRight />
            </button>
            <p className="form-hint">
              This opens your email app with the details ready to send. Prefer to
              call? {PRACTICE.phone}
            </p>
          </form>
        </div>

        <div className="map-wrap reveal">
          <iframe
            title={`Map to ${PRACTICE.name}`}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-badge">
            <div className="label">Find us</div>
            <div className="name">{PRACTICE.address.line1}</div>
            <div className="addr">{PRACTICE.address.line2}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
