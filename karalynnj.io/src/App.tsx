import { useState } from "react";
import "./App.css";
import hourglass from "./assets/hourglass.gif";
import WaybackDialog from "./components/WaybackDialog";
import AboutSection from "./sections/about/AboutSection";
import ExperienceSection from "./sections/experience/ExperienceSection";
import HeroSection from "./sections/hero/HeroSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}

      <footer className="flex items-center justify-center py-6 mt-10 text-lilac bg-shadow w-full min-h-16 relative box-content">
        <p className="text-sm">
          <span className="text-ecto">✦</span> Conjured in{" "}
          <span className="text-ghost-semitransparent">Figma</span>, summoned
          with <span className="text-ghost-semitransparent">Tailwind</span> and{" "}
          <span className="text-ghost-semitransparent">React</span>{" "}
          <span className="text-ecto">✦</span>
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-6 right-6"
        >
          <img src={hourglass} alt="Loading..." className="w-16 h-16" />
        </button>
      </footer>
      <WaybackDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
