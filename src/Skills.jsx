import React, { Component } from "react";
import { FaChevronLeft, FaChevronRight, FaStackOverflow } from "react-icons/fa";
import { programming_language } from "./Skill_data";
import { Libraries } from "./Skill_data";
import { tools } from "./Skill_data";
import { Database } from "./Skill_data";

export class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="container px-3 py-10 mx-auto text-center lg:px-30">
          <div className="upper_skill">
            <h1>
              <FaStackOverflow size="40px" color="white" /> Skill Stack
            </h1>
            <p>
              Started my coding journey as competitive programmer, but till this
              date have learned many frameworks ,frontend, backend, databases
              and will continue to learn.
            </p>
          </div>
          <div className="skill_sets">
            <div className="category_wrap">
              <div className="category ">
                <span>
                  <h4>P.Languages</h4>
                  <br />
                  <FaChevronLeft size="20px" color="white" />
                  Skill, YOE, Rate
                  <FaChevronRight size="20px" color="white" />
                </span>
                {programming_language.map((skill) => (
                  <div key={skill.id}>
                    <div className="content my-2">
                      <span>{skill.title}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.YOE}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.Rate}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="category_wrap">
              <div className="category ">
                <span>
                  <h4>Lib/Framework</h4>
                  <br />
                  <FaChevronLeft size="20px" color="white" />
                  Skill, YOE, Rate
                  <FaChevronRight size="20px" color="white" />
                </span>
                {Libraries.map((skill) => (
                  <div key={skill.id}>
                    <div className="content my-2">
                      <span>{skill.title}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.YOE}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.Rate}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="category_wrap">
              <div className="category ">
                <span>
                  <h4>Tools</h4>
                  <br />
                  <FaChevronLeft size="20px" color="white" />
                  Skill, YOE, Rate
                  <FaChevronRight size="20px" color="white" />
                </span>
                {tools.map((skill) => (
                  <div key={skill.id}>
                    <div className="content my-2">
                      <span>{skill.title}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.YOE}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.Rate}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="category_wrap">
              <div className="category ">
                <span>
                  <h4>Databases</h4>
                  <br />
                  <FaChevronLeft size="20px" color="white" />
                  Skill, YOE, Rate
                  <FaChevronRight size="20px" color="white" />
                </span>
                {Database.map((skill) => (
                  <div key={skill.id}>
                    <div className="content my-2">
                      <span>{skill.title}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.YOE}&nbsp;&nbsp;&nbsp;</span>
                      <span>{skill.Rate}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
