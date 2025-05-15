// import React from "react";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Organizations from "./sections/Organizations";
import Languages from "./sections/Languages";
import Interests from "./sections/Interests";
import Blog from "./sections/Blog";
import Navbar from "./sections/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import DynamicBackground from "./components/DynamicBackground"; // Import DynamicBackground
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative"> {/* Add relative for z-indexing context if needed */}
      <DynamicBackground /> {/* Add DynamicBackground component */}
      <Navbar />
      <div className="container mx-auto max-w-4xl p-4 md:p-8 relative z-10"> {/* Ensure content is above background */}
        <Header />
        <main className="space-y-8 md:space-y-12">
          <AnimatedSection id="profile" delay={0.1}><Profile /></AnimatedSection>
          <AnimatedSection id="skills" delay={0.2}><Skills /></AnimatedSection>
          <AnimatedSection id="projects" delay={0.3}><Projects /></AnimatedSection>
          <AnimatedSection id="education" delay={0.4}><Education /></AnimatedSection>
          <AnimatedSection id="organizations" delay={0.5}><Organizations /></AnimatedSection>
          <AnimatedSection id="blog" delay={0.6}><Blog /></AnimatedSection>
          <AnimatedSection id="languages" delay={0.7}><Languages /></AnimatedSection>
          <AnimatedSection id="interests" delay={0.8}><Interests /></AnimatedSection>
        </main>
        <footer className="text-center mt-12 text-muted-foreground text-sm">
          © {new Date().getFullYear()} EL HILALI NABIL. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

