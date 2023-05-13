import React, { Component } from "react";
import "../index.css";
import pic from "../props/mine3.jpeg";

export class About extends Component {
  render() {
    return (
      <section id="about">
       
        <div className="container">
          <div className="card_wrap">
          <img
              className="image_mine object-cover object-center"
              alt="hero"
              src={pic}
            />
            <div className="intro_card">
            <h3>
              Hello people,<br/> </h3>
              <h5>I'm Aarti!
              <br/>I love to work on amazing
              web applications.
            </h5>
            <p className="mb-8 leading-relaxed">
              Lately,I have been playing around with django(python) from the past couple of years
              as backend developer, and to give that skills a professional touch I have done couple 
              of internships as full-stack developer.
              Looking forward to great learning experience in future :)
               
            </p>
            <div className="links">
              <a href="#contact">
                Work With Me
              </a>
              <br/>
              <a href="#projects">
                See My Past Work
              </a>
            </div>
            </div>
            </div>
            
          </div>
          
        
      </section>
    );
  }
}
