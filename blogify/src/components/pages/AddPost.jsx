import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import {
  Button,
  TextField,
  Typography,
  DialogContent,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "@mdi/react";
import { mdilLink } from "@mdi/light-js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

export default function AddPost(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClose = () => {
    props.setadd(false);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", localStorage.getItem("userid"));
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blogs/api/post/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload(false);
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
        main: "#117A65",
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
    <>
      <ThemeProvider theme={theme}>
        <Dialog open={props.opendialog} maxWidth="md" fullWidth>
          <DialogTitle
            fontSize="16px"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>Create new post</Typography>
            <IconButton sx={{ ml: "auto" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2} margin={2}>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                variant="standard"
                label="Title"
                InputLabelProps={{ style: { fontSize: 14 } }}
                size="small"
                style={{ width: 300 }}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                variant="outlined"
                label="Enter text here :)"
                InputLabelProps={{ style: { fontSize: 14 } }}
                size="small"
                rows="5"
                multiline
                onChange={(e) => setContent(e.target.value)}
              ></TextField>
            </Stack>
            <Button
              component="label"
              sx={{ marginLeft: 2, color: theme.palette.darks.dark }}
              startIcon={<Icon path={mdilLink} size={1} />}
            >
              Add Photo
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Button>
            <Typography fontSize={"14px"} sx={{ marginLeft: 2 }}>
              {selectedFile ? selectedFile.name : null}
            </Typography>
            <Typography fontSize={"14px"} sx={{ marginLeft: 2 }}>
              {selectedFile ? selectedFile.url : null}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.publishbtn.main,
                borderColor: theme.palette.publishbtn.main,
              }}
              onClick={handlesubmit}
            >
              Publish
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
