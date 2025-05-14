import { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

const projectList = [
  {
    title: "IlluminateMI",
    description:
      "Took a legacy app that was running on an outdated, hard-to-maintain codebase and helped bring it into the modern age. " +
      "I led frontend development, redesigned the UI, and worked closely with the team to move the app toward a microservice architecture. " +
      "We updated the tech stack, improved developer workflows, and made the app much easier to maintain and extend.",
    role: "Lead Frontend Developer and Designer",
    stack: "React, Kendo UI, C#, MSSQL, Figma",
    link: "https://illuminatemi.com",
  },
  {
    title: "ZZ Web Ordering",
    description: [
      "Started with a wholesale ordering tool originally built for inventory management and reimagined it as a modern B2B e-commerce platform. " +
        "I’ve been handling both the frontend development and the design, focusing on usability, performance, and bringing the interface up to date " +
        "with current UX standards. I'm leveraging Hilla and Material UI to quickly build out a robust interface.",
    ],
    role: "Lead Frontend Developer and Designer",
    stack: "React, Material UI, Hilla, Java, Spring Boot, MariaDB",
    link: "https://www.ziiware.com",
  },
  {
    title: "Nightrider",
    description:
      "I built this site to showcase my work in a style that reflects both my personality and my background. " +
      "The synthwave theme is a nod to the old-school computers I grew up with and my lifelong interest in tech. " +
      "I designed and developed the site from scratch, aiming for a unique, nostalgic feel while still keeping things clean, clear, and professional.",
    role: "Frontend Developer and Designer",
    stack: "React, Joy UI, Vite",
    link: "https://karalynnj.github.io/",
  },
  {
    title: "ZZ Mobile Ordering",
    description:
      "I focused on design for this B2B mobile app, which had to serve two very different user groups with a lot of dense information. " +
      "The challenge was to create clean, intuitive layouts that still handled the complexity. There was a lot of iteration; testing ideas, refining them, " +
      "and finding the right balance between form and function within tight technical limits.",
    role: "Designer",
    stack: "Figma, Flutter, Firebase",
    link: "https://www.ziiware.com/ziizii-mobile-ordering",
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [bootStage, setBootStage] = useState(0);
  const [loadingDots, setLoadingDots] = useState("");
  const [visibleProjectCount, setVisibleProjectCount] = useState(0);
  const [viewMode, setViewMode] = useState("list"); // "list" | "detail"
  const [visibleDetailLineCount, setVisibleDetailLineCount] = useState(0);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [steps, setSteps] = useState(-1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      // Boot sequence timings
      const sequence = [
        800, // After 1s, move to stage 1
        800, // stage 2
        800, // stage 3 (2 full dot animations)
      ];

      const timer = setInterval(() => {
        if (steps === 3) {
          clearInterval(timer);
          return;
        }
        if (steps < sequence.length) {
          setBootStage(steps);
          setSteps(steps + 1);
        } else {
          clearInterval(timer); // Finished the boot sequence
        }
      }, sequence[steps]);

      return () => clearInterval(timer);
    }
  }, [steps, inView]);

  useEffect(() => {
    // Loading dots animation logic
    if (bootStage === 2) {
      let dots = "";
      let stepCount = 0;
      setHasAnimated(true); // Mark as animated to prevent re-triggering

      const dotInterval = setInterval(() => {
        dots = dots.length >= 3 ? "" : dots + ".";
        setLoadingDots(dots);
        stepCount++;

        // Two full cycles of "..."
        if (stepCount >= 7) {
          clearInterval(dotInterval);
          setTimeout(() => setBootStage(3), 200); // Slight delay before final message
        }
      }, 200); // Interval for dot animation

      return () => clearInterval(dotInterval); // Clean up on exit
    }

    if (bootStage === 3) {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setVisibleProjectCount(index);
        if (index >= projectList.length) clearInterval(interval);
      }, 300); // Adjust delay here (ms per project line)
    }
  }, [bootStage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== "list") return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedOptionIndex((prev) => (prev + 1) % visibleProjectCount);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedOptionIndex((prev) =>
          prev === 0 ? visibleProjectCount - 1 : prev - 1
        );
      } else if (e.key === "Enter") {
        setSelectedIndex(selectedOptionIndex);
        setViewMode("detail");
        setVisibleDetailLineCount(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOptionIndex, visibleProjectCount, viewMode]);

  return (
    <div className="terminal-panel">
      <div ref={containerRef} className="project-terminal">
        {bootStage >= 0 && (
          <span className="terminal-line">
            <span className="program-title">NightRider v1.4 </span> Initialized
          </span>
        )}

        {bootStage >= 1 && (
          <div className="terminal-line">Verifying memory... OK</div>
        )}

        {bootStage === 2 && (
          <div className="terminal-line">Loading{loadingDots}</div>
        )}

        {bootStage >= 3 && (
          <>
            <div className="terminal-line">
              Projects loaded. Select a project to continue.
            </div>
            <div className="terminal-line space"></div>

            {viewMode === "list" &&
              projectList.map(
                (proj, idx) =>
                  idx < visibleProjectCount && (
                    <div key={idx}>
                      <div
                        className={`terminal-line project-select`}
                        onMouseEnter={() => setSelectedOptionIndex(idx)}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setViewMode("detail");
                          setVisibleDetailLineCount(0);
                        }}
                      >
                        {selectedOptionIndex === idx ? (
                          <span className="cursor-line">
                            <span className="cursor">{">"}</span> View{" "}
                            <span className="project-title">{proj.title}</span>
                          </span>
                        ) : (
                          <span className="static-line">
                            &nbsp;&nbsp;View{" "}
                            <span className="project-title">{proj.title}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  )
              )}

            {viewMode === "detail" && selectedIndex !== null && (
              <ProjectCard
                project={projectList[selectedIndex]}
                onBack={() => {
                  setViewMode("list");
                  setVisibleProjectCount(0);
                  setTimeout(() => {
                    let index = 0;
                    const interval = setInterval(() => {
                      index++;
                      setVisibleProjectCount(index);
                      if (index >= projectList.length) clearInterval(interval);
                    }, 300);
                  }, 300);
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
