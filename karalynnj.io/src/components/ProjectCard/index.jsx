import React, { useEffect, useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, stack, link }) => {
  const [typedTitle, setTypedTitle] = useState("");
  const [showLines, setShowLines] = useState([false, false, false]);
  const [cursorAtPrompt, setCursorAtPrompt] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeSpeed = 75;

    const typeInterval = setInterval(() => {
      setTypedTitle(title.slice(0, i + 1));
      i++;
      if (i === title.length) {
        clearInterval(typeInterval);

        // Move the cursor to the next prompt line
        setTimeout(() => {
          setCursorAtPrompt(false);
        }, 300);

        // Line-by-line terminal output
        const delays = [800, 550, 550];
        delays.reduce((acc, delay, idx) => {
          setTimeout(() => {
            setShowLines((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }, acc);
          return acc + delay;
        }, 500); // small delay after cursor moves
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, [title]);

  return (
    <div className="card">
      <span className="terminal-line">
        <span className="typed-text">{typedTitle}</span>
        {cursorAtPrompt && <span className="cursor">█</span>}
      </span>

      <div className="terminal-output">
        {showLines[0] && (
          <p>
            <span className="prefix">|</span> {description}
          </p>
        )}
        {showLines[1] && (
          <p>
            <span className="prefix">|</span> Stack: {stack}
          </p>
        )}
        {showLines[2] && (
          <p>
            <span className="prefix">| </span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project ↗
            </a>
          </p>
        )}

        {!cursorAtPrompt && (
          <div className="terminal-line">
            <span className="prompt">&gt; </span>
            <span>&nbsp;</span>
            <span className="cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
