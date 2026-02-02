
import React from 'react';
import { Box, Typography, Chip, Stack, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/Animations';

const skills = {
  "Frontend": ["React.js", "Next.js", "Redux", "Material UI", "Bootstrap", "Styled Components", "HTML5", "CSS3", "JavaScript"],
  "Backend & APIs": ["Node.js", "Express.js", "REST API", "Axios/Fetch", "Authentication", "MongoDB"],
  "Tools": ["Git", "GitHub", "Postman", "Figma", "VS Code"]
};

// SkillCategory Component
const SkillCategory = ({ category, items }) => (
  <Paper
    elevation={0}
    component={motion.div}
    variants={fadeInUp}
    sx={{
      p: 4,
      height: '100%',
      bgcolor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: 'secondary.main',
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(156, 39, 176, 0.2)'
      }
    }}
  >
    <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3, fontWeight: 600 }}>
      {category}
    </Typography>
    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
      {items.map((skill, index) => (
        <motion.div
          key={skill}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Chip
            label={skill}
            variant="outlined"
            sx={{
              fontSize: '0.9rem',
              py: 2.5,
              px: 1,
              borderColor: 'rgba(255, 255, 255, 0.15)',
              bgcolor: 'transparent',
              color: 'text.primary',
              transition: 'all 0.2s',
              '&:hover': {
                borderColor: 'secondary.main',
                bgcolor: 'rgba(156, 39, 176, 0.1)',
                color: 'white'
              }
            }}
          />
        </motion.div>
      ))}
    </Stack>
  </Paper>
);

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography variant="h2" align="center" sx={{ mb: 8 }}>
            Technical <span style={{ color: '#9C27B0' }}>Skills</span>
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
          <Box sx={{ flex: 1 }}>
            <SkillCategory category="Frontend" items={skills["Frontend"]} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <SkillCategory category="Backend & APIs" items={skills["Backend & APIs"]} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <SkillCategory category="Tools" items={skills["Tools"]} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;