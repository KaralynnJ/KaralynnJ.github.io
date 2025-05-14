import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FormattedEndLine from "../FormattedEndLine";
import FormattedTitleLine from "../FornattedTitleLine";
import { splitIntoLines } from "../utils/utils";
import "./ProjectCard.css";

const ProjectCard = ({ project, onBack }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedBack, setTypedBack] = useState("");
  const [typingBack, setTypingBack] = useState(false);
  const [doneTypingBack, setDoneTypingBack] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const splitLines = splitIntoLines(
    project.description,
    isDesktopOrLaptop ? 100 : 25
  );

  const detailLines = [
    `Opening ${project.title}...`,
    "",
    <FormattedTitleLine
      title={project.title}
      totalLength={isDesktopOrLaptop ? 100 : 25}
    />,
    "",
    ...splitLines,
    "",
    `Role:    ${project.role}`,
    project.stack ? `Stack:   ${project.stack}` : `Tools:   ${project.tools}`,
    `Link:    ${project.link}`,
    "",
    <FormattedEndLine totalLength={isDesktopOrLaptop ? 100 : 25} />,
    "",
    "Type 'back' to return to the project list.",
  ];

  useEffect(() => {
    let index = 1; // First line is shown immediately
    setVisibleLines(1);

    const firstGap = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setVisibleLines(index);

        if (index >= detailLines.length) {
          clearInterval(interval);
          setTimeout(() => setTypingBack(true), 500);
        }
      }, 150); // normal delay for the rest

      // Clean up interval
      return () => clearInterval(interval);
    }, 500); // longer delay after the first line

    // Clean up timeout
    return () => clearTimeout(firstGap);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderLine = (line) => {
    if (isDesktopOrLaptop) {
      return (
        <>
          {line.startsWith("Link: ") ? (
            <>
              Link:{" "}
              <a
                href={line.replace("Link: ", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link"
              >
                {line.replace("Link: ", "")}
              </a>
            </>
          ) : (
            line
          )}
        </>
      );
    } else {
      return (
        <>
          {line.startsWith("Link: ") ? (
            <>
              Link:{" "}
              <a
                href={line.replace("Link: ", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </>
          ) : (
            line
          )}
        </>
      );
    }
  };

  return (
    <>
      {detailLines.slice(0, visibleLines).map((line, i) => {
        const isJSX = typeof line !== "string";

        return (
          <div className="terminal-line" key={i}>
            {isJSX ? line : renderLine(line)}
          </div>
        );
      })}

      <div className="terminal-line space"></div>
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
