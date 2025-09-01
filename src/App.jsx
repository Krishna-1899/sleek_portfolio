import React, { useState, useRef } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
// import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state
  
  // Create refs for each section
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header 
        isOnePage={isOnePage}
        sectionRefs={{
          home: heroRef,
          skills: skillsRef,
          experience: experienceRef,
          projects: projectsRef,
          contact: contactRef
        }}
      />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
