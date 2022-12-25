import React from "react";
import { Link } from "@mui/material";

export const Left = () => {
  return (
    <div className="left" style={{ zIndex: "1000" }}>
      <Link
        href="https://github.com/siddav83"
        el="noopener"
        target="_blank"
        sx={{
          "&:hover": {
            transform: "translateY(-5px)",
          },
          transition: "transform 500ms",
          textDecoration: "none",
        }}
      >
        <i
          style={{ color: "white" }}
          className="fa-brands fa-github left-icon"
        ></i>
      </Link>
      <Link
        el="noopener"
        target="_blank"
        href="https://www.instagram.com/sons_of_a_butchers/"
        sx={{
          "&:hover": {
            transform: "translateY(-5px)",
          },
          transition: "transform 500ms",
          textDecoration: "none",
        }}
      >
        <i
          style={{ color: "white" }}
          className="fa-brands fa-instagram left-icon"
        ></i>
      </Link>
      <Link
        el="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/siddav83/"
        sx={{
          "&:hover": {
            transform: "translateY(-5px)",
          },
          transition: "transform 500ms",
          textDecoration: "none",
        }}
      >
        <i
          style={{ color: "white" }}
          className="fa-brands fa-linkedin left-icon"
        ></i>
      </Link>
      <Link
        el="noopener"
        target="_blank"
        href="https://twitter.com/daveydawie"
        sx={{
          "&:hover": {
            transform: "translateY(-5px)",
          },
          transition: "transform 500ms",
          textDecoration: "none",
        }}
      >
        <i
          style={{ color: "white" }}
          className="fa-brands fa-twitter left-icon"
        ></i>
      </Link>
      <Link
        el="noopener"
        target="_blank"
        href="https://dev.to/siddav83"
        sx={{
          "&:hover": {
            transform: "translateY(-5px)",
          },
          transition: "transform 500ms",
          textDecoration: "none",
        }}
      >
        <i
          style={{ color: "white" }}
          className="fa-brands fa-dev left-icon"
        ></i>
      </Link>
    </div>
  );
};
