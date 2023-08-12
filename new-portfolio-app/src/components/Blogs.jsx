import React, { Component } from "react";
import "../index.css";
import awsCDK from "../props/AboutCDKPoster.png";
import apiGateway from "../props/api_gateway_poster.png";
import cors from "../props/cors_poster.png";
import uuid from "../props/uuid_poster.jpg";

import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export class Blogs extends Component {
  render() {
    return (
      <Container id="blogs">
        <b>Blogs</b>
        <div className="container mx-5 my-5">
          <Row>
            <div className="blog">
              <div className="blogImg">
                <a href="https://medium.com/aws-tip/unleashing-the-power-of-aws-cdk-724799be712e">
                  <img src={awsCDK} alt="Blog-1" />
                </a>
              </div>
              <div className="blogDesc">
                <b>Unleashing the Power of AWS CDK</b>
                <p>
                  Hey there &#128075;, this was my very first blog about basics
                  of AWS CDK and how does infrastructure work at the back, would
                  really appreciate if you could spend couple of minutes to read
                  this blog.
                </p>
              </div>
            </div>

            <div className="blog">
              <div className="blogImg">
                <a href="https://medium.com/@aartikumarisingh3002/how-does-api-gateway-work-with-lambda-32769ea5b62">
                  <img src={apiGateway} alt="Blog-2" />
                </a>
              </div>
              <div className="blogDesc">
                <b>How does API Gateway work with Lambda?</b>
                <p>
                  API Gateway is commonly used as a front-end for Lambda
                  functions, providing a way to expose them as HTTP endpoints
                  and handle request routing, authorization, and other
                  API-related functionalities.
                </p>
              </div>
            </div>

            <div className="blog">
              <div className="blogImg">
                <a href="https://medium.com/@aartikumarisingh3002/why-is-it-important-to-handle-cors-issues-1491d315b17f">
                  <img src={cors} alt="Blog-3" />
                </a>
              </div>
              <div className="blogDesc">
                <b>Why is it important to handle CORS issues?</b>
                <p>
                  Cross-Origin Resource Sharing (CORS) is a crucial security
                  mechanism implemented by web browsers to control cross-origin
                  requests and protect users from potential risks.
                </p>
              </div>
            </div>

            <div className="blog">
              <div className="blogImg">
                <a href="https://medium.com/@aartikumarisingh3002/unique-id-generator-in-a-distributed-system-5ee79c92a562">
                  <img src={uuid} alt="Blog-4" />
                </a>
              </div>
              <div className="blogDesc">
                <b>Unique ID Generator in a Distributed System</b>
                <p>
                  The generation of unique IDs is a crucial aspect in various
                  systems and applications. Whether it's for distributed
                  systems, databases, or other scenarios, the choice of a
                  suitable ID generation method can impact system performance,
                  scalability, and data integrity.
                </p>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}
