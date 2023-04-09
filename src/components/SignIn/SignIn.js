import { useState } from "react";

import { setUser, setIsLoggedIn } from "reduxe/auth/authSlice";
import { useDispatch } from "react-redux";

//MUI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  const dispatch = useDispatch();

  const [errorValidationLogin, setErrorValidationLogin] = useState("");
  const [errorValidationPassword, setErrorValidationPassword] = useState("");

  const isValidation = ({ login, password }) => {
    setErrorValidationLogin(login.trim() ? "" : "Fill in this field");
    setErrorValidationPassword(password.trim() ? "" : "Fill in this field");

    return login.trim() && password.trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataLogIn = {
      login: data.get("login"),
      password: data.get("password"),
    };

    if (!isValidation(dataLogIn)) return;

    dispatch(setUser(dataLogIn));
    dispatch(setIsLoggedIn(true));

    console.log(dataLogIn);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            helperText={errorValidationLogin}
            error={!!errorValidationLogin}
            autoFocus
            onChange={() => {
              setErrorValidationLogin("");
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={errorValidationPassword}
            error={!!errorValidationPassword}
            onChange={() => {
              setErrorValidationPassword("");
            }}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
