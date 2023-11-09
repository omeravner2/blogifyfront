import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import { List, ListItem, Stack } from '@mui/material';
import Post from "./Post"
import Icon from '@mdi/react';
import { mdilHome, mdilSettings, mdilPlusBox  } from '@mdi/light-js';

export default function main() {

  const theme = createTheme({
    palette: {
      navbar: {
        main: '#eeeeee',
      },
    },
  });

  return (
    <>
    <div>
      <ThemeProvider theme={theme}>
        <AppBar sx={{height:"50px", display:'flex', justifyContent:"center", bgcolor: theme.palette.navbar.main}}>
            <Toolbar sx={{paddingLeft:"10%", paddingRight:"10%"}}>
              <Box  sx={{
              height: "45px",
              paddingLeft:"16%",
              }}
              component="img"
              alt="Your logo"
              src="/images/logo4.png"
              />
              <Typography component='div' sx={{flexGrow:1}}></Typography>
              <Stack direction='row' paddingRight="16%">
                <IconButton ><Icon  path={mdilHome} size={1} /></IconButton>
                <IconButton><Icon path={mdilPlusBox} size={1}/></IconButton>
                <IconButton ><Icon path={mdilSettings} size={1} /></IconButton>
                <IconButton>
                  <Avatar alt="profilepic" src="/images/avatar.png" />
                </IconButton>
              </Stack>
            </Toolbar>
          </AppBar>
          <Toolbar />
      </ThemeProvider>  
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <List sx={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
          <ListItem><Post /></ListItem>
          <ListItem><Post /></ListItem>
          <ListItem><Post /></ListItem>
      </List>
    </div>

    </>
  )
}
