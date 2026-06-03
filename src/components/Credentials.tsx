import { AFFILIATIONS } from "../content";

export default function Credentials() {
  return (
    <section className="credentials" aria-label="Accreditations and affiliations">
      <div className="wrap">
        <span className="credentials-label">Accredited &amp; affiliated</span>
        <ul className="credentials-list">
          {AFFILIATIONS.map((a) => (
            <li key={a.short}>{a.full}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
