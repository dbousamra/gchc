import { IMAGES, STORY } from "../content";
import { ArrowRight } from "../icons";
import { useReveal } from "../hooks";

export default function Story() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="story section-pad" id="about" ref={ref}>
      <div className="wrap story-grid">
        <div className="story-photos reveal">
          <img
            className="story-photo main"
            src={IMAGES.suite}
            alt="The frosted-glass entrance to GC HeartCare at Suite 12, Gold Coast Private Hospital"
            width={1400}
            height={933}
            loading="lazy"
          />
          <img
            className="story-photo inset"
            src={IMAGES.reception}
            alt="The GC HeartCare reception team at work"
            width={1400}
            height={933}
            loading="lazy"
          />
        </div>

        <div className="story-copy reveal">
          <span className="eyebrow">Our story</span>
          <h2>
            Every patient, treated like <em>family</em>.
          </h2>
          {STORY.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <a className="story-link" href="#doctors">
            Meet the cardiologists <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
