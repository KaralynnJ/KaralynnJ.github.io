import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Link, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box>
        <Typography variant="h5">Hi, I'm Karalynn Jones</Typography>
        <Typography variant="h6">I'm a Developer & Designer</Typography>
      </Box>
      <Stack direction={"column"}>
        <Typography>
          <FontAwesomeIcon icon={faGithub} />
          <Link href="https://github.com/KaralynnJ" target="_blank">
            KaralynnJ
          </Link>
        </Typography>
        <Typography>
          <FontAwesomeIcon icon={faLinkedin} />
          <Link
            href="https://ca.linkedin.com/in/karalynnmjones"
            target="_blank"
          >
            Karalynn Jones
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
