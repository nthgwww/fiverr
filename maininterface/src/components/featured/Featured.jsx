import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect freelance services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="" alt="" />
                        <input type="text" placeholder='Try "building mobile app"'></input>
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

            </div>
        </div>
    </div>
  )
}

export default Featured