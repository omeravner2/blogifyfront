import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Icon from '@mdi/react';
import { mdilComment, mdilHeart } from '@mdi/light-js';
import Stack from '@mui/material/Stack';




export default function Post() {
    const theme = createTheme({
        palette: {
          postbg: {
            main: '#eeeeee',
          },
        },
        typography:{
            fontFamily: [
                'Nunito',
              ].join(','),
            subtitle2: {
                light: '#7B7D7D', 
            }
        },
      });

  return (
    <ThemeProvider theme={theme}>
        <Card sx={{maxWidth:550, border: 2, borderColor: theme.palette.postbg.main}}>
        <CardHeader sx={{height:"30px"}} avatar={<IconButton sx={{marginLeft:"-10px"}}><Avatar alt="profilepic" src="/images/avatar.png"/></IconButton>} title={<Typography sx={{marginLeft:"-20px"}} variant='h1' fontSize="17px" fontWeight="fontWeightBold">username</Typography>}
        />
        <CardMedia
        sx={{objectFit:'contain'}}
        component="img"
        image="/images/horse.jpg"
        alt="postimage"
        />
        <CardActions disableSpacing>
            <Stack>
                <div>
                    <IconButton><Icon color="black" size="24px" path={mdilHeart}/></IconButton>
                    <IconButton><Icon color="black" size="24px" path={mdilComment}/></IconButton>
                </div>
            <Button><Typography variant="subtitle2" style={{color: "black", marginRight:"20px"}} fontSize="12px" >
            3 likes
            </Typography></Button>
            </Stack>
        </CardActions>
       <CardContent sx={{ margin: 0, padding: 0 , marginLeft:"20px"}}>
        <div>
            <Typography variant="h1" component="div" fontSize={"15px"} fontWeight="fontWeightBold" style={{display: 'inline-block'}}>
                username&nbsp;
            </Typography>
            <Typography variant="body2" fontSize={"15px"} style={{display: 'inline-block'}}>
            post main part
            </Typography>
        </div>
        <Typography variant="subtitle2" style={{color: theme.typography.subtitle2.light}} fontSize="12px" >
            date posted
            </Typography>
      </CardContent>

    </Card>
    </ThemeProvider>
  
  )
}
