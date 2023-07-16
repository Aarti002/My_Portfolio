import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div id="contact_me">
        <div className="container px-3 py-15 mx-auto text-center lg:px-30">
          <div className="upper_contact">
            <h1>
              Contact Me
            </h1>
            <p>
              Please reach me out through email or ping me on linkedin.
            </p>
          </div>

            <div className="contact bg-gray-900 py-10 ">
              <p>Email IDs:</p>
              <span className="px-2 py-12">aartikumarisingh3002@gmail.com</span><br/>
              <span className="px-2 py-12"> 2019001@iiitdmj.ac.in</span>
            </div>
            <div className="contact bg-gray-900 py-10 ">
              <p>Phone no.:</p>
              <span className="px-2 py-12">+91-6206835290</span>
            </div>
            <div className="contact bg-gray-900 py-10 ">
              <span className="px-2 py-12">
                <a
                  href="https://www.linkedin.com/in/linkinurl-aarti-k/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </span>
            </div>
          </div>
          
        </div>
    );
  }
}
