import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand variant="light">
        <Link style={{ color: "white" }} to="/">
          C😱ntact App
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default AppNavBar;
