import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const experiences = [
  {
    role: "ReactJS Development Intern", 
    company: "Webito Infotech, Surat", 
    period: "June 2025 - July 2025", 
    points: [
      "Developed a fully responsive e-commerce website called RedStore using ReactJS.", 
      "Implemented product listing, cart functionality, and reusable components.", 
      "Focused on clean UI/UX, component structuring, and optimized performance.", 
      "Used React Router, Context API, and CSS for layout and state management.", 
    ]
  },
  {
    role: "UI/UX Graphics Designer", 
    company: "BeetonZ Infotech", 
    period: "June 2022 - January 2024", 
    points: [
      "Designed visually engaging marketing materials such as logos and banners.",
      "Maintained brand consistency across platforms and collaborated with teams.",
      "Developed wireframes, prototypes, and mockups using Figma for web/mobile apps.",
      "Streamlined collaboration between designers and developers.", 
    ]
  }
];

const Experience = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h2" align="center">Experience</Typography>
      <Timeline position="alternate" sx={{ mt: 4 }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Card sx={{ backgroundColor: 'background.paper', border: '1px solid #00BFFF' }}>
                <CardContent>
                  <Typography variant="h5" component="h1">{exp.role}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{exp.company}</Typography>
                  <Typography variant="caption" display="block" gutterBottom>{exp.period}</Typography>
                  <List dense>
                    {exp.points.map((point, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: '30px' }}><CheckCircleOutlineIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience;