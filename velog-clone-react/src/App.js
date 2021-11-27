import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
