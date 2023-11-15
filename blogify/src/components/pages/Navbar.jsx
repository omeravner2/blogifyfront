import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";
import { List, ListItem, Stack } from "@mui/material";
import Post from "./Post";
import Icon from "@mdi/react";
import { mdilHome, mdilSettings, mdilPlusBox } from "@mdi/light-js";
import AddPost from "./AddPost";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openaddpost, setOpenAddPost] = useState(false);

  const handleOpen = () => {
    setOpenAddPost(true);
  };

  const theme = createTheme({
    palette: {
      navbar: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <AppBar
            sx={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              bgcolor: theme.palette.navbar.main,
            }}
          >
            <Toolbar sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <Box
                sx={{
                  height: "45px",
                  paddingLeft: "16%",
                }}
                component="img"
                alt="Your logo"
                src="/images/logo4.png"
              />
              <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
              <Stack direction="row" paddingRight="16%" alignItems="center">
                <Link to="/">
                  <IconButton>
                    <Icon path={mdilHome} size={1} />
                  </IconButton>
                </Link>
                <IconButton onClick={handleOpen}>
                  <Icon path={mdilPlusBox} size={1} />
                </IconButton>
                <Link>
                  <IconButton>
                    <Icon path={mdilSettings} size={1} />
                  </IconButton>
                </Link>
                <Link to="/my-profile">
                  <IconButton>
                    <Avatar alt="profilepic" src="/images/avatar.png" />
                  </IconButton>
                </Link>
              </Stack>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <AddPost opendialog={openaddpost} setadd={setOpenAddPost} />
        </ThemeProvider>
      </div>
    </>
  );
}
