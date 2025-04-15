import { CssVarsProvider, Stack } from "@mui/joy";
import "./App.scss";
import Title from "./components/Title";

function App() {
  return (
    <CssVarsProvider>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Title />
      </Stack>
    </CssVarsProvider>
  );
}

export default App;
