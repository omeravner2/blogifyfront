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

export default function Comments(props) {
  return <Dialog open={props.opendialog}>hello world</Dialog>;
}
