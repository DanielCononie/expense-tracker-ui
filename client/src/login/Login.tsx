import { TextField, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SLoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  height: "100vh",
  backgroundColor: "#9aedda",
  margin: 0,
  padding: 0,
}));

const SLoginRightContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "50%",
}));

const SLoginLeftContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  width: "50%",
  height: "100%",
}));

const STextField = styled(TextField)(() => ({
  maxWidth: "500px",
  width: "90%",
}));

const SButton = styled(Button)(() => ({
  maxWidth: "200px",
  width: "100%",
  backgroundColor: "black",
}));

// const validateFormFields = () => {}

// const handleSubmit = () => {}

export const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const navigateToCreateAccount = () => {
    navigate("/create-account");
    console.log(username, password);
  };

  return (
    <SLoginContainer>
      <SLoginLeftContainer>
        <Typography variant="h2" fontFamily={"monospace"}>
          Expenses Tracker
        </Typography>
      </SLoginLeftContainer>
      <SLoginRightContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            alignItems: "center",
          }}
        >
          <STextField
            required
            id="username"
            label="Username"
            onChange={(e) => setUsername(e?.target?.value)}
          />
          <STextField
            required
            type="password"
            id="password"
            label="Password"
            onChange={(e) => setPassword(e?.target?.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            mt: 2,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SButton variant="contained">Login</SButton>
          <SButton variant="contained" onClick={navigateToCreateAccount}>
            Create Account
          </SButton>
        </Box>
      </SLoginRightContainer>
    </SLoginContainer>
  );
};
