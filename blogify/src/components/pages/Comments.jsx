import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

import {
  Button,
  FormControl,
  TextField,
  Typography,
  Paper,
  DialogContent,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "@mdi/react";
import { mdilPlus } from "@mdi/light-js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [usercomment, setUserComment] = useState("");

  const fetchdata = async () => {
    return fetch(
      `http://127.0.0.1:8000/blogs/api/post/${props.postid}/comments/`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((d) => setComments(d));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleclosecomments = () => {
    props.setopendialog(false);
  };

  const submitcomment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("body", usercomment);
    formData.append("post", props.postid);
    formData.append("author", localStorage.getItem("userid"));
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blogs/api/comment/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setComments([...comments, response.data]);
      setUserComment("");
      // Handle success message
    } catch (error) {
      console.error(error.response.status); // Handle error message
    }
  };

  const theme = createTheme({
    palette: {
      profilecard: {
        main: "#eeeeee",
      },
      editsettings: {
        main: "#eeeeee",
        dark: "black",
      },
      darks: {
        dark: "black",
      },
      publishbtn: {
        main: "black",
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
      <Dialog open={props.opendialog} maxWidth="md" fullWidth>
        <DialogTitle
          fontSize="16px"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography>Comments</Typography>
          <IconButton sx={{ ml: "auto" }} onClick={handleclosecomments}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {comments?.map((comment) => (
              <ListItem>
                <Typography fontWeight="bold">
                  @{comment.author_name}:&nbsp;
                </Typography>
                <Typography>{comment.body}</Typography>
              </ListItem>
            ))}
          </List>{" "}
          <Stack spacing={2} margin={2}>
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              variant="outlined"
              label="Enter text here :)"
              InputLabelProps={{ style: { fontSize: 14 } }}
              size="small"
              rows="2"
              multiline
              value={usercomment}
              defaultValue={usercomment}
              onChange={(e) => setUserComment(e.target.value)}
            ></TextField>
          </Stack>
          <Button
            onClick={submitcomment}
            component="label"
            variant="outlined"
            sx={{
              marginLeft: 2,
              color: theme.palette.darks.dark,
              borderColor: theme.palette.publishbtn.main,
            }}
          >
            Post
          </Button>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
