import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({children, slidesToShow, arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
      <h1 className="slide-heading">Popular professional services</h1>

        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {/* {cards.map((card) => (
            <CatCard
              desc={card.desc}
              img={card.img}
              title={card.title}
              key={card.id}
            />
          ))} */}
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
