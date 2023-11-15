import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Card, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Post from "./Post";
import MainPage from "./MainPage";
import PostsList from "./PostsList";
import { useEffect, useState } from "react";

export default function Profile(props) {
  const [profiledata, setProfileData] = useState(null);

  const fetchdata = async () => {
    let url = null;
    if (props.myprofile) {
      url = "http://127.0.0.1:8000/blogs/api/my-profile";
    }
    return fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((d) => setProfileData(d));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const theme = createTheme({
    palette: {
      profilecard: {
        main: "#eeeeee",
      },
      editsettings: {
        main: "#eeeeee",
        dark: "black",
      },
    },
    typography: {
      fontFamily: ["Poppins"].join(","),
      h3: {
        main: "#4069a1",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{ display: "flex", justifyContent: "center", alignitems: "center" }}
      >
        <Card
          sx={{
            maxWidth: "1000px",
            margin: "auto",
            boxShadow: "none",
            borderBottom: 2,
            borderRadius: "0",
            borderColor: theme.palette.profilecard.main,
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                alt="profilepic"
                src="/images/avatar.png"
                sx={{ width: 110, height: 110 }}
              />
            }
            title={
              <Typography
                variant="h3"
                fontSize="20px"
                fontWeight="fontWeightBold"
              >
                {profiledata?.username}
              </Typography>
            }
            subheader={
              <Typography fontSize="16px">this is the user bio</Typography>
            }
          ></CardHeader>
        </Card>
        <PostsList />
      </div>
    </ThemeProvider>
  );
}
