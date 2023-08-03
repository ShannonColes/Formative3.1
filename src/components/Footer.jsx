import React from "react";
import { Globe } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <h1>
        <Link to="/">
          <Globe /> World News
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
