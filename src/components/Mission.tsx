import { IMAGES } from "../content";
import { useReveal } from "../hooks";

export default function Mission() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      className="mission"
      ref={ref}
      style={{ backgroundImage: `url(${IMAGES.heart})` }}
    >
      <div className="wrap">
        <div className="mission-inner reveal">
          <h2>
            Every patient, treated like <em>family</em>.
          </h2>
          <p>
            From the first time you are referred, our team is committed to
            serving your needs through timely appointments, careful diagnosis
            and efficient reporting. Because behind every scan and every result
            is a person who deserves clarity, reassurance and genuine care.
          </p>
        </div>
      </div>
    </section>
  );
}
