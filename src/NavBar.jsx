import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import {Contact} from "./Contact"


export class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navigation navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand px-md-3" href="#about">
              Aarti Singh
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a className="nav-link" href="#skills">
              <li className="nav-item active">
                  Skills
              </li>
              </a>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}


export default NavBar;