import * as React from "react";

import {
    Box,
    Card,
    CardActions,
    CardContent,
    Typography,
    Link,
} from "@mui/material/";

export const ProjectCard = ({ project }) => {
    // console.log(project.techno[2]);
    return (
        <Card
            sx={{
                "&:hover": {
                    transform: "translateY(-10px)",
                },
                transition: "transform 500ms",
                background: "rgba(0, 0, 0, .3)",
                color: "inherit",
                minWidth: 280,
                maxWidth: 400,
                m: 2,
                p: 2,
                // opacity: 0.6,
            }}
        >
            <i
                className="fa-regular fa-folder-open folder"
                style={{ color: "#f1d64f", position: "absolute" }}
            ></i>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Link
                    href={project.projectLink}
                    sx={{ textDecoration: "none" }}
                >
                    <i
                        style={{
                            fontSize: "1rem",
                            color: "white",
                            margin: "5px",
                            // justifySelf: "flex-end",
                        }}
                        className="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                </Link>
                <Link href={project.githubLink} sx={{ textDecoration: "none" }}>
                    <i
                        style={{
                            fontSize: "1rem",
                            color: "white",
                            margin: "5px",
                            justifySelf: "self-end",
                        }}
                        className="fa-brands fa-github"
                    ></i>
                </Link>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {project.name}
                </Typography>
                <Typography>{project.snippet}</Typography>
            </CardContent>

            <Box sx={{ display: "flex" }}>
                {project.techno &&
                    project.techno.map((tec, i) => {
                        return (
                            <Box key={i} sx={{ p: 2, color: "#f1d64f" }}>
                                {tec}
                            </Box>
                        );
                    })}
            </Box>
        </Card>
    );
};
