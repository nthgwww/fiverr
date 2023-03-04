import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <FontAwesomeIcon icon={faSearch} className="search-logo"/>
              <input
                type="text"
                placeholder='Try "building mobile app"'
              ></input>
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="https://pngimg.com/d/thinking_man_PNG11606.png" alt="" className="logo-right" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
