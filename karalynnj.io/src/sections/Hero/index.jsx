import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Stack, Typography } from "@mui/joy";
import React from "react";

const Hero = () => {
  return (
    <div className="parallax parallax-hero">
      <div className="nav">
        <Stack direction={"row"} spacing={"1rem"}>
          <Typography>
            <a
              href="/public/Jones Karalynn Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </Typography>
          <Typography>
            <Link href="https://github.com/KaralynnJ" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Typography>
          <Typography>
            <Link
              href="https://ca.linkedin.com/in/karalynnmjones"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </Typography>
        </Stack>
      </div>
      <div className="hero">
        <Stack>
          <Typography level={"h1"} data-text="KARALYNN JONES">
            KARALYNN JONES
          </Typography>
          <Typography level={"h3"}>Developer + Designer</Typography>
        </Stack>
      </div>
    </div>
  );
};

export default Hero;
