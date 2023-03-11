import React from "react";
import { Component } from "react";
import { NavBar } from "./NavBar";
import { MainContent } from "./MainComponent";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import {Contact} from "./Contact"
import Cards from "./Cards";
import { useState } from "react";

function App() {
  
    return (
      //const [showFront, setShowFront] = useState(true);
        <main className="apps text-gray-400 bg-gray-900 body-font">
          
        <NavBar />
        
        <About />
        <Projects />
        <Skills/>
        <Contact/>



        </main>
      
    );
  }

export default App;