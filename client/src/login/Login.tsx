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

export const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [formValidated, setFormValidated] = useState<{
    [key: string]: boolean;
  }>({
    username: true,
    password: true,
  });
  const navigate = useNavigate();

  const navigateToCreateAccount = () => {
    navigate("/create-account");
    console.log(username, password);
  };

  const validateFormFields = () => {
    if (username && password) {
      setFormValidated({
        username: true,
        password: true,
      });
      return true;
    }

    setFormValidated({
      username: typeof username === "string" && username.length > 0,
      password: typeof password === "string" && password.length > 0,
    });
    return false;
  };

  const handleSubmit = () => {
    if (validateFormFields()) {
      // verify login credentials return successfully from db after fetch request
      navigate("/home");
    }
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
            error={!formValidated.username}
          />
          <STextField
            required
            type="password"
            id="password"
            label="Password"
            onChange={(e) => setPassword(e?.target?.value)}
            error={!formValidated.password}
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
          <SButton variant="contained" onClick={handleSubmit}>
            Login
          </SButton>
          <SButton variant="contained" onClick={navigateToCreateAccount}>
            Create Account
          </SButton>
        </Box>
        {(!formValidated.username || !formValidated.password) && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            Username and password are required
          </Typography>
        )}
      </SLoginRightContainer>
    </SLoginContainer>
  );
};
