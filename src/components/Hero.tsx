import { PRACTICE, SERVICES, STATS, IMAGES } from "../content";
import { ArrowRight, Clock } from "../icons";
import { useReveal } from "../hooks";

const ECG_PATH =
  "M0 36 H70 L82 36 L90 18 L100 54 L110 36 L122 36 L132 8 L150 64 L162 36 L240 36 L252 36 L260 18 L270 54 L280 36 L292 36 L302 8 L320 64 L332 36 L420 36 L432 36 L440 18 L450 54 L460 36 L472 36 L482 8 L500 64 L512 36 L600 36";

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-glow g1" />
        <span className="hero-glow g2" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal">Private Cardiology · Gold Coast</span>
          <h1 className="reveal">
            Care when your <em>heart</em> needs it most.
          </h1>
          <p className="hero-lead reveal">
            Specialist cardiology, advanced echocardiography and cardiac device
            care — delivered by a multidisciplinary team committed to timely
            appointments and efficient reporting.
          </p>

          <div className="hero-actions reveal">
            <a className="btn btn-primary" href="#contact">
              Book an appointment <ArrowRight />
            </a>
            <a className="btn btn-ghost" href="#referrers">
              Refer a patient
            </a>
          </div>

          <div className="hero-meta reveal">
            <div>
              <div className="label">Call us</div>
              <a className="value" href={PRACTICE.phoneHref}>
                {PRACTICE.phone}
              </a>
            </div>
            <div>
              <div className="label">Office hours</div>
              <div className="value">Mon–Fri · 9–4</div>
            </div>
            <div>
              <div className="label">Where</div>
              <div className="value">Southport</div>
            </div>
          </div>
        </div>

        <aside
          className="hero-card has-photo reveal"
          aria-label="Practice snapshot"
          style={{ backgroundImage: `url(${IMAGES.cardiologist})` }}
        >
          <div className="card-kicker">{PRACTICE.tagline}</div>
          <h3>A steady hand for every heartbeat.</h3>
          <p>
            Comprehensive non-invasive cardiac testing under one roof at Gold
            Coast Private Hospital.
          </p>

          <div className="ecg" aria-hidden="true">
            <svg viewBox="0 0 600 72" preserveAspectRatio="none">
              <path d={ECG_PATH} />
            </svg>
          </div>

          <div className="card-stats">
            {STATS.map((s) => (
              <div key={s.t}>
                <div className="n">
                  {s.n}
                  <span>.</span>
                </div>
                <div className="t">{s.t}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="strip" aria-hidden="true" style={{ marginTop: "clamp(3rem, 7vw, 5.5rem)" }}>
        <div className="strip-track">
          {[0, 1].map((dup) => (
            <div className="strip-item" key={dup}>
              {SERVICES.map((s) => (
                <span key={s.title}>{s.title}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginTop: "1.4rem" }}>
        <p
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.92rem",
            color: "var(--ink-50)",
          }}
        >
          <Clock className="inline-ico" /> Same-week appointments available for
          urgent referrals — call {PRACTICE.phone}
        </p>
      </div>
    </section>
  );
}
