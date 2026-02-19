import "./Testimonials.scss";

import { SectionHeader } from "../sectionHeader";
import { uiText } from "../../mockData/uiText";

export const Testimonials = () => {
  // const ;

  return (
    <div className="testimonials-section" id="testimonials">
      <SectionHeader
        spanText="FEEDBACK"
        titleText="What our customers are saying"
      />
      <div className="customers-content-section">
        {uiText.customers.map((item) => (
          <div key={item.id} className="customers-content">
            <div className="content-img">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="customers-description">
              &ldquo;{item.description}&ldquo;
            </p>
            <h3 className="customers">
              {item.name} - {item.status}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
