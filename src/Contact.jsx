import React, { Component } from "react";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container px-3 py-15 mx-auto text-center lg:px-30">
          <div className="upper_contact">
            <h1>
              <FaPhoneAlt size="40px" color="white" /> Contact Me
            </h1>
            <p>
              Please reach me out through email or ping me on linkedin.
            </p>
          </div>

          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <FaEnvelope size="30px" color="white" />
            <div className="contact bg-gray-900 py-10 ">
              <span className="px-2 py-12">aartikumarisingh120@gmail.com</span>
              <span className="px-2 py-12">
               
                aartikumarisingh3002@gmail.com
              </span>
              <span className="px-2 py-12"> 2019001@iiitdmj.ac.in</span>
            </div>
          </div>
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <FaLinkedinIn size="30px" color="white" />
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
      </section>
    );
  }
}
