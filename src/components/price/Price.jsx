import { PriceCard } from "./components";
import { SectionHeader } from "../sectionHeader/index";
export const Price = () => {
  return (
    <div className="price-section" id="pricing">
      <SectionHeader
        spanText="YOUR CHOICE"
        titleText="We have the right package for you"
      />
      <PriceCard />
    </div>
  );
};
