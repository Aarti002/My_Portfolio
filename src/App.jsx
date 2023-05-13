import React from "react";
import { Component } from "react";
import { NavBar } from "./components/NavBar";
import { MainContent } from "./MainComponent";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import {Contact} from "./components/Contact";

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