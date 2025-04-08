"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { signInWithPopup, auth, provider } from "../firebase";

const Navbar = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in successfully!");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Failed to sign in");
    }
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          NoteNest
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoogleSignIn}
            sx={{ borderRadius: 8 }}
          >
            Sign Up with Google
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
