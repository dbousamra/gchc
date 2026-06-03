import { BRING_LIST, PRACTICE, IMAGES } from "../content";
import { Check, Download, ArrowRight } from "../icons";
import { useReveal } from "../hooks";

export default function Info() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="info-band section-pad" id="patients" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal" style={{ marginBottom: "clamp(2.2rem, 4vw, 3.2rem)" }}>
          <h2>Everything you need before your visit.</h2>
        </div>

        <div className="info-grid">
          {/* Patients */}
          <article className="info-card reveal">
            <span className="eyebrow">For patients</span>
            <h3>Preparing for your appointment</h3>
            <p>
              To book your appointment, please phone GC HeartCare on{" "}
              <a href={PRACTICE.phoneHref} style={{ color: "var(--coral-deep)", fontWeight: 600 }}>
                {PRACTICE.phone}
              </a>{" "}
              during office hours ({PRACTICE.hours}). To help us care for you,
              please bring:
            </p>

            <ul className="bring-list">
              {BRING_LIST.map((item) => (
                <li key={item}>
                  <Check /> {item}
                </li>
              ))}
            </ul>

            <div className="info-foot">
              <a className="btn btn-primary" href={PRACTICE.phoneHref}>
                Call to book <ArrowRight />
              </a>
            </div>
          </article>

          {/* Referrers */}
          <article
            className="info-card dark has-photo reveal"
            id="referrers"
            style={{ backgroundImage: `url(${IMAGES.clinic})` }}
          >
            <span className="eyebrow on-dark">For referrers</span>
            <h3>Referring a patient</h3>
            <p>
              We welcome referrals from GPs and specialists, and are committed to
              timely appointments and efficient, clear reporting back to you.
              Download a referral form below, or contact our reception to arrange
              hard-copy referral pads delivered to your practice.
            </p>

            <div className="ref-actions">
              <a className="btn btn-primary" href={PRACTICE.emailHref}>
                <Download /> Request referral form
              </a>
              <a className="btn btn-ghost on-dark" href={PRACTICE.phoneHref}>
                Phone {PRACTICE.phone}
              </a>
            </div>

            <p className="ref-note">
              Prefer to send a referral directly? Email{" "}
              <a href={PRACTICE.emailHref} style={{ color: "var(--aqua-soft)", fontWeight: 600 }}>
                {PRACTICE.email}
              </a>{" "}
              and our staff will be in touch.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
