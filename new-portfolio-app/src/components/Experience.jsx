import React, { Component } from "react";
import amz_logo from "../props/amz_logo.jpg";
import poolit_logo from "../props/poolit.jpeg";
import paleru_logo from "../props/paleru_logo.png";
import "../index.css";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export class Experience extends Component {
  render() {
    return (
      <Container id="experience">
        <b>Experiences</b>
        <Row>
          <Col>
            <div className="container mx-3 my-3 text-center ">
              <div className="exp1">
                <div className="logo">
                  <img src={amz_logo} alt="Amazon logo" />
                </div>
                <div className="description">
                  <b>Jan,2023 - Jun,2023</b>
                  <br />
                  <b>SDE Intern</b>
                  <p>
                    - Developed an internal debugging tool from scratch,
                    leveraging multiple AWS resources and various internal
                    services of Amazon
                  </p>
                  <p>
                    - Designed as a versatile solution for applications and
                    services running within Amazon, the tool effeciently
                    addresses issues encountered during production or any stage
                    of operation. Streamlining troubleshooting processes, it
                    enables seamless resolution of problems, significantly
                    improving operational efficiency for running services.
                  </p>
                  <p>
                    - The tool integrates with AWS building blocks, providing
                    scalability, reliability, and security. It offers a
                    user-friendly interface, comprehensive monitoring and
                    analytics features, and promotes collaboration among teams
                    for effective issue resolution.
                  </p>
                </div>
              </div>

              <div className="exp1">
                <div className="logo">
                  <img src={poolit_logo} alt="Poolit logo" />
                </div>
                <div className="description">
                  <b>May,2022 - Jul,2022</b>
                  <br />
                  <b>Backend Developer Intern</b>
                  <p>
                    - As a key contributor at POOLit, I led the development of a
                    single application offering multiple pooling systems,
                    including car-pooling, book sharing, and other goodies
                    renting services. I optimized queries in each module,
                    implementing efficient approaches that ensured consistent
                    output with a maximum time variation of just 10 seconds.
                  </p>
                  <p>
                    - Additionally, I refactored and cleaned up the backend
                    codebase, leveraging Python libraries such as pep8 for code
                    formatting. Also, I improved the organization of modules,
                    adding descriptive documentation for each Utils method to
                    enhance code readability and maintainability
                  </p>
                </div>
              </div>

              <div className="exp1">
                <div className="logo">
                  <img src={paleru_logo} alt="PaleruTech logo" />
                </div>
                <div className="description">
                  <b>Oct,2021 - Nov,2021</b>
                  <br />
                  <b>Full-Stack Developer Intern</b>
                  <p>
                    - As an intern at Paleru Tech, I played a vital role in the
                    development of a web application using Django for the
                    backend and HTML, CSS, and JS for the frontend.
                  </p>
                  <p>
                    - Notably, I implemented a user activity tracking system,
                    leveraging Google Analytics to gather valuable insights into
                    user behavior and engagement.
                  </p>
                  <p>
                    - To enhance the user experience, I introduced advanced
                    features such as filtering and multiple action buttons,
                    empowering users to efficiently manipulate and manage data.
                  </p>
                  <p>
                    - By employing my skills in Django, HTML, CSS, and JS, I
                    successfully delivered enhancements that enhanced the
                    application's functionality, usability, and overall user
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
