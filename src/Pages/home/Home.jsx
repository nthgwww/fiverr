import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import Slider from "infinite-react-carousel";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/catCard";
import ProjectCard from "../../components/projectCard/projectCard";
import { cards, projects } from "../../data";
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
            <div className="title">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icon-check-title"
              />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icon-check-title"
              />
              Protected payments, every time
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
            <div className="title">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="icon-check-title"
              />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
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

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>.fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <FontAwesomeIcon icon={faCheckCircle} />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <FontAwesomeIcon icon={faCheckCircle} />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <FontAwesomeIcon icon={faCheckCircle} />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://sg.fiverrcdn.com/press_release/1068/Press-Page%20-%201_press_image_1600171796.jpg  "></img>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard key={card.id} img={card.img} pp={card.pp} username={card.username} cat={card.cat} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
