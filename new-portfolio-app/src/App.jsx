import React from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { Experience } from "./components/Experience";

function App() {
  return (
    <main className="apps text-gray-400 bg-gray-900 body-font">
     < NavBar />
      <About />
      <Projects />
      <Experience />
      <Blogs />
    </main>
  );
}

export default App;