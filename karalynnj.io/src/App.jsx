import { CssVarsProvider, Stack } from "@mui/joy";
import "./App.scss";
import Main from "./sections/Main";

function App() {
  return (
    <CssVarsProvider>
      <Main />
    </CssVarsProvider>
  );
}

export default App;
