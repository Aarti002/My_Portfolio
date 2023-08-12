import React, { Component } from "react";
import "../index.css";
import pic from "../props/mine3.jpeg";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export class About extends Component {
  render() {
    return (
      <Container id="aarti">
        <div className="container px-2 py-15 mx-3 text-center">
          <Row>
            <Card style={{ width: "25vw", height: "38vw", margin: "1vw" }}>
              <Card.Body>
                <Image
                  variant="top"
                  src={pic}
                  fluid
                  style={{ width: "80vw", height: "35vw" }}
                />
              </Card.Body>
            </Card>
            <Card className="introBox">
              <Card.Body>
                <br />
                <Card.Subtitle className="mb-6 text-muted about">
                  <b>HELLO PEOPLE,</b>
                  <br />
                  Myself Aarti, I'm a Good Human, Hardworker, Lifetime Learner,
                  Software Engineer, Open Source Contributor, Technical Blog
                  writer, and Ukulele Player
                </Card.Subtitle>
                <br />
                <Card.Text>
                  In a nutshell, I'm a competitive programmer turned into
                  full-stack web developer. Trying to learn something new
                  everyday. Exploring new stuff everyday. Recently got my hands
                  dirty with technical blog writing, and the good news is, I'm
                  enjoying it. Lately, I have been reading many system design
                  articles which made me realise, there are so many things
                  to learn in this field.
                  <br />
                </Card.Text>
                <b>Email: </b>
                <span className="px-2 py-12">
                  aartikumarisingh3002@gmail.com
                </span>
                <br />
                <b>Linkedin: </b>
                <span className="px-2 py-12">
                  <a
                    href="https://www.linkedin.com/in/linkinurl-aarti-k/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </span>
                <br />
                <b>Contact: </b>
                <span className="px-2 py-12">+91-6206835290</span>
                <br />
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
    );
  }
}
export default About;
