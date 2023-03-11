import React, { Component } from "react";
import ved1 from "./projects/pro1.webm";
import ved2 from "./projects/pro2.webm";
import img1 from "./projects/pro3.png";
import img2 from "./projects/pro4.png";
import { FaCodeBranch, FaStackOverflow } from "react-icons/fa";

export class Projects extends Component {
  render() {
    return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="upper_project">
            <h1>
            <FaCodeBranch size="30px" color="white" />Apps I've Built
            </h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are some of my work samples. Mainly i have used django at backend and for databases
              MySQL or Postgres and for frontend basic bootstarp functionality cause my main focus was to enhance my
              backend skill rather than wasting time on frontend.
            </p>
          </div>
          <div className="row ">
            <div className="column ">
              <div className="item">
                <video
                  className="px-4 py-4 md-2"
                  width="420"
                  height="240"
                  src={ved1}
                  type="video/webm"
                  autoPlay
                  controls
                ></video>
                <span>Mock-test Portal</span>
              </div>

              <div className="item">
               <img src={img1} className="px-4 py-4 md-2"
                  width="420"
                  height="240" alt="project4" />
                <span>Student-Staff Management</span>
              </div>
            </div>
            <div className="column ">
              <div className="item">
                <video
                  className="px-4 py-4 md-2"
                  width="420"
                  height="240"
                  src={ved2}
                  type="video/webm"
                  autoPlay
                  controls
                ></video>
                <span>What to do next?</span>
              </div>

              <div className="item">
              <img src={img2} className="px-4 py-4 md-2"
                  width="420"
                  height="240" alt="project4" />
                <span>Online Invoice Management</span>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
