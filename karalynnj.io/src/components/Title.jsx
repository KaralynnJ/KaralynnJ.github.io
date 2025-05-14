import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Stack, Typography } from "@mui/joy";
import Projects from "../components/Projects";

const Title = () => {
  return (
    <div>
      <div className="parallax parallax-hero">
        <div className="nav">
          <Stack direction={"row"} spacing={"1rem"}>
            <Typography>
              <Link>resume</Link>
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
      <div className="break-top" />
      <div className="projects">
        <Stack>
          <Projects />
        </Stack>
      </div>
      <div className="break-bottom" />
      <div class="parallax parallax-about">
        <div className="about">
          <div className="neon">
            <div class="about-content">
              <Stack direction={"column"} spacing={2}>
                <Typography>
                  Hi, I'm Karalynn. I'm a developer and designer who cares a lot
                  about thoughtful interfaces and clean, maintainable code. I
                  work primarily in React, focusing on modern, accessible UIs
                  with strong visuals. I love projects that bridge form and
                  function— whether it's redesigning a legacy app or building a
                  portfolio site with a synthwave twist.
                </Typography>
                <Typography>
                  Right now, I'm a UI/UX developer at Ziiware, where I design
                  and develop user interfaces for both mobile and the web. I
                  enjoy being able to creatively solve problems and see my ideas
                  come to life.
                </Typography>
                <Typography>
                  My love of computers started as soon as I could reach the
                  keyboard — literally. Ask me about it sometime, it's a funny
                  story. When I'm not coding, I enjoy playing video games,
                  drawing on my Cintiq and spending time with my husband and our
                  dog.
                </Typography>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
