import { Box } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import {
  Accessibility,
  Explore,
  Info,
  ListOutlined,
  LocalActivity,
  Place,
} from "@mui/icons-material";

function Menu() {
  return (
    <Box mt={5} flex={1} p={3} ml={2}>
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AirplanemodeActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Plan your Trip" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListOutlined />
            </ListItemIcon>
            <ListItemText primary="Things Todo" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Accessibility />
            </ListItemIcon>
            <ListItemText primary="Facts" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <ListItemText primary="Place" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalActivity />
            </ListItemIcon>
            <ListItemText primary="Tickets" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}

export default Menu;
