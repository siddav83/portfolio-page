import React from "react";
import { Box } from "@mui/material";

export const Right = () => {
    return (
        <div className="right">
            <Box
                component="div"
                className="right-icon"
                sx={{
                    pl: "15rem",
                    pt: 15,
                    // pr: 30,
                    fontSize: "1rem",
                    letterSpacing: "3px",
                    color: "#F7E914",
                    transform: "rotate(90deg)",
                }}
            >
                SIDDAV83@GMAIL.COM
            </Box>
        </div>
    );
};
