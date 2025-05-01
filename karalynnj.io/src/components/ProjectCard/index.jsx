import React, { useEffect, useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, onBack }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedBack, setTypedBack] = useState("");
  const [typingBack, setTypingBack] = useState(false);
  const [doneTypingBack, setDoneTypingBack] = useState(false);

  const detailLines = [
    `Opening ${project.title}...`,
    `Description: ${project.description}`,
    `Stack: ${project.stack}`,
    `Link: ${project.link}`,
    "Type 'back' to return.",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setVisibleLines(index);

      if (index >= detailLines.length) {
        clearInterval(interval);
        setTimeout(() => setTypingBack(true), 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [project]);

  useEffect(() => {
    if (!typingBack) return;

    const backWord = "back";
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTypedBack(backWord.slice(0, i));
      if (i >= backWord.length) {
        clearInterval(typeInterval);
        setDoneTypingBack(true);
      }
    }, 150); // slower typing

    return () => clearInterval(typeInterval);
  }, [typingBack]);

  return (
    <>
      {detailLines.slice(0, visibleLines).map((line, i) => (
        <div className="terminal-line" key={i}>
          <span className="prompt">&gt; </span> {line}
        </div>
      ))}

      {typingBack && (
        <div
          className={`terminal-line project-select clickable`}
          onClick={doneTypingBack ? onBack : undefined}
        >
          <span className="prompt">&gt; </span> {typedBack}
          <span className="cursor-block">█</span>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
