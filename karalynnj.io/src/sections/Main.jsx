import { Stack } from "@mui/joy";
import Projects from "./Projects";
import Hero from "./Hero";
import About from "./About";

const Title = () => {
  return (
    <div>
      <Hero />
      <div className="break-top" />
      <div className="projects">
        <Stack>
          <Projects />
        </Stack>
      </div>
      <div className="break-bottom" />
      <About />
    </div>
  );
};

export default Title;
