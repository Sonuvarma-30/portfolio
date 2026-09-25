import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

// ===== Root App Component =====
// All sections are assembled here in order.
export default function App() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Professional Experience */}
        <Experience />

        {/* 6. Training & Timeline */}
        <Timeline />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Education */}
        <Education />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
