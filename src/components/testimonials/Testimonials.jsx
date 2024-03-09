import "./Testimonials.scss";
import userImg from "../../assets/image/user-1.jpg";
import userSecondImg from "../../assets/image/user-2.jpg";
import userThirdImg from "../../assets/image/user-3.jpg";
import { SectionHeader } from "../sectionHeader";

export const Testimonials = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      status: "Happy Customer",
      img: userImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      name: "Roslyn Doe",
      status: "Happy Customer",
      img: userSecondImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      name: "Thomas Doe",
      status: "Happy Customer",
      img: userThirdImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="testimonials-section" id="testimonials">
      <SectionHeader
        spanText="FEEDBACK"
        titleText="What our customers are saying"
      />
      <div className="customers-content-section">
        {customers.map((item) => (
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
