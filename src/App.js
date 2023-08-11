import React from "react";
import Stack from "@mui/material/Stack";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Right from "./components/Right";
import { Box, Container } from "@mui/material";
import Nav from "./components/Nav";

function App() {
  return (
    <Box>
      <Nav />
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Menu />
          <Main />
          <Right />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
