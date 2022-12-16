import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box
      className="container"
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
      }}
    >
      <Typography variant="h6" component="div">
        Hello there, I'm
      </Typography>
      <Typography variant="h1" component="div">
        David Siddle
      </Typography>
      <Typography variant="p" component="div">
        Junior Full-Stack Developer | Biltong Maker | Ironman Athelete
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{ maxWidth: 800, m: "0 auto" }}
      >
        I'm a Full-Stack developer based in London , specializing in prototyping
        MVP and designing websites, applications, and everything in between. If
        i'm not coding you can catch me around Hyde Park running, cycling or
        swimming. No specific order
      </Typography>
    </Box>
  );
};
