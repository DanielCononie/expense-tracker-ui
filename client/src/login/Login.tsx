import { TextField, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SLoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  height: "100vh",
  backgroundColor: "#9aedda",
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

// const validateFormFields = () => {}

// const navigateToCreateAccount = () => {}

// const handleSubmit = () => {}

export const Login = () => {
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
          <STextField required id="username" label="Username" />
          <STextField required type="password" id="password" label="Password" />
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
          <Button variant="contained" sx={{ width: "100%", maxWidth: "200px" }}>
            Login
          </Button>
          <Button variant="contained" sx={{ width: "100%", maxWidth: "200px" }}>
            Create Account
          </Button>
        </Box>
      </SLoginRightContainer>
    </SLoginContainer>
  );
};
