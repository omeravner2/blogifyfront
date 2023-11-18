import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icon from "@mdi/react";
import { mdilLock } from "@mdi/light-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = createTheme({
    palette: {
      logocolor: {
        main: "#4069a1",
      },
      logobgcolor: {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/members/api/login",
        credentials
      );
      alert(response.data.user.id);
      localStorage.setItem("userid", JSON.stringify(response.data.user.id));
      navigate("/mainpage");
      // Handle success message
    } catch (error) {
      alert("Login failed:" + error.response.status); // Handle error message
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          bgcolor: theme.palette.logobgcolor.main,
          height: "400px",
          borderRadius: "8%",
        }}
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ mt: 4, mb: 1, bgcolor: theme.palette.logocolor.main }}>
            <Icon path={mdilLock} size={1} />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              autoFocus
            />
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              size="small"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              onClick={handleLogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: theme.palette.logocolor.main }}
            >
              <Typography fontSize="15px">Sign In</Typography>
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  href="/register"
                  variant="body2"
                  color={theme.palette.logocolor.main}
                >
                  <Typography>Don't have an account? Sign Up</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
