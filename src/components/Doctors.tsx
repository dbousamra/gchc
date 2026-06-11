import { DOCTORS } from "../content";
import { useReveal } from "../hooks";

export default function Doctors() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="doctors section-pad" id="doctors" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2>The doctors who'll know your name.</h2>
          <p>
            Patients are cared for by experienced specialists spanning advanced
            heart failure, structural and interventional cardiology, backed by
            academic and research expertise across the Gold Coast's major
            hospitals.
          </p>
        </div>

        <div className="doc-rows">
          {DOCTORS.map((d, i) => (
            <article
              className={`doc-row reveal${i % 2 === 1 ? " flip" : ""}`}
              key={d.name}
            >
              <figure className="doc-portrait">
                <img
                  src={d.avatar}
                  alt={`Portrait of ${d.name}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                />
              </figure>

              <div className="doc-body">
                <h3>{d.name}</h3>
                <div className="doc-role">{d.role}</div>
                <div className="doc-quals">{d.quals.join(" · ")}</div>
                <p className="doc-bio">{d.bio}</p>
                <div className="doc-focus">
                  <div className="label">Areas of focus</div>
                  <div className="tags">
                    {d.focus.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
