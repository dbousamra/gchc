import { SERVICE_GROUPS } from "../content";
import { ServiceIcon } from "../icons";
import { useReveal } from "../hooks";

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="services section-pad" id="services" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Comprehensive cardiac care, under one roof.</h2>
          <p>
            From first consultation to advanced imaging and device management,
            our team provides the full spectrum of non-invasive and diagnostic
            cardiology, with evidence-based medicine and timely reporting at the
            heart of everything we do.
          </p>
        </div>

        <div className="service-groups">
          {SERVICE_GROUPS.map((g) => (
            <div className="service-group reveal" key={g.key}>
              <div className="service-group-head">
                <h3 className="service-group-title">{g.title}</h3>
                <p className="service-group-blurb">{g.blurb}</p>
              </div>
              <ul className="service-list">
                {g.items.map((s) => (
                  <li className="service-row" key={s.title}>
                    <span className="service-row-icon" aria-hidden="true">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <div>
                      <h4 className="service-row-title">{s.title}</h4>
                      <p className="service-row-body">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
