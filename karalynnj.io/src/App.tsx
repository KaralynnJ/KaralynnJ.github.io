import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.css";
import hourglass from "./assets/hourglass.gif";
import AnchorLink from "./components/AnchorLink";
import MaterialIcon from "./components/MaterialIcon";
import WaybackDialog from "./components/WaybackDialog";
import AboutSection from "./sections/about/AboutSection";
import ExperienceSection from "./sections/experience/ExperienceSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <header className="flex h-[75vh] w-full items-center justify-center bg-shadow box-border">
        <div className="hero flex items-center gap-10">
          <div className="w-[16px] h-[262px] bg-lilac"></div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-grotesk text-5xl text-ghost">
                Karalynn Jones
              </h1>
              <h2 className="font-cabin text-3xl text-ghost">
                UI/UX Developer
              </h2>
              <p className="font-cabin text-lg text-lilac">
                I blend functionality and form to create enjoyable things for
                the web.
              </p>
            </div>
            <div className="flex flex-row gap-2 ">
              <AnchorLink href="https://github.com/KaralynnJ">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </AnchorLink>
              <AnchorLink href="https://www.linkedin.com/in/karalynnmjones/">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </AnchorLink>
              <AnchorLink href="/Karalynn Jones Resume.pdf">
                <MaterialIcon name="article_person" fill={1} opticalSize={26} />
              </AnchorLink>
            </div>
          </div>
        </div>
      </header>
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
