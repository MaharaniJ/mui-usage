import { Box } from "@mui/material";
import React from "react";
import TourCard from "./Card";

function Main() {
  return (
    <Box flex={2} paddingTop={3}>
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
    </Box>
  );
}

export default Main;
