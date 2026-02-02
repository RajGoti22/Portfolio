import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/Animations';

const experiences = [
  {
    role: "ReactJS Developer Intern",
    company: "Webito Infotech, Surat",
    period: "June 2025 - July 2025",
    points: [
      "Developed a fully responsive e-commerce website called RedStore using ReactJS.",
      "Implemented product listing, cart functionality, responsive layouts, and reusable components.",
      "Focused on clean UI/UX, component structuring, and optimized performance.",
      "Used React Router, Context API, and CSS for layout and state management.",
    ]
  },
  {
    role: "UI/UX Graphics Designer trainee",
    company: "BeetonZ Infotech Surat",
    period: "June 2022 - January 2024",
    points: [
      "Designed visually engaging marketing materials such as logos, banners, and promotional content.",
      "Maintained brand consistency across platforms and collaborated with crossfunctional teams.",
      "Developed wireframes, prototypes, and mockups using Figma for web/mobile apps.",
      "Streamlined collaboration between designers and developers using version control and handoff tools.",
    ]
  }
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" component={motion.div} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Professional <span style={{ color: '#9C27B0' }}>Experience</span>
        </Typography>

        <Timeline position="alternate" sx={{ mt: 8, p: 0 }}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  <TimelineDot color="primary" variant="filled" sx={{ p: 1.5, boxShadow: '0 0 15px rgba(0, 191, 255, 0.5)' }}>
                    <WorkIcon fontSize="medium" />
                  </TimelineDot>
                </motion.div>
                {index !== experiences.length - 1 && <TimelineConnector sx={{ bgcolor: 'secondary.main', opacity: 0.3 }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: { xs: 2, md: 4 } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card
                    elevation={4}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h3" sx={{ color: 'primary.light', fontWeight: 600 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 500, my: 1 }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="caption" display="block" gutterBottom sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
                        {exp.period}
                      </Typography>
                      <List dense>
                        {exp.points.map((point, i) => (
                          <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ minWidth: '28px', mt: 0.5 }}>
                              <CheckCircleOutlineIcon color="secondary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;