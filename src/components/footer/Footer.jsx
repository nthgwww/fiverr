import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica, faDollar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
        <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>© Fiverr International Ltd.2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="https://cdn-icons-png.flaticon.com/512/253/253784.png" alt="" className="icon"/>
              <img src="https://vi.seaicons.com/wp-content/uploads/2016/08/Logos-Facebook-icon.png" alt="" className="icon"/>
              <img src="https://cdn4.iconfinder.com/data/icons/seo-outline-422/50/linkedin-social-media-logo-website-512.png" alt="" className="icon"/>
              <img src="https://i.pinimg.com/736x/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.jpg" alt="" className="icon"/>
              <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" className="icon"/>
            </div>
          </div>
          <div className="link">
            <FontAwesomeIcon icon={faGlobeAfrica}/>
            English
          </div>
          <div className="link">
            US<FontAwesomeIcon icon={faDollar} /> USD
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/1512/1512642.png" alt="" className="access"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
