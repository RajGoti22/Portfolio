import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Container, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/Animations';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: "RedStore E-commerce",
    description: "Built a fully responsive e-commerce application with product listing, cart, and checkout functionality. Managed global state with Redux and integrated REST APIs for dynamic product data.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    tags: ["React.js", "Redux", "Material UI", "REST APIs"],
    liveLink: "https://redstoreecomm.netlify.app",
    githubLink: "https://github.com/RajGoti22/RedStore"
  },
  {
    title: "TravelSensei - AI Planner",
    description: "Developed a responsive frontend for an AI-based travel itinerary platform. Integrated AI-generated itineraries, user authentication, and Google Maps API for destination visualization.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
    tags: ["React.js", "Material UI", "AI Integration", "Google Maps API"],
    liveLink: "#",
    githubLink: "https://github.com/RajGoti22/TravelSensei---AI-Powerd-Trip-Planner"
  },
  // Add more placeholders if you want to show the specific visual layout even with one real project
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Featured <span style={{ color: '#00BFFF' }}>Projects</span>
          </Typography>
        </motion.div>

        <Grid container spacing={4} component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index} component={motion.div} variants={fadeInUp}>
              <Card
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    borderColor: 'primary.main',
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={`${project.title} screenshot`}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 1 }
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h4" component="h3" sx={{ fontWeight: 700 }}>{project.title}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{project.description}</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                    {project.tags && project.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(0, 191, 255, 0.1)', color: 'primary.main', border: '1px solid rgba(0, 191, 255, 0.2)' }} />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    href={project.liveLink}
                    target="_blank"
                    startIcon={<LaunchIcon />}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;