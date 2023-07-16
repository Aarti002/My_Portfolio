import React, { Component } from "react";
import amazon_logo from "../props/amazon_logo.png";
import poolit_logo from "../props/poolit.jpeg";
import paleru_logo from "../props/paleru_logo.png";

export class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <link rel="stylesheet" href="path/to/fontawesome.min.css"></link>
        <div className="container px-3 py-15 mx-auto text-center lg:px-30">
          <div className="allExperience">
            <h2>Experience</h2>
            <div className="amazon">
            <div className="amazon_logo">
                <img src={amazon_logo} alt="Amazon logo" />
                </div>
                <b><p>Bangalore [Jan,2023 - Jun,2023]</p></b>
                <div className="amazon_project">
                   <p>- Developed an internal debugging tool from scratch,
                     leveraging multiple AWS resources and various internal
                      services of Amazon</p>
                      <p>-
                      Designed as a versatile solution for applications and 
                      services running within Amazon, the tool effeciently
                      addresses issues encountered during production or any stage 
                      of operation. Streamlining troubleshooting processes, 
                      it enables seamless resolution of problems, significantly 
                      improving operational efficiency for running services.</p>
                      <p>-
                      The tool integrates with AWS building blocks, 
                      providing scalability, reliability, and security. It offers a
                      user-friendly interface, comprehensive monitoring and 
                      analytics features, and promotes collaboration
                      among teams for effective issue resolution.</p>
                </div>
                
            </div>
            <div className="poolit">
            
                <div className="poolit_project">
                <b><p>Delhi [May,2022 - Jul,2022]</p></b>
                   <p>- As a key contributor at POOLit, I led the development of
                     a single application offering multiple pooling systems, 
                     including car-pooling, book sharing, and other goodies 
                     renting services. I optimized queries in each module, 
                     implementing efficient approaches that ensured consistent 
                     output with a maximum time variation of just 10 seconds.</p>
                    <p>- Additionally, I refactored and cleaned up the backend codebase,
                     leveraging Python libraries such as pep8 for code formatting. 
                     Also, I improved the organization of modules, adding descriptive 
                     documentation for each Utils method to enhance code readability 
                     and maintainability</p>
                </div>
                <div className="poolit_logo">
                <img src={poolit_logo} alt="Poolit logo" />
                </div>
            </div>
            <div className="paleru">
              <div className="paleru_logo">
                <img src={paleru_logo} alt="Paleru logo" />
              </div>
                <div className="paleru_project">
                <b><p>Bangalore [Oct,2021 - Nov,2021]</p></b>
                   <p>- As an intern at Paleru Tech, I played a vital role 
                      in the development of a web application using Django
                      for the backend and HTML, CSS, and JS for the frontend.</p>
                   <p>- Notably, I implemented a user activity tracking system,
                     leveraging Google Analytics to gather valuable insights into 
                     user behavior and engagement.</p>
                    <p>- To enhance the user experience, I introduced advanced 
                      features such as filtering and multiple action buttons, 
                      empowering users to efficiently manipulate and manage data.</p>
                    <p>- By employing my skills in Django, HTML, CSS, and JS, 
                      I successfully delivered enhancements that enhanced the
                       application's functionality, usability, and overall user 
                       satisfaction.</p>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    );
  }
}
