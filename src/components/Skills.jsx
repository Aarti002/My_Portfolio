import React, { Component } from "react";


export class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="container mx-auto text-center">
          <div className="upper_skill">
            <h1>
            Skill Stack
            </h1>
            <p>
              Started as Competetive Programmer since first year of my college, as I continued exploring multiple 
              programming Languages came across multiple framework and libraries, worked on couple of full-stack project and  
              DSA is something which every software engineer has to do by choice or by interest.
            </p>
          </div>
            <div class="center">
              <div class="property-card">
                  <div class="property-image">
                    <div class="property-image-title">
                      <h5>Programming Languages</h5>
                    </div>
                  </div>
                <div class="property-description">
                  <h5>Programming Languages</h5>
                  <p>
                    <span>C/C++</span><br/>
                    <span>Python</span><br/>
                    <span>Java</span><br/>
                    <span>Typescript</span><br/>
                    <span>Javascript</span><br/>
                  </p>
                </div>
              </div>

              <div class="property-card">
                  <div class="property-image-1">
                    <div class="property-image-title">
                      <h5>Libraries/<br/>Frameworks</h5>
                    </div>
                  </div>
                <div class="property-description">
                  <h5>Libraries/<br/>Frameworks</h5>
                  <p>
                    <span>ReactJs</span><br/>
                    <span>Django</span><br/>
                    <span>Bootstrap</span><br/>
                    <span>Nodejs</span><br/>
                  </p>
                </div>
              </div>

              <div class="property-card">
                  <div class="property-image-2">
                    <div class="property-image-title">
                      <h5>Tools/<br/>Platforms</h5>
                    </div>
                  </div>
                <div class="property-description">
                  <h5>Tools/<br/>Platforms</h5>
                  <p>
                    <span>AWS</span><br/>
                    <span>Google Analytics</span><br/>
                    <span>Postman</span><br/>
                    <span>Docker</span><br/>
                  </p>
                </div>
              </div>

              <div class="property-card">
                  <div class="property-image-3">
                    <div class="property-image-title">
                      <h5>Database</h5>
                    </div>
                  </div>
                <div class="property-description">
                  <h5>Database</h5>
                  <p>
                    <span>MySQL</span><br/>
                    <span>Postgresql</span><br/>
                  </p>
                </div>
              </div>
              
            </div>
            <div className="more_about">
              <div className="about_blog">
                <p>As I have already mentioned about technical blog writing, would really 
                  appreciate if you could spend a couple of minutes reading a few of my blogs.
                  Also, please leave your review in the comment section being a beginner in content writing 
                  it will really help me to improve my writing skill. 
                  <br/><b>Please follow me on medium: https://medium.com/@aartikumarisingh3002</b>
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
