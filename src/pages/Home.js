import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/florinacity.jpg';
import "../styles/Home.css";


function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="overlay"></div> 
        <div className='headerContainer'>
            <h1>ArtInFlorina</h1>
            <p>Explore the Cultural Events</p>
            <Link to="/event">
              <button>Events</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;
