import { Button } from "../button";
import { uiText } from "../../mockData/uiText";

import "./Service.scss";
import serviceImg from "../../assets/image/pngegg6.png";

export const Service = () => {
  return (
    <div className="service-section" id="service">
      <div className="service-section-citation">
        <p className="text-citation">
          &ldquo;{uiText.service.loremText}&ldquo;
        </p>
        <h4 className="text-writer">{uiText.service.writer}</h4>
      </div>
      <div className="service-section-believing">
        <span className="text-span">{uiText.service.believe}</span>
        <h1 className="title-believing">{uiText.service.focus}</h1>
        <p className="description-first">{uiText.service.firtsDescription}</p>
        <p className="description-second">{uiText.service.secondDescription}</p>
        <p className="description-third">{uiText.service.thirdDescription}</p>
        <Button>
          <span>{uiText.service.video}</span>
        </Button>
      </div>
      <div className="section-service-img">
        <img src={serviceImg} alt={uiText.service.service} />
      </div>
    </div>
  );
};
