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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "@mdi/react";
import { mdilLink } from "@mdi/light-js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AddPost(props) {
  const handleClose = () => {
    props.setadd(false);
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
              ></TextField>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                variant="outlined"
                label="Enter text here :)"
                InputLabelProps={{ style: { fontSize: 14 } }}
                size="small"
                rows="5"
                multiline
              ></TextField>
            </Stack>
            <Button
              sx={{ marginLeft: 2, color: theme.palette.darks.dark }}
              startIcon={<Icon path={mdilLink} size={1} />}
            >
              Add Photo
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.publishbtn.main,
                borderColor: theme.palette.publishbtn.main,
              }}
            >
              Publish
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
