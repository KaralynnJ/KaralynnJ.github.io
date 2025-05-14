import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Link, Stack, Typography } from "@mui/joy";
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
              <Box>
                <Typography>
                  I'm a software engineer with a passion for creating beautiful
                  and functional web applications. I enjoy making beautiful and
                  useful applications come to life. Whether it's implementing an
                  existing design or creating a new one, I love the challenge of
                  turning ideas into reality. I believe that things can be
                  beautiful and funcitonal at the same time.
                </Typography>
                <Typography>
                  Currently I'm a UI/UX Specialist at Ziiware, where I design
                  mobile and web interfaces and develop front-end applications.
                  I am designing and creating our new e-commerce based website
                  using Hilla, React and Material UI, focusing on leveraging
                  existing standards for shopping based sites. I am also
                  modernizing the design of Ziiware's mobile application to
                  focus on user experience and performance.
                </Typography>
                <Typography>
                  In the past I've been able to work on a variety of projects,
                  including a dashboarding app for industrial equipment, a web
                  app for managing a fleet of vehicles, and a mobile app for
                  asset tracking for construction projects. I'm always looking
                  for new challenges and opportunities to learn and grow as a
                  developer, on a team that prioritizes group success and
                  development.
                </Typography>
                <Typography>
                  When I'm not coding, I enjoy going for longs walks with my
                  dog, watching true crime with my husband, drawing on my Cintiq
                  or playing and modding video games.
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
