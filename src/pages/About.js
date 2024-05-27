import React from "react";
import florinaup from "../assets/florinaup.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${florinaup})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to <b>ArtInFlorina!</b> <br></br> <br></br>

<b>ArtInFlorina</b> is a platform dedicated to the promotion of artistic events and cultural life in the Florina region. 
        
Through our website, we provide our visitors with information about upcoming exhibitions, concerts, theatre performances and other cultural events taking place in the region. 

Our goal is to create an online audience that will discover and enjoy the complex culture of Florina. Through <b>ArtInFlorina</b>, we promote creativity and diversity of arts and culture, offering a rich cultural magazine for art lovers and cultural initiative. 

Whether you are a local resident or visiting Florina for the first time, <b>ArtInFlorina</b> welcomes you to explore the culture and arts that flourish in the heart of northern Greece.
        </p>
      </div>
    </div>
  );
}

export default About;