import React from "react";
import Typography from "@mui/material/Typography";
import { CardMedia, Box } from "@mui/material";

export default function About() {
    return (
        <div className="container" id="about">
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ maxWidth: "40rem", wordSpacing: "2px" }}>
                    <Typography
                        component="div"
                        variant="h3"
                        sx={{ pb: 2, fontWeight: "800" }}
                    >
                        About Dave
                    </Typography>

                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        Hello! I'm Dave, a full-stack developer from Cape Town,
                        South Africa. I have been living London, UK since 2018.
                        I am eager learner and keeping up to date with the
                        latest technologies. using Javascript and React as my
                        primary coding languages. I am a recent graduate at
                        Futureproof and Le Wagon.
                    </Typography>
                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        I’m passionate about web development and using what I
                        have learnt to help solve problems. Currently upskilling
                        myself in Next.js in order to incorporate SEO into my
                        web base projects and make my webpages more SEO
                        friendly.
                    </Typography>

                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        My goal is to become a well rounded full-stack developer
                        to help build and support start-ups to scale.
                    </Typography>
                    <Typography
                        component="div"
                        variant="p"
                        sx={{ pt: 2, pb: 2, wordSpacing: "0.5px" }}
                    >
                        Here are a few technologies I've been working with
                        recently.
                    </Typography>
                    <Box
                        sx={{
                            width: "30rem",
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <i
                            style={{ fontSize: "2rem", p: "20px" }}
                            className="fa-brands fa-js"
                        ></i>

                        <i
                            style={{ fontSize: "2rem", p: "20px" }}
                            className="fa-brands fa-react"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-node-js"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-solid fa-flask"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-bootstrap"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-git"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-python"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-css3"
                        ></i>

                        <i
                            style={{ fontSize: "2rem" }}
                            className="fa-brands fa-html5"
                        ></i>
                    </Box>
                </Box>

                <CardMedia
                    component="img"
                    sx={{
                        p: 2,
                        m: 2,
                        minWidth: "10rem",
                        minHeight: "15rem",
                        maxWidth: "20rem",
                        maxHeight: "30rem",
                    }}
                    image={require("./images/me.jpg")}
                ></CardMedia>
            </Box>
        </div>
    );
}
