import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function Nav() {
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h5">Tours</Typography>
        <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={8} color="error">
            <NotificationsActiveIcon color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        </Box>
      </StyleToolbar>
    </AppBar>
  );
}

export default Nav;
