import { DOCTORS } from "../content";
import { useReveal } from "../hooks";

export default function Doctors() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="doctors section-pad" id="doctors" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow on-dark">Our doctors</span>
          <h2>A team of leading cardiologists.</h2>
          <p>
            Patients are cared for by experienced specialists spanning advanced
            heart failure, structural and interventional cardiology — backed by
            academic and research expertise across the Gold Coast's major
            hospitals.
          </p>
        </div>

        <div className="doctors-grid">
          {DOCTORS.map((d) => (
            <article className="doc-card reveal" key={d.name}>
              <div className="doc-top">
                <img
                  className="doc-avatar"
                  src={d.avatar}
                  alt={d.name}
                  width={140}
                  height={140}
                  loading="lazy"
                />
                <div className="doc-name">
                  <h3>{d.name}</h3>
                  <div className="doc-role">{d.role}</div>
                </div>
              </div>

              <div className="doc-quals">
                {d.quals.map((q) => (
                  <span className="qual" key={q}>
                    {q}
                  </span>
                ))}
              </div>

              <p className="doc-bio">{d.bio}</p>

              <div className="doc-focus">
                <div className="label">Areas of focus</div>
                <div className="tags">
                  {d.focus.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
