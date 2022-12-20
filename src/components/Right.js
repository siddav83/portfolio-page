import React from "react";
import { Box } from "@mui/material";

const mailtoHref =
    "mailto:siddav83@gmail.com?subject=SendMail&body=Description";

export const Right = () => {
    return (
        <div className="right">
            <Box
                component="div"
                className="right-icon"
                sx={{
                    "&:hover": {
                        fontWeight: "700",
                    },
                    transition: "transform 500ms",
                    pl: "15rem",
                    pt: 15,
                    fontSize: "0.9rem",
                    letterSpacing: "3px",
                    color: "white",
                    transform: "rotate(90deg)",
                }}
            >
                <a
                    href={mailtoHref}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    siddav83@gmail.com
                </a>
            </Box>
        </div>
    );
};
