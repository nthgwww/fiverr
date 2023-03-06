import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import Slider from "infinite-react-carousel";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/catCard";
import { cards } from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard
            key={card.id}
            img={card.img}
            desc={card.desc}
            title={card.title}
          />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icon-check-title"
              />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
