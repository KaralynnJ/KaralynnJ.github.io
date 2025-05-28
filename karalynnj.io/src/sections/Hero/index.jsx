import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Stack, Typography } from "@mui/joy";
import React from "react";
import "./Hero.scss";
import Nav from "../Nav";

const Hero = () => {
  return (
    <div className="parallax parallax-hero">
      <div className="hero">
        <Nav />
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
