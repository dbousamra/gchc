import { PRACTICE, MAP_EMBED } from "../content";
import { Pin, Clock, Phone, ArrowRight } from "../icons";
import { useReveal } from "../hooks";

export default function Location() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="location" id="visit" ref={ref}>
      <div className="wrap">
        <div className="location-info reveal">
          <h2>Find us at Gold Coast Private Hospital.</h2>

          <div className="location-rows">
            <div className="loc-row">
              <span className="loc-ico">
                <Pin />
              </span>
              <div>
                <div className="loc-strong">{PRACTICE.address.line1}</div>
                <div className="loc-sub">{PRACTICE.address.line2}</div>
              </div>
            </div>
            <div className="loc-row">
              <span className="loc-ico">
                <Clock />
              </span>
              <div>
                <div className="loc-strong">9:00am – 4:00pm</div>
                <div className="loc-sub">Monday to Friday</div>
              </div>
            </div>
            <div className="loc-row">
              <span className="loc-ico">
                <Phone />
              </span>
              <div>
                <a className="loc-strong loc-link" href={PRACTICE.phoneHref}>
                  {PRACTICE.phone}
                </a>
                <div className="loc-sub">Reception, weekdays</div>
              </div>
            </div>
          </div>

          <a
            className="btn btn-primary"
            href={PRACTICE.address.mapHref}
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowRight />
          </a>
        </div>

        <div className="map-wrap reveal">
          <iframe
            title={`Map to ${PRACTICE.name}`}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
