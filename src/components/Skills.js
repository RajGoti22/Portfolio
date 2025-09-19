
import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "ReactJS", "Redux", "Material UI"],
  "Backend": ["Node.js", "Express.js", "REST API", "MongoDB"], 
  "Design & Tools": ["Figma", "UI/UX Design", "Responsive Design", "Git", "GitHub", "Postman", "VS Code"]
};

const Skills = () => {
  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h2">Skills</Typography>
      <Box sx={{ mt: 4 }}>
        {Object.entries(skills).map(([category, items]) => (
          <Box key={category} sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>{category}</Typography>
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
              {items.map((skill, index) => (
                // 1. ADDED whileHover PROP FOR SCALING ANIMATION
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Chip
                    label={skill}
                    color="primary"
                    variant="outlined"
                    // 2. UPDATED SX PROP FOR STYLE CHANGE ON HOVER
                    sx={{
                      m: 0.5,
                      fontSize: '1rem',
                      padding: '10px',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: (theme) =>
                          theme.palette.mode === 'dark' ? '#121212' : '#fff',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;