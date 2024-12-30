import React from 'react';
import { Grid, Typography, Box, Card, CardContent, CircularProgress } from '@mui/material';

const skills = [
  { name: 'HTML', proficiency: 90 },
  { name: 'CSS', proficiency: 85 },
  { name: 'JavaScript', proficiency: 80 },
  { name: 'React', proficiency: 75 },
  { name: 'Bootstrap', proficiency: 85 },
  { name: 'Material-UI', proficiency: 70 },
];

const Skill = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        My Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CircularProgress
                variant="determinate"
                value={skill.proficiency}
                size={100}
                thickness={5}
                sx={{
                  color: 'primary.main',
                  marginBottom: 2,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'center' }}
                >
                  {skill.proficiency}% Proficient
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
