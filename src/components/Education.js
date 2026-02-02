import React from 'react';
import { Box, Typography, Paper, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/Animations';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Sarvajanik College of Engineering and Technology",
    year: "2022 - 2026",
    desc: "Information Technology | CGPA: 9.55/10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "The Radiant International School",
    year: "2020 - 2022",
    desc: "Science Stream | PCM: 88/100"
  }
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Education <span style={{ color: '#00BFFF' }}>Journey</span>
          </Typography>
        </motion.div>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={fadeInUp} style={{ flex: 1 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 30px rgba(0, 191, 255, 0.1)'
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  <SchoolIcon fontSize="large" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{edu.degree}</Typography>
                <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>{edu.institution}</Typography>
                <Typography variant="subtitle2" color="primary.light" sx={{ mb: 2 }}>{edu.year}</Typography>
                <Typography variant="body2" color="text.secondary">{edu.desc}</Typography>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;