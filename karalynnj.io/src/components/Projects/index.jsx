import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

const projectList = [
  {
    title: "IlluminateMI",
    description: [
      "Design new screens focused on performance, experience and modern",
      "UI. Work closely with cross-functional teams, including developers",
      "and sales representatives, to solve customer pain points and",
      "improve the design.",
    ],
    role: "Designer and Lead Frontend Developer",
    tools: "Figma",
    link: "https://www.ziiware.com/ziizii-mobile-ordering",
  },
  {
    title: "InventoryTool",
    description: "Internal tool for tracking inventory and restock cycles.",
    stack: "Vue, Node, PostgreSQL",
    link: "https://example.com/inventory",
  },
  {
    title: "AnalyticsDash",
    description: "Data dashboard with live metrics and export features.",
    stack: "Next.js, D3.js, Supabase",
    link: "https://example.com/analytics",
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
          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="program-title"> SynthTerm v1.4 </span>
            Initialized
          </div>
        )}

        {bootStage >= 1 && (
          <div className="terminal-line">
            <span className="prompt">&gt;</span> Verifying memory... OK
          </div>
        )}

        {bootStage === 2 && (
          <div className="terminal-line">
            <span className="prompt">&gt;</span> Loading{loadingDots}
          </div>
        )}

        {bootStage >= 3 && (
          <>
            <div className="terminal-line">
              <span className="prompt">&gt;</span> Projects loaded. Select a
              project to continue.
            </div>

            {viewMode === "list" &&
              projectList.map(
                (proj, idx) =>
                  idx < visibleProjectCount && (
                    <div key={idx}>
                      <div
                        className={`terminal-line project-select ${
                          selectedOptionIndex === idx ? "selected" : ""
                        }`}
                        onMouseEnter={() => setSelectedOptionIndex(idx)}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setViewMode("detail");
                          setVisibleDetailLineCount(0);
                        }}
                      >
                        <span className="prompt">&gt; </span>
                        <span className="clickable-title">
                          View {proj.title}
                        </span>
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
