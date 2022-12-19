import React from "react";
import { Link, Button } from "@mui/material";

export const Left = () => {
    return (
        <div className="left" style={{ zIndex: "1000" }}>
            <Link
                href="https://github.com/siddav83"
                sx={{ textDecoration: "none" }}
            >
                <Button size="small">
                    <i
                        style={{ color: "yellow" }}
                        className="fa-brands fa-github left-icon"
                    ></i>
                </Button>
            </Link>
            <Link
                href="https://www.instagram.com/sons_of_a_butchers/"
                sx={{ textDecoration: "none" }}
            >
                <Button size="small">
                    <i
                        style={{ color: "yellow" }}
                        className="fa-brands fa-instagram left-icon"
                    ></i>
                </Button>
            </Link>
            <Link
                href="https://twitter.com/daveydawie"
                sx={{ textDecoration: "none" }}
            >
                <Button size="small">
                    <i
                        style={{ color: "yellow" }}
                        className="fa-brands fa-linkedin left-icon"
                    ></i>
                </Button>
            </Link>
        </div>
    );
};
