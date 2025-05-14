import { CssVarsProvider, Stack } from "@mui/joy";
import "./App.scss";
import Title from "./components/Title";

function App() {
  return (
    <CssVarsProvider>
      <Title />
    </CssVarsProvider>
  );
}

export default App;
