import { Button, Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Landing() {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Typography variant="h3" align="center" mt={7} gutterBottom>
        {" "}
        {!toggle ? "Commerce Project Login" : "Create Account"}{" "}
      </Typography>
      {toggle && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setToggle(false)}> back to Login page</Button>
        </Box>
      )}
      {!toggle ? (
        <Login setToggle={setToggle} toggle={toggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </Container>
  );
}

export default Landing;
