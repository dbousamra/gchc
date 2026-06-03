import { TEAM } from "../content";
import { useReveal } from "../hooks";

export default function Team() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="team section-pad" id="team" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Sonographers &amp; technicians</span>
          <h2>The people behind your imaging.</h2>
          <p>
            Our accredited cardiac sonographers bring decades of combined
            experience to every echocardiogram and stress study — and a genuine
            commitment to your comfort and care.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m) => (
            <article className="team-card reveal" key={m.name}>
              <div className="ta">
                <div className="team-avatar" aria-hidden="true">
                  {m.initials}
                </div>
                <div>
                  <h3>{m.name}</h3>
                  <div className="role">{m.role}</div>
                </div>
              </div>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
