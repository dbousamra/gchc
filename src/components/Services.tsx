import { SERVICES } from "../content";
import { ServiceIcon } from "../icons";
import { useReveal } from "../hooks";

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="services section-pad" id="services" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Comprehensive cardiac care, under one roof.</h2>
          <p>
            From first consultation to advanced imaging and device management,
            our team provides the full spectrum of non-invasive and diagnostic
            cardiology — with evidence-based medicine and timely reporting at the
            heart of everything we do.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="svc-card reveal" key={s.title}>
              <div className="svc-icon">
                <ServiceIcon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
