import { Button } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "red", marginBottom: "10px" }}>404</h1>
      <h3>Page Not Found , Try in another Universe</h3>
      <Button
        style={{ marginTop: "10px" }}
        size="large"
        variant="contained"
        color="primary"
        href="/"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;