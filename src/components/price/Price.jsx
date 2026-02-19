import { PriceCard } from "./components";

import { SectionHeader } from "../sectionHeader/index";
import { uiText } from "../../mockData/uiText";

export const Price = () => {
  return (
    <div className="price-section" id="pricing">
      <SectionHeader spanText={uiText.choice} titleText={uiText.choiceTitle} />
      <PriceCard />
    </div>
  );
};
