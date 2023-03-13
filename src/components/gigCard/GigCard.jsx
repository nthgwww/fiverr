import React from 'react';
import './GigCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function GigCard({item}) {
  return (
    <Link to="/gig/123">
    <div className='gigCard'>
        <div className="container">
            <img src={item.img} alt="" />
            <div className="info">
                <div className='user'>
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
            </div>
            <div className="star">
                <FontAwesomeIcon className='star-icon' icon={faStar} />
                <span>{item.star}</span>
            </div>
            <hr />
            <div className="details">
                <FontAwesomeIcon className='details-icon' icon ={faHeart}/>
                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard