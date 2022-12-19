import * as React from "react";

import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
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
                    border: "yellow solid 1px",
                },
                transition: "transform 500ms",
                background: "rgba(0, 0, 0, .3)",
                color: "inherit",
                maxWidth: 380,
                m: 2,
                p: 2,
                // opacity: 0.6,
            }}
        >
            <i
                className="fa-regular fa-folder-open folder"
                style={{ color: "yellow" }}
            ></i>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    href={project.projectLink}
                    sx={{ textDecoration: "none" }}
                >
                    <Button size="small">
                        <i
                            style={{
                                fontSize: "1.4rem",
                                color: "white",
                            }}
                            className="fa-solid fa-arrow-up-right-from-square"
                        ></i>
                    </Button>
                </Link>
                <Link href={project.githubLink} sx={{ textDecoration: "none" }}>
                    <Button size="small">
                        <i
                            style={{
                                fontSize: "1.5rem",
                                color: "white",
                            }}
                            className="fa-brands fa-github"
                        ></i>
                    </Button>
                </Link>
            </CardActions>
            <Box sx={{ display: "flex" }}>
                {project.techno &&
                    project.techno.map((tec, i) => {
                        return (
                            <Box key={i} sx={{ p: 2, color: "yellow" }}>
                                {tec}
                            </Box>
                        );
                    })}
            </Box>
        </Card>
    );
};
