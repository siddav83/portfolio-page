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
                    // p: 0,
                    // m: 0,
                    justifyContent: "center",
                }}
            >
                <Box sx={{ maxWidth: "40rem", wordSpacing: "2px" }}>
                    <Typography component="div" variant="h4" sx={{ pb: 2 }}>
                        About Dave
                    </Typography>

                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        Hello! I'm Dave, a full-stack developer from Cape Town,
                        South Africa now living in London, UK . I enjoy creating
                        things that live on the internet, whether they be
                        websites, applications, or anything in between. Recent
                        graduate at futureproof.
                    </Typography>
                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        I’m passionate about making the web accessible to
                        everyone and I enjoy solving complex problems using web
                        technologies. I am always eager to learn new things
                        every day and keep up with the new technologies. I work
                        on a wide variety of interesting and meaningful projects
                        on a daily basis
                    </Typography>
                    <Typography
                        component="div"
                        variant="p"
                        sx={{ wordSpacing: "0.5px" }}
                    >
                        My goal is to become a well rounded full-stack developer
                        working build and supporting a start-up.
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
                            // width: "30rem",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-around",
                            // flexWrap: "wrap;",
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
