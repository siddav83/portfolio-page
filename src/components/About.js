import React from "react";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

export default function About() {
    return (
        <div className="container" id="about">
            <Typography component="div" variant="h4">
                About Dave
            </Typography>
            <Typography component="div" variant="p">
                Hello! I'm Dave, a full-stack developer from Cape Town, South
                Africa now living in London, UK . I enjoy creating things that
                live on the internet, whether they be websites, applications, or
                anything in between. Recent graduate at futureproof.
            </Typography>
            <Typography component="div" variant="p">
                I’m passionate about making the web accessible to everyone and I
                enjoy solving complex problems using web technologies. I am
                always eager to learn new things every day and keep up with the
                new technologies. I work on a wide variety of interesting and
                meaningful projects on a daily basis
            </Typography>
            <Typography component="div" variant="p">
                My goal is to become a well rounded full-stack developer working
                build and supporting a start-up.
            </Typography>
            <Typography component="div" variant="p">
                Here are a few technologies I've been working with recently.
            </Typography>
            <List>
                <ListItem>Javascript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Flask</ListItem>
                <ListItem>Material UI</ListItem>
                <ListItem>GIT / Github</ListItem>
            </List>
        </div>
    );
}
