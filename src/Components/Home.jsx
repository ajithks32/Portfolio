import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import './Home.css'; // Import external CSS
import Footer from './Footer';

const Home = () => {
    return (
        <>
         <Box className="home-container" id="home">
            <Container>
                {/* Welcome Text */}
                <Typography variant="h2" className="home-title text-white mb-lg-3">
             Ajith S
                </Typography>

                {/* Subtitle */}
                <Typography variant="h6" className="home-subtitle text-white mb-lg-3">
                    I'm a passionate Front-End Developer who loves crafting beautiful and functional user experiences.
                </Typography>

                {/* Call to Action */}
                <div className='viewprojectbutton '>
                <Button variant="contained" href="#projects" className="home-button mb-lg-4 ">
                    View My Projects
                </Button>
                </div>
                

                {/* Additional Content */}
                <Grid container spacing={4} className="home-grid" justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <div className="home-feature-card">
                            <Typography variant="h6" className="feature-title">
                                Creative Designs
                            </Typography>
                            <Typography variant="body2" className="feature-description">
                                I focus on crafting visually stunning and intuitive user interfaces.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="home-feature-card">
                            <Typography variant="h6" className="feature-title">
                                Responsive Layouts
                            </Typography>
                            <Typography variant="body2" className="feature-description">
                                My designs adapt seamlessly to all devices and screen sizes.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="home-feature-card">
                            <Typography variant="h6" className="feature-title">
                                Performance-Driven
                            </Typography>
                            <Typography variant="body2" className="feature-description">
                                Optimized for speed and efficiency to ensure a smooth user experience.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
           
        </Box>
        <Footer/>
        </>
       
    );
};

export default Home;
