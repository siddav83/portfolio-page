import React from "react";
import { Box, Link } from "@mui/material";

const mailtoHref =
    "mailto:siddav83@gmail.com?subject=SendMail&body=Description";

export const Right = () => {
    return (
        <div className="right">
            <Box
                component="div"
                className="right-icon"
                sx={{
                    pl: "15rem",
                    pt: 15,

                    fontSize: "1rem",
                    letterSpacing: "3px",
                    color: "white",
                    transform: "rotate(90deg)",
                }}
            >
                <a href={mailtoHref} className="btn btn-danger">
                    siddav83@gmail.com
                </a>
            </Box>
        </div>
    );
};
