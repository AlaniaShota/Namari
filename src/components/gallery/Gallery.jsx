import "./Gallery.scss";

import firstImg from "../../assets/image/Aesthetic Wallpaper.jpg";
import secondImg from "../../assets/image/download (1).jpg";
import thirdImg from "../../assets/image/download (2).jpg";
import forthImg from "../../assets/image/download.jpg";
import fifthImg from "../../assets/image/EXR_MUZ.jpg";
import sixthImg from "../../assets/image/got you.jpg";

export const Gallery = () => {
  const galleryData = [
    sixthImg,
    secondImg,
    fifthImg,
    thirdImg,
    forthImg,
    firstImg,
  ];

  return (
    <div className="gallery-section" id="gallery">
      <div className="gallery-content">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-img-content">
            <figure>
              <img src={item} alt="" className="img-content" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};
