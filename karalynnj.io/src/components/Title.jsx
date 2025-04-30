import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Chip, Grid, Link, Stack, Typography } from "@mui/joy";

const Title = () => {
  return (
    <div>
      <div class="parallax">
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
      <div className="break" />
      <div class="about"></div>
      <div className="content">
        <Grid container>
          <Grid md={6}>
            <Stack direction={"column"} spacing={"1rem"}>
              <Box className="card">
                <Typography level={"h4"}>Hi, I'm</Typography>
                <Typography level={"h1"}>Karalynn Jones</Typography>
                <Typography level={"h3"}>Developer & Designer</Typography>
                <Typography level={"body-lg"}>
                  I make intuitive and beautiful applications for the web.
                </Typography>
                <Typography>-About</Typography>
                <Typography>-Experience</Typography>
                <Typography>-Projects</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid md={6}>
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
                mobile and web interfaces and develop front-end applications. I
                am designing and creating our new e-commerce based website using
                Hilla, React and Material UI, focusing on leveraging existing
                standards for shopping based sites. I am also modernizing the
                design of Ziiware's mobile application to focus on user
                experience and performance.
              </Typography>
              <Typography>
                In the past I've been able to work on a variety of projects,
                including a dashboarding app for industrial equipment, a web app
                for managing a fleet of vehicles, and a mobile app for asset
                tracking for construction projects. I'm always looking for new
                challenges and opportunities to learn and grow as a developer,
                on a team that prioritizes group success and development.
              </Typography>
              <Typography>
                When I'm not coding, I enjoy going for longs walks with my dog,
                watching true crime with my husband, drawing on my Cintiq or
                playing and modding video games.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Stack>
          <Typography level={"title-md"}>
            <Link href="https://www.ziiware.com/ziizii-mobile-ordering">
              ZZ Mobile Ordering
            </Link>
          </Typography>
          <Typography>
            Design new screens focused on performance, experience and modern UI.
            Work closely with cross-functional teams, including developers and
            sales representatives, to solve customer pain points and improve the
            design.
          </Typography>
          <Stack direction={"row"}>
            <Chip>Figma</Chip>
          </Stack>

          <Typography level={"title-md"}>ZZ Web Ordering</Typography>
          <Typography>
            Design, build and ship a new Shopify-esque storefront website that
            supports owner customizations. Lead development from scratch,
            delivering a modern, modular interface with flexible,
            component-driven styling and custom theming.
          </Typography>
          <Stack direction={"row"}>
            <Chip>Typescript</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>HTML & CSS</Chip>
            <Chip>Material UI</Chip>
            <Chip>Figma</Chip>
          </Stack>
          <Typography level={"title-md"}>
            <Link href="https://ats-service.com/illuminate-manufacturing-intelligence">
              Illuminate MI
            </Link>
          </Typography>
          <Typography>
            Modernize an internal dashboarding application for industrial
            equipment. Lead the front end effort to upgrade the tech stack to be
            scalable and maintainable. Work closely with the back end teams to
            ensure feature parity between versions and repay technical debt.
          </Typography>
          <Stack direction={"row"}>
            <Chip>Typescript</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>Kendo UI</Chip>
            <Chip>HTML & CSS</Chip>
            <Chip>Figma</Chip>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Title;
