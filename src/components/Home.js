import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

export const Home = () => {
    const mailtoHref =
        "mailto:siddav83@gmail.com?subject=SendMail&body=Description";
    return (
        <Box
            className="container home"
            id="home"
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                sx={{ alignSelf: "flex-start", color: "#f1d64f" }}
                variant="h6"
                component="div"
            >
                Hello there, I'm
            </Typography>
            <Typography
                sx={{ alignSelf: "flex-start", fontWeight: "900" }}
                variant="h1"
                component="div"
            >
                David Siddle
            </Typography>
            <Typography
                sx={{
                    alignSelf: "flex-start",
                    fontWeight: "900",
                    color: " rgba(156,163,175)",
                }}
                variant="p"
                component="div"
            >
                Junior Full-Stack Developer | Biltong Maker | Ironman Athelete
            </Typography>
            <Typography
                variant="p"
                component="div"
                sx={{ alignSelf: "flex-start", maxWidth: 800, pt: 2 }}
            >
                I'm a Full-Stack developer based in London , specializing in
                prototyping MVP and designing websites and somethings in
                between. If i'm not coding you can catch me around Hyde Park
                running, cycling or swimming. No specific order.
            </Typography>
            <Button
                sx={{
                    "&:hover": {
                        transform: "translateY(-10px)",
                        backgroundColor: "#f1d64f",
                        border: "solid #f1d64f 1px",
                        color: "white",
                    },
                    maxWidth: "9rem",

                    transition: "transform 500ms",
                    mt: 2,
                    border: "solid #f1d64f 1px",
                    fontSize: "inherit",
                    color: "#f1d64f",

                    textTransform: "capitalize",
                }}
            >
                <a
                    href={mailtoHref}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Get in Touch
                </a>
            </Button>
        </Box>
    );
};
