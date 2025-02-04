import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'This is a description of Project 3.',
    image: 'https://via.placeholder.com/150',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;