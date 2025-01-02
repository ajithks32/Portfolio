import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import './Navbar.css';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:960px)');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false); // Close the drawer
    };

    const drawerContent = (
        <List>
            <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                <HomeIcon sx={{ marginRight: 1, fontSize: '1.2rem' }} />
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
                <InfoIcon sx={{ marginRight: 1, fontSize: '1.2rem' }} />
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/projects" onClick={handleDrawerClose}>
                <WorkIcon sx={{ marginRight: 1, fontSize: '1.2rem' }} />
                <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button component={Link} to="/resume" onClick={handleDrawerClose}>
                <DescriptionIcon sx={{ marginRight: 1, fontSize: '1.2rem' }} />
                <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={handleDrawerClose}>
                <ContactMailIcon sx={{ marginRight: 1, fontSize: '1.2rem' }} />
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    );

    return (
        <div className="container navbarchange">
            <AppBar position="fixed" sx={{ zIndex: 1201, width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo/Title */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat, sans-serif',
                        }}
                    >
                        My Portfolio
                    </Typography>

                    {/* Desktop Links */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem', // Match the text size
                                    display: 'flex', 
                                    alignItems: 'center', // Align icon and text
                                    gap: 1, // Space between icon and text
                                }}
                            >
                                <HomeIcon sx={{ fontSize: '1.2rem' }} />
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/about"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <InfoIcon sx={{ fontSize: '1.2rem' }} />
                                About
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/projects"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <WorkIcon sx={{ fontSize: '1.2rem' }} />
                                Projects
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/resume"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <DescriptionIcon sx={{ fontSize: '1.2rem' }} />
                                Resume
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/contact"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '1rem',
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <ContactMailIcon sx={{ fontSize: '1.2rem' }} />
                                Contact
                            </Button>
                        </Box>
                    )}

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Drawer for Mobile View */}
                    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                        {drawerContent}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
