import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const Home = () => {
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
                sx={{ alignSelf: "flex-start" }}
                variant="h6"
                component="div"
            >
                Hello there, I'm
            </Typography>
            <Typography
                sx={{ alignSelf: "flex-start" }}
                variant="h1"
                component="div"
            >
                David Siddle
            </Typography>
            <Typography
                sx={{ alignSelf: "flex-start" }}
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
                prototyping MVP and designing websites, applications, and
                everything in between. If i'm not coding you can catch me around
                Hyde Park running, cycling or swimming. No specific order
            </Typography>
        </Box>
    );
};
