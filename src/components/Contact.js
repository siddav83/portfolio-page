import React from "react";
import { Typography, Button } from "@mui/material";
export const Contact = () => {
  const mailtoHref =
    "mailto:siddav83@gmail.com?subject=SendMail&body=Description";
  return (
    <div
      className="container contact"
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        // padding: "20px",
      }}
    >
      <Typography variant="h5">Get in Touch</Typography>
      <Typography variant="p" sx={{ padding: 1 }}>
        Let me know if you want to collarate or just want to chat anything about
        coding, biltong or long distance triathlon.
      </Typography>
      <Button
        sx={{
          "&:hover": {
            transform: "translateY(-10px)",
            backgroundColor: "#f1d64f",
            border: "solid #f1d64f 1px",
            color: "white",
          },
          transition: "transform 500ms",
          mt: 2,
          border: "solid #f1d64f 1px",
          fontSize: "inherit",
          color: "#f1d64f",

          textTransform: "capitalize",
        }}
      >
        <a
          href={mailtoHref}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          say hello 👋
        </a>
      </Button>
    </div>
  );
};
