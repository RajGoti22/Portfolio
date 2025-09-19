import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';

// Add more projects here
const projects = [
  {
    title: "RedStore E-commerce",
    description: "A fully responsive e-commerce website built with ReactJS, featuring product listings, cart functionality, and a clean UI/UX. State is managed with Context API.", // [cite: 24]
    image: "image.png", // Replace with a real screenshot URL
    liveLink: "https://redstoreecomm.netlify.app", 
    githubLink: "https://github.com/RajGoti22/RedStore" // IMPORTANT: Update this link
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h2" align="center">Projects</Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={project.image}
                alt={`${project.title} screenshot`}
                sx={{ borderBottom: '1px solid #333' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.liveLink} target="_blank">Live Demo</Button>
                <Button size="small" color="primary" href={project.githubLink} target="_blank">Source Code</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;