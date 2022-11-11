import React from "react";
import Logo from "./airbnb-2-logo-png-transparent.png";
import "./App.css";

export default function Navbar(params) {
  return (
    <nav>
      <img src={Logo} alt="Airbnb-logo" width="60" height="60" />
    </nav>
  );
}
