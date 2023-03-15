import { faCheck, faClock, faRecycle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrums">FIVERR -- GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/316807395_1493329007815923_3951820802040036055_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=L1hbTEd181IAX8qF8nH&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDKop75zgNkcbgtpmVdqQ6Nzm1euqvpHjmQOQmZFHbi2A&oe=64137B18"
              alt=""
              className="user-avatar"
            />
            <span>Tommy Ho</span>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <span>5</span>
            </div>
            {/* <button>Contact Me</button> */}
          </div>
          <Slider slidesToShow={1} arrowScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/299303050/original/00ed10f685f8c011ba2f2209e717ebd099541647/create-an-amazing-art-from-your-imagination-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/396e8c4a9c68dc63b31be94976f48535-1678577651/image%20(79)/create-an-amazing-art-from-your-imagination-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/331dd7223f8261b4d9ffeb351ccc4f79-1678580830/Mishku_samurai_girl_mask_tattoo_design_7c9e07eb-c253-442b-b451-3247b48858a5/create-an-amazing-art-from-your-imagination-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/299303050/original/4f23add854c310d98cbdbf7dbfe2dbc2e4789dd7/create-an-amazing-art-from-your-imagination-using-midjourney-ai.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            With my extensive knowledge of AI tools and techniques, I can bring
            your vision to life with speed and accuracy. I strive for excellence
            in every project and ensure that every client is 100% satisfied with
            the final result. Don't hesitate to get in touch with me for a truly
            unique and innovative artistic experience.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/316807395_1493329007815923_3951820802040036055_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=L1hbTEd181IAX8qF8nH&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDKop75zgNkcbgtpmVdqQ6Nzm1euqvpHjmQOQmZFHbi2A&oe=64137B18"
                alt=""
                className="user-avatar"
              />
              <div className="info">
                <span>Tommy Ho</span>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">From</div>
                  <div className="desc">VN</div>
                </div>
                <div className="item">
                  <div className="title">Member</div>
                  <div className="desc">Aug 2022</div>
                </div>
                <div className="item">
                  <div className="title">Avg. responsive time</div>
                  <div className="desc">4 hours</div>
                </div>
                <div className="item">
                  <div className="title">Last delivery</div>
                  <div className="desc">1 day</div>
                </div>
                <div className="item">
                  <div className="title">Languages</div>
                  <div className="desc">English</div>
                </div>
              </div>
              <hr />
              <p>
                Hi, I'm Tommy, an AI artist with a passion for using
                cutting-edge technology to enhance creativity. I'm offering my
                expertise in midjourney AI services to help you transform your
                ideas into stunning pieces of art. From portraits to landscapes,
                abstract to realistic, I use the latest AI algorithms to produce
                art that stands out and leaves a lasting impression.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6e95304f28158ff61fead9937a219d9d-1463485791677998272869/JPEG_20230304_223752_6733416871667658857.jpg"
                  alt=""
                />
                <div className="info">
                  <span>dotstick</span>
                  <div className="country">
                    <img
                      src="https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png"
                      alt=""
                    />
                    <span>Viet Nam</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>5</span>
              </div>
              <p>
                Absolutely delivered what was expected. I noticed a few extra
                blemishes I wanted fixed after being quoted. Sylvana fixed those
                as well without complaint. I said I was in no rush on this order
                but the image enhancement was done to perfection the next day
                anyway. Looking forward to working again!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/81/81250.png"
                  alt=""
                />
                <span>Yes</span>
                <img
                  src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
                  alt=""
                />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6e95304f28158ff61fead9937a219d9d-1463485791677998272869/JPEG_20230304_223752_6733416871667658857.jpg"
                  alt=""
                />
                <div className="info">
                  <span>dotstick</span>
                  <div className="country">
                    <img
                      src="https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png"
                      alt=""
                    />
                    <span>Viet Nam</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>5</span>
              </div>
              <p>
                Absolutely delivered what was expected. I noticed a few extra
                blemishes I wanted fixed after being quoted. Sylvana fixed those
                as well without complaint. I said I was in no rush on this order
                but the image enhancement was done to perfection the next day
                anyway. Looking forward to working again!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/81/81250.png"
                  alt=""
                />
                <span>Yes</span>
                <img
                  src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
                  alt=""
                />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6e95304f28158ff61fead9937a219d9d-1463485791677998272869/JPEG_20230304_223752_6733416871667658857.jpg"
                  alt=""
                />
                <div className="info">
                  <span>dotstick</span>
                  <div className="country">
                    <img
                      src="https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png"
                      alt=""
                    />
                    <span>Viet Nam</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>5</span>
              </div>
              <p>
                Absolutely delivered what was expected. I noticed a few extra
                blemishes I wanted fixed after being quoted. Sylvana fixed those
                as well without complaint. I said I was in no rush on this order
                but the image enhancement was done to perfection the next day
                anyway. Looking forward to working again!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/81/81250.png"
                  alt=""
                />
                <span>Yes</span>
                <img
                  src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
                  alt=""
                />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.9</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <FontAwesomeIcon icon={faClock} />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faRecycle} />
              <span>3 Revisions</span>
            </div>
          </div>

          <div className="features">
            <div className="item">
              <FontAwesomeIcon icon={faCheck}/>
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faCheck}/>
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faCheck}/>
              <span>Image Upscalling</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faCheck}/>
              <span>Additional Design </span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
