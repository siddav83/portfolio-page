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
                background: "black",
                color: "inherit",
                maxWidth: 345,
                m: 2,
                p: 2,
                opacity: 0.7,
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
                <Link href={project.projectLink}>
                    <Button size="small">project</Button>
                </Link>
                <Link href={project.githubLink}>
                    <Button size="small">github</Button>
                </Link>
            </CardActions>
            <Box sx={{ display: "flex" }}>
                {project.techno &&
                    project.techno.map((tec) => {
                        return <Box sx={{ p: 2, color: "yellow" }}>{tec}</Box>;
                    })}
            </Box>
        </Card>
    );
};
