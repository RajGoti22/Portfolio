import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 5, backgroundColor: 'background.paper' }}>
      <Box>
        <IconButton
          color="inherit"
          href="https://linkedin.com/in/rajgoti" 
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/RajGoti22" 
          aria-label="GitHub"
        >
          <GitHub />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Raj Goti. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;