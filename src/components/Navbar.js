import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: "none" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    ></Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Button
                            sx={{
                                "&:hover": {
                                    color: "#f1d64f",
                                },
                                fontSize: "inherit",

                                m: 1.5,
                                color: "#fff",
                                textTransform: "capitalize",
                            }}
                        >
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Home
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                "&:hover": {
                                    color: "#f1d64f",
                                },
                                fontSize: "inherit",

                                m: 1.5,
                                color: "#fff",
                                textTransform: "capitalize",
                            }}
                        >
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                About
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                "&:hover": {
                                    color: "#f1d64f",
                                },
                                fontSize: "inherit",
                                color: "#fff",

                                m: 1.5,
                                textTransform: "capitalize",
                            }}
                        >
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                "&:hover": {
                                    color: "#f1d64f",
                                },
                                fontSize: "inherit",
                                color: "#fff",
                                m: 1.5,
                                mr: 2.5,
                                textTransform: "capitalize",
                            }}
                        >
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={100}
                                duration={500}
                                sx={{
                                    color: "#fff",
                                    textTransform: "capitalize",
                                }}
                            >
                                Contact
                            </Link>
                        </Button>

                        <Button
                            sx={{
                                "&:hover": {
                                    color: "white",
                                    backgroundColor: "#f1d64f",
                                },
                                fontSize: "inherit",
                                border: "2px solid #f1d64f",
                                p: "0.5rem",
                                color: "#f1d64f",
                                textTransform: "capitalize",
                            }}
                            href="siddav83cv.pdf"
                            download="siddav83cv.pdf"
                        >
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
};
