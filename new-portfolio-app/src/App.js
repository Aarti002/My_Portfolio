import React from "react";
import { NavBar } from "../src/components/NavBar";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { Skills } from "../src/components/Skills";
import { Contact } from "../src/components/Contact";
import { Experience } from "../src/components/Experience";

function App() {
  return (
    //const [showFront, setShowFront] = useState(true);
    <main className="apps text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;