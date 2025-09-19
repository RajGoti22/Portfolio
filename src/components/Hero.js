import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="hero" // Added ID for navigation
      sx={{
        minHeight: '100vh', // Changed to 100vh for full screen height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography 
          variant='h1' 
          gutterBottom
          // 1. Made the heading font size responsive
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' } 
          }}
        >
          Hi, I'm <span style={{ color: '#00BFFF' }}>Raj Goti</span>
        </Typography>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
          A passionate Frontend / Full Stack Developer.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            // 2. Changed to 'contained' to make it the primary action
            variant="contained" 
            color="primary"
            href="mailto:rajgoti0622@gmail.com"
            startIcon={<Email />}
            component={motion.a}
            // 3. Made hover animation consistent with other buttons
            whileHover={{ scale: 1.05, y: -2 }} 
            sx={{ width: 'fit-content' }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://github.com/RajGoti22"
            target="_blank"
            startIcon={<GitHub />}
            component={motion.a}
            whileHover={{ scale: 1.05, y: -2 }}
            sx={{ width: 'fit-content' }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://linkedin.com/in/rajgoti"
            target="_blank"
            startIcon={<LinkedIn />}
            component={motion.a}
            whileHover={{ scale: 1.05, y: -2 }}
            sx={{ width: 'fit-content' }}
          >
            LinkedIn
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Hero;