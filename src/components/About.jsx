import React, { Component } from "react";
import "../index.css";
import pic from "../props/mine3.jpeg";

export class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="card_wrap">
            <img
              className="image_mine object-cover object-center"
              alt="hero"
              src={pic}
            />
            <div className="intro_card">
              <h3>
                Hello people!
                <br />{" "}
              </h3>
              <h5>
                Myself Aarti, I'm a
                <br />
                Good Human,
                <br />
                Hardworker,
                <br />
                Lifetime Learner,
                <br />
                Software Engineer,
                <br />
                Open Source Contributor,
                <br />
                Technical Blog writer,
                <br />
                and Ukulele Player
              </h5>
              <p className="mb-8 leading-relaxed">
                In a nutshell, I'm a competitive programmer turned into
                full-stack web developer. Trying to learn something new
                everyday. Exploring new stuff everyday. Recently got my hands
                dirty with technical blog writing, and the good news is I'm
                liking it. Lately, I have been reading many system design
                articles which make me realise that there are so many things to
                learn in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
