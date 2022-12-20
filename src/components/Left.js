import React from "react";
import { Link } from "@mui/material";

export const Left = () => {
    return (
        <div className="left" style={{ zIndex: "1000" }}>
            <Link
                href="https://github.com/siddav83"
                sx={{ textDecoration: "none" }}
            >
                <i
                    style={{ color: "white" }}
                    className="fa-brands fa-github left-icon"
                ></i>
            </Link>
            <Link
                href="https://www.instagram.com/sons_of_a_butchers/"
                sx={{ textDecoration: "none" }}
            >
                <i
                    style={{ color: "white" }}
                    className="fa-brands fa-instagram left-icon"
                ></i>
            </Link>
            <Link
                href="https://www.linkedin.com/in/siddav83/"
                sx={{ textDecoration: "none" }}
            >
                <i
                    style={{ color: "white" }}
                    className="fa-brands fa-linkedin left-icon"
                ></i>
            </Link>
            <Link
                href="https://twitter.com/daveydawie"
                sx={{ textDecoration: "none" }}
            >
                <i
                    style={{ color: "white" }}
                    className="fa-brands fa-twitter left-icon"
                ></i>
            </Link>
            <Link
                href="https://dev.to/siddav83"
                sx={{ textDecoration: "none" }}
            >
                <i
                    style={{ color: "white" }}
                    className="fa-brands fa-dev left-icon"
                ></i>
            </Link>
        </div>
    );
};
