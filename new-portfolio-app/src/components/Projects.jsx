import React, { Component } from "react";
import ved1 from "../props/pro1.webm";
import ved2 from "../props/pro2.webm";
import img1 from "../props/ohp_ss.png";
import img2 from "../props/pro4.png";
import "../index.css";

import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export class Projects extends Component {
  render() {
    return (
      <Container id="projects">
        <b>Projects</b>
        <div className="container px-2 py-15 mx-3 my-5 text-center">
          <Row>
            <Col>
              <div className="item">
                <video
                  className="px-4 py-4 md-2 thumbnail"
                  src={ved1}
                  type="video/webm"
                  autoPlay
                  controls
                ></video>
                <span>
                  <a
                    href="https://github.com/Aarti002/mock_test_app"
                    target="_blank"
                  >
                    Mock-test Portal
                  </a>
                </span>
              </div>
              <div className="item">
                <img
                  src={img1}
                  className="px-2 py-2 md-1 thumbnail"
                  alt="project4"
                />
                <div className="content">
                  <a href="http://aarti002.pythonanywhere.com/" target="_blank">
                    Organisation Handling Portal
                  </a>
                  <p>
                    <a
                      href="https://github.com/Aarti002/django_student_management_system"
                      target="_blank"
                    >
                      Github
                    </a>
                    <br />
                    <h6>
                      {" "}
                      To login on application use <b>
                        admin@gmail.com
                      </b> and <b>12345</b> as email and password respectively.
                    </h6>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="item">
                <video
                  className="px-4 py-4 md-2 thumbnail"
                  src={ved2}
                  type="video/webm"
                  autoPlay
                  controls
                ></video>
                <span>
                  <a
                    href="https://github.com/Aarti002/To-Do-List/tree/master"
                    target="_blank"
                  >
                    Task Scheduler
                  </a>
                </span>
              </div>

              <div className="item">
                <img
                  src={img2}
                  className="px-4 py-4 md-2 thumbnail"
                  alt="project4"
                />
                <span>
                  <a
                    href="https://github.com/Aarti002/Tranzact_assessment/tree/master"
                    target="_blank"
                  >
                    Online Invoice Management
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
