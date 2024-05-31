import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { styled , ThemeProvider} from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { CssBaseline } from "@mui/material";

export default function App({ theme }) {
  const [defaultTheme, setDefaultTheme] = React.useState(true);
  const changeTheme = () => {
    setDefaultTheme((defaultTheme) => !defaultTheme);
  };
  const lightMode = {
    color: "#222",
    background: "#F7F3F0",
  };
  const darkMode = {
    color: "#F7F3F0",
    background: "#222",
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme ? darkMode : lightMode}>
        <button onClick={changeTheme}>
          {defaultTheme ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}
const Wrapper = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.bacground};
  padding: 20px;
`;
