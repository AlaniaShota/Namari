import { Button } from "../button";
import "./Service.scss";
import serviceImg from "../../assets/image/pngegg6.png";

export const Service = () => {
  return (
    <div className="service-section" id="service">
      <div className="service-section-citation">
        <p className="text-citation">
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua&ldquo;
        </p>
        <h4 className="text-writer">— John Doe, Happy Customer</h4>
      </div>
      <div className="service-section-believing">
        <span className="text-span">BELIEVING</span>
        <h1 className="title-believing">Focusing On What Matters Most</h1>
        <p className="description-first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam!
        </p>
        <p className="description-second">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p className="description-third">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet!
        </p>
        <Button>
          <span>WATCH VIDEO</span>
        </Button>
      </div>
      <div className="section-service-img">
        <img src={serviceImg} alt="" />
      </div>
    </div>
  );
};
