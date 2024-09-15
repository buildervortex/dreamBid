import { useTheme } from "@emotion/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LoginBox = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[100];
  return (
    <>
      <Container component={"main"} maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: backgroundColor,
          }}
        >
          <Typography component={"h1"} variant="h4">
            Login
          </Typography>
          <Box
            component={"form"}
            onSubmit={(e) => handleSubmit(e, email, password)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              id="email"
              name="name"
              autoComplete="email"
              label="Email"
              type="email"
              autoFocus
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.value)}
              required
            ></TextField>
            <TextField
              required
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.value)}
            ></TextField>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginBox;
