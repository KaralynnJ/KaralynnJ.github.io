import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

const projectList = [
  {
    title: "HyperStore",
    description: "Custom storefront platform for small businesses.",
    stack: "React, Tailwind, Shopify API",
    link: "https://example.com/hyperstore",
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
  let steps = 0;

  useEffect(() => {
    // Boot sequence timings
    const sequence = [
      800, // After 1s, move to stage 1
      1000, // stage 2
      4000, // stage 3 (2 full dot animations)
    ];

    const timer = setInterval(() => {
      if (steps === 3) {
        clearInterval(timer);
        return;
      }
      if (steps < sequence.length) {
        setBootStage(steps);
        steps++;
      } else {
        clearInterval(timer); // Finished the boot sequence
      }
    }, sequence[steps]);

    return () => clearInterval(timer);
  }, [steps]);

  useEffect(() => {
    // Loading dots animation logic
    if (bootStage === 2) {
      let dots = "";
      let stepCount = 0;

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

  return (
    <div className="project-terminal">
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

          {projectList.map(
            (proj, idx) =>
              idx < visibleProjectCount && (
                <div key={idx}>
                  {selectedIndex === idx ? (
                    <ProjectCard {...proj} />
                  ) : (
                    <div
                      className="terminal-line project-select"
                      onClick={() => setSelectedIndex(idx)}
                    >
                      <span className="prompt">&gt; </span>
                      <span className="clickable-title">
                        View <span className="project-title">{proj.title}</span>
                      </span>
                    </div>
                  )}
                </div>
              )
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
