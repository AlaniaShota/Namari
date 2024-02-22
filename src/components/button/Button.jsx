import './Button.scss'

export const Button = ({ children }) => {
  return (
    <div className="btn-container">
      <button className="btn">
        <span className="btn-text">{children}</span>
      </button>
    </div>
  );
};
