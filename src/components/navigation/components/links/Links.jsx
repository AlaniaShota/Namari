import "./Links.scss";

export const Links = ({ isOpen, setIsOpen }) => {
  const link = [
    {
      id: 1,
      name: "HOME",
      link: "#home",
    },
    {
      id: 2,
      name: "ABOUT",
      link: "#about",
    },
    {
      id: 3,
      name: "GALLERY",
      link: "#gallery",
    },
    {
      id: 4,
      name: "TESTIMONIALS",
      link: "#testimonials",
    },
    {
      id: 5,
      name: "CLIENTS",
      link: "#clients",
    },
    {
      id: 6,
      name: "PRICING",
      link: "#pricing",
    },
  ];

  return (
    <div className="links-section">
      {link.map((item) => (
        <div key={item.id} onClick={() => setIsOpen(!isOpen)}>
          <a href={item.link}>
            <span className="links-text">{item.name}</span>
          </a>
        </div>
      ))}
    </div>
  );
};
