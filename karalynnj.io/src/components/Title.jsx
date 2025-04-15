import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Chip, Grid, Link, Stack, Typography } from "@mui/joy";

const Title = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid md={6}>
          <Stack direction={"column"}>
            <Box>
              <Typography level={"h3"}>Hi, I'm Karalynn Jones</Typography>
              <Typography level={"h4"}>I'm a Developer & Designer</Typography>
            </Box>
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
            <Box>
              <Typography variant={"h2"}>Skills</Typography>
              <Typography variant={"h3"}>Programming Languages</Typography>
              <Chip color="primary">React</Chip>
              <Chip color="primary">Javascript</Chip>
              <Chip color="primary">Typescript</Chip>
              <Chip color="primary">HTML</Chip>
              <Chip color="primary">CSS</Chip>
              <Chip color="primary">SASS</Chip>
              <Chip color="primary">SQL</Chip>
              <Chip color="primary">C#</Chip>
              <Typography variant={"h3"}>Libraries & Frameworks</Typography>
              <Chip color="primary">React</Chip>
              <Chip color="primary">Redux</Chip>
              <Chip color="primary">Next.js</Chip>
              <Chip color="primary">AngularJS</Chip>
              <Chip color="primary">Jest</Chip>
              <Chip color="primary">Vite</Chip>
              <Chip color="primary">React Testing Library</Chip>
              <Chip color="primary">Marterial UI</Chip>
              <Chip color="primary">Bootstrap</Chip>
              <Chip color="primary">Tailwind</Chip>
              <Chip color="primary">REST APIs</Chip>
              <Typography variant={"h3"}>Tools & Platforms</Typography>
              <Chip color="primary">Git</Chip>
              <Chip color="primary">Github</Chip>
              <Chip color="primary">Figma</Chip>
              <Chip color="primary">JIRA</Chip>
              <Chip color="primary">Firebase</Chip>
            </Box>
          </Stack>
        </Grid>
        <Grid md={6}>
          <Box>
            <Typography>
              I'm a software engineer with a passion for creating beautiful and
              functional web applications. I enjoy making beautiful and useful
              applications come to life. Whether it's implementing an existing
              design or creating a new one, I love the challenge of turning
              ideas into reality. I believe that things can be beautiful and
              funcitonal at the same time.
            </Typography>
            <Typography>
              Currently I'm a UI/UX Specialist at Ziiware, where I design mobile
              and web interfaces and develop front-end applications. I am
              designing and creating our new e-commerce based website using
              Hilla, React and Material UI, focusing on leveraging existing
              standards for shopping based sites. I am also modernizing the
              design of Ziiware's mobile application to focus on user experience
              and performance.
            </Typography>
            <Typography>
              In the past I've been able to work on a variety of projects,
              including a dashboarding app for industrial equipment, a web app
              for managing a fleet of vehicles, and a mobile app for asset
              tracking for construction projects. I'm always looking for new
              challenges and opportunities to learn and grow as a developer, on
              a team that prioritizes group success and development.
            </Typography>
            <Typography>
              When I'm not coding, I enjoy going for longs walks with my dog,
              watching true crime with my husband, drawing on my Cintiq or
              playing and modding video games.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Stack></Stack>
      <Stack>
        <Box>
          <Typography variant={"h2"}>2024-Present UI/UX Specialist</Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Title;
