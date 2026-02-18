import "./SectionHeader.scss";
export const SectionHeader = ({ spanText, titleText }) => {
  return (
    <div className="section-header-title">
      <span className="section-secondary-title">{spanText}</span>
      <div className="section-content">
        <h1 className="section-title">{titleText}</h1>
      </div>
    </div>
  );
};
