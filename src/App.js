import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Right from "./components/Right";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Nav from "./components/Nav";

function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: theme,
      typograhpy: {
        fontFamily: "Poppins",
        fontWeightLight: 400,
        fontWeightMedium: 600,
        fontWeightRegular: 500,
        fontWeightBold: 500,
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Nav />
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Menu />
            <Main />
            <Right />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
