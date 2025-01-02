import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import './Projects.css';  // Import the external CSS file
import Footer from './Footer';

const projects = [
    {
        name: 'Grace Academy Admin Panel',
        description: 'A complete admin panel for managing staff and students, built with React and Material-UI.',
        techStack: 'React, Material-UI, JavaScript',
        liveDemo: '#', // Replace with the actual URL
        github: 'https://github.com/ajithks32/admin-dashboard',
        image: 'https://via.placeholder.com/300x200', // Replace with project screenshot
    },
    {
        name: 'Portfolio Website',
        description: 'My personal portfolio showcasing skills, projects, and contact information.',
        techStack: 'React, Material-UI',
        liveDemo: '#',
        github: '#',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'E-commerce Website',
        description: 'An e-commerce platform with product listing, cart, and checkout functionality.',
        techStack: 'React, Redux, Node.js, MongoDB',
        liveDemo: '#',
        github: '#',
        image: 'https://via.placeholder.com/300x200',
    },
];

const Projects = () => {
    return (
      <>
        <Box
            id="projects"
            sx={{
                padding: { xs: 2, sm: 4 },
                backgroundColor: '#f5f5f5',
                minHeight: 'calc(100vh - 64px)',
               
            }}
        >
            

            {/* About the Projects Section */}
            <Box className="about-projects " sx={{ marginBottom: 4}}>
                <Typography className='text-white' variant="h6" fontFamily="Poppins, sans-serif" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    <strong className='orangecolour'>ABOUT THESE PROJECTS</strong>
                </Typography>
                <Typography
                    variant="body1"
                    className='text-white text-start'
                    sx={{ fontFamily: 'Poppins, sans-serif', color: '#555', lineHeight: 1.6, maxWidth: '800px' }}
                >
                    These projects showcase my skills in front-end development and web design. Each project is carefully crafted
                    with a focus on user experience, functionality, and performance. I use the latest web technologies and
                    frameworks to build responsive, accessible, and performant applications.
                </Typography>
            </Box>

            {/* Project Cards */}
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="project-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.name}
                            />
                            <CardContent>
                                <Typography variant="h6" fontFamily="Montserrat, sans-serif" >
                                   <strong className='orangecolour'>{project.name}</strong> 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ margin: '10px 0' }}>
                                    {project.description}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    Tech Stack: {project.techStack}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: 2,
                                    marginTop: 'auto',
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href={project.liveDemo}
                                    target="_blank"
                                >
                                    Live Demo
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={project.github}
                                    target="_blank"
                                >
                                    GitHub
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        <Footer />
      </>
    );
};

export default Projects;
