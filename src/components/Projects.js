import React from "react";
import { Typography, Box } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { repoData } from "../data/repoData";
export const Projects = ({ project }) => {
    return (
        <div className="container projects" id="projects">
            <Typography component="div" variant="h6">
                Projects____
            </Typography>
            <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
                {repoData.map((project, i) => {
                    return <ProjectCard project={project} key={i} />;
                })}
            </Box>
        </div>
    );
};
