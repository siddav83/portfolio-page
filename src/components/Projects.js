import React from "react";
import { Typography, Box } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { repoData } from "../data/repoData";
// import Grid from "@mui/material/Unstable_Grid2";
import { Scrollbars } from "react-custom-scrollbars-2";

export const Projects = ({ project }) => {
    return (
        <div className="container projects" id="projects">
            <Typography
                component="div"
                variant="h3"
                // fontSize={30}
                fontWeight={800}
            >
                Projects
            </Typography>
            <Typography variant="p" fontSize={15} sx={{ pb: 6 }}>
                Below are the most recent projects I have contributed to. Check
                out my
                <a
                    style={{
                        textDecoration: "none",
                        margin: 5,
                        color: "#f1d64f",
                    }}
                    href="https://github.com/siddav83?tab=repositories"
                >
                    repo
                </a>
                on github for all other projects I have worked on.
            </Typography>
            {/* <Scrollbars style={{ width: 1000, height: 200 }}> */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    pt: 5,
                }}
            >
                {repoData.map((project, i) => {
                    return (
                        <Box xs={4} md={8} key={i}>
                            <ProjectCard project={project} key={i} />
                        </Box>
                    );
                })}
            </Box>
            {/* </Scrollbars> */}
        </div>
    );
};
