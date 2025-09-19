
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2, // Add some horizontal padding for very small screens
      }}
    >
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h1" gutterBottom>
          Hi, I'm <span style={{ color: '#00BFFF' }}>Raj Goti</span>
        </Typography>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          A passionate Frontend / Full Stack Developer.
        </Typography>

        <Stack
          direction={{ xs: 'row', sm: 'row' }} // Stacks vertically on mobile, horizontally on larger screens
          spacing={2}
          alignItems="center" // Ensures alignment is correct in both directions
          justifyContent="center"
        >
          <Button
            variant="outlined"
            color="primary"
            href="mailto:rajgoti0622@gmail.com"
            startIcon={<Email />}
            component={motion.a}
            whileHover={{ scale: 1.5 }}
            sx={{ width: 'fit-content' }} // Ensures button width is not 100% on mobile
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
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
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