import { PRACTICE, IMAGES } from "../content";
import { ArrowRight } from "../icons";

const ECG_PATH =
  "M0 20 H150 L160 20 L168 6 L178 38 L188 20 L200 20 L210 2 L226 44 L238 20 L300 20";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        {/* Hero is above the fold: visible by default, animated on load (not
            gated on scroll-reveal, which can render blank). */}
        <div className="hero-copy">
          <span className="eyebrow on-dark">Private Cardiology · Gold Coast</span>
          <h1>
            Care when your <em>heart</em> needs it most.
          </h1>
          <p className="hero-lead">
            Four specialist cardiologists and an experienced cardiac imaging
            team, caring for Gold Coast hearts since 1994 with timely
            appointments and efficient reporting.
          </p>

          <div className="ecg" aria-hidden="true">
            <svg viewBox="0 0 300 44" preserveAspectRatio="none">
              <path d={ECG_PATH} pathLength={100} />
            </svg>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Book an appointment <ArrowRight />
            </a>
            <a className="btn btn-ghost on-dark" href="#doctors">
              Meet our doctors
            </a>
          </div>

          <div className="hero-meta">
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
              <div className="label">Find us</div>
              <a
                className="value"
                href={PRACTICE.address.mapHref}
                target="_blank"
                rel="noreferrer"
              >
                Southport
              </a>
            </div>
          </div>
        </div>

        <figure className="hero-figure">
          <img
            src={IMAGES.echo}
            alt="A cardiac sonographer performing an echocardiogram at GC HeartCare"
            width={1800}
            height={1199}
            fetchPriority="high"
          />
          <figcaption>Echocardiography at our rooms, Gold Coast Private Hospital</figcaption>
        </figure>
      </div>
    </section>
  );
}
