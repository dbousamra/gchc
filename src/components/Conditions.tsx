import { CONDITIONS } from "../content";
import { Chevron } from "../icons";
import { useReveal } from "../hooks";

export default function Conditions() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="conditions section-pad" id="conditions" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Conditions we care for.</h2>
          <p>
            From chest pain and palpitations to heart failure, we diagnose and
            manage the full range of cardiac conditions. If you're unsure
            whether we can help, ask your GP for a referral or call our team.
          </p>
        </div>

        <div className="condition-list reveal">
          {CONDITIONS.map((c, i) => (
            <details className="condition" key={c.name} open={i === 0}>
              <summary>
                <span className="condition-name">{c.name}</span>
                <span className="condition-chevron" aria-hidden="true">
                  <Chevron />
                </span>
              </summary>
              <p className="condition-body">{c.body}</p>
            </details>
          ))}
        </div>

        <p className="conditions-note reveal">
          If you think you may be having a heart attack, call <strong>000</strong>{" "}
          immediately. This page is general information, not medical advice.
        </p>
      </div>
    </section>
  );
}
