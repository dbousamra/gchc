import { BRING_LIST, PRACTICE, IMAGES } from "../content";
import { Check, Download, ArrowRight, Mail, Phone, Message } from "../icons";
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
              We welcome referrals from GPs and specialists. Your patient is
              seen promptly, and you receive a clear, timely report after every
              consultation and test.
            </p>

            <div className="ref-methods">
              <div className="ref-label">How to refer</div>
              <ul>
                <li>
                  <Message />
                  <div>
                    <span>Secure messaging</span>
                    <small>HealthLink &amp; Medical Objects</small>
                  </div>
                </li>
                <li>
                  <Mail />
                  <div>
                    <a href={PRACTICE.emailHref}>{PRACTICE.email}</a>
                    <small>Email a referral or query</small>
                  </div>
                </li>
                <li>
                  <Phone />
                  <div>
                    <a href={PRACTICE.phoneHref}>{PRACTICE.phone}</a>
                    <small>Speak with our reception</small>
                  </div>
                </li>
              </ul>
            </div>

            <div className="ref-actions">
              <a className="btn btn-primary" href={PRACTICE.emailHref}>
                <Download /> Request referral form
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
