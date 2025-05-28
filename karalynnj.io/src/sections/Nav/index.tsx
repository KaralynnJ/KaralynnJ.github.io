import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography, Link } from "@mui/joy";
import "./Nav.scss";

const Nav = () => {
  return (
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
  );
};

export default Nav;
