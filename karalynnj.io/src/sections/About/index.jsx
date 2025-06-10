import { Stack, Typography } from "@mui/joy";
import "./About.scss";

const About = () => {
  return (
    <div className="parallax parallax-about">
      <div className="about">
        <div className="neon">
          <div className="about-content">
            <Stack direction={"column"} spacing={2}>
              <Typography>
                Hi, I'm Karalynn. I'm a developer and designer who cares a lot
                about thoughtful interfaces and clean, maintainable code. I work
                primarily in React, focusing on modern, accessible UIs with
                strong visuals. I love projects that bridge form and function...
                whether it's redesigning a legacy app or building a portfolio
                site with a synthwave twist.
              </Typography>
              <Typography>
                Right now, I'm a UI/UX developer at Ziiware, where I design and
                develop user interfaces for both mobile and the web. I enjoy
                being able to creatively solve problems and see my ideas come to
                life.
              </Typography>
              <Typography>
                My love of computers started as soon as I could reach the
                keyboard — literally. Ask me about it sometime, it's a funny
                story. When I'm not coding, I enjoy playing video games, drawing
                on my Cintiq and spending time with my husband and our dog.
              </Typography>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
