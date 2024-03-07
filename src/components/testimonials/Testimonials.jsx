import "./Testimonials.scss";
import userImg from "../../assets/image/user-1.jpg";
import userSecondImg from "../../assets/image/user-2.jpg";
import userThirdImg from "../../assets/image/user-3.jpg";

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
      <div className="testimonials-section-content">
        <span className="testimonials-span-title">FEEDBACK</span>
        <div className="testimonials-content">
          <h1 className="testimonials-title">What our customers are saying</h1>
        </div>
      </div>
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
