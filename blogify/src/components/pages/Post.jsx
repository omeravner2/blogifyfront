import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, IconButton, List, ListItem, Popover } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { mdilComment, mdilHeart } from "@mdi/light-js";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Comments from "./Comments";

export default function Post(props) {
  const url = `http://127.0.0.1:8000/blogs/api/post/${props.postid}/likes/`;
  const [likes, setLikes] = useState([]);
  const [likespopover, setLikesPopOver] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showcomments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  const format_date = new Date(props.date);

  const showlikes = (event) => {
    setLikesPopOver(true);
    setAnchorEl(event.currentTarget);
  };

  const handlecomments = () => {
    setShowComments(true);
  };

  const handlelike = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/blogs/api/posts/${
          props.postid
        }/toggle_like/${localStorage.getItem("userid")}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      liked ? setLiked(false) : setLiked(true);
    } catch (error) {
      console.error("Error toggling like on the post:", error);
    }
  };

  const closelikespopver = () => setLikesPopOver(false);

  const fetchdata = async () => {
    try {
      const response = fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((d) => setLikes(d));
      if (likes.users_id.includes(localStorage.getItem("userid"))) {
        setLiked(true);
        alert("here");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const theme = createTheme({
    palette: {
      postbg: {
        main: "#eeeeee",
      },
    },
    typography: {
      fontFamily: ["Nunito"].join(","),
      subtitle2: {
        light: "#7B7D7D",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            width: "550px",
            border: 2,
            borderColor: theme.palette.postbg.main,
          }}
        >
          <CardHeader
            sx={{ height: "30px" }}
            avatar={
              <IconButton sx={{ marginLeft: "-10px" }}>
                <Avatar alt="profilepic" src={props?.profile} />
              </IconButton>
            }
            title={
              <Typography
                sx={{ marginLeft: "-20px" }}
                variant="h1"
                fontSize="17px"
                fontWeight="fontWeightBold"
              >
                {props?.username}
              </Typography>
            }
          />
          <CardContent sx={{ marginLeft: "10px" }}>
            <div>
              <Typography
                variant="h1"
                component="div"
                fontSize={"15px"}
                fontWeight="fontWeightBold"
              >
                {props.title}&nbsp;
              </Typography>
              <Typography variant="body2" fontSize={"15px"}>
                {props.content.replace("</p>", "").replace("<p>", "")}
              </Typography>
            </div>
          </CardContent>
          {props.photo ? (
            <CardMedia
              sx={{ objectFit: "contain" }}
              component="img"
              image={props.photo}
              alt="postimage"
            />
          ) : null}
          <CardActions disableSpacing>
            <Stack>
              <div>
                <IconButton onClick={handlelike}>
                  {liked ? (
                    <Icon color="red" size="24px" path={mdiHeart} />
                  ) : (
                    <Icon color="black" size="24px" path={mdilHeart} />
                  )}
                </IconButton>
                <IconButton onClick={handlecomments}>
                  <Icon color="black" size="24px" path={mdilComment} />
                </IconButton>
              </div>
              <Button onClick={showlikes}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black", marginRight: "20px" }}
                  fontSize="12px"
                >
                  {`${props.likes} likes`}
                </Typography>
              </Button>
              <Popover
                open={likespopover}
                onClose={closelikespopver}
                anchorEl={anchorEl}
                sx={{
                  "& .MuiPaper-root": {
                    width: 200,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <List>
                  {likes.usernames?.map((username) => (
                    <ListItem>
                      <Typography variant="p">{username}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Popover>
            </Stack>
          </CardActions>
          <CardContent>
            <Typography
              variant="subtitle2"
              style={{ color: theme.typography.subtitle2.light }}
              fontSize="12px"
            >
              {`${format_date.getUTCHours()}:${
                format_date.getUTCMinutes() < 10
                  ? format_date.getUTCMinutes() + "0"
                  : format_date.getUTCMinutes()
              }`}{" "}
              {format_date.getDate()}
              {"/"}
              {format_date.getMonth() + 1}
              {"/"}
              {format_date.getFullYear()}
            </Typography>
          </CardContent>
        </Card>
        <Comments
          opendialog={showcomments}
          setopendialog={setShowComments}
          postid={props.postid}
        />
      </ThemeProvider>
    </>
  );
}
