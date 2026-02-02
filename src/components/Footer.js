import React from 'react';
import { Box, Typography, IconButton, Stack, Divider, Container } from '@mui/material';
import { LinkedIn, GitHub, Email, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, position: 'relative' }}>
      <Divider sx={{ mb: 6, opacity: 0.1 }} />
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={3}>
          <Box>
            {[
              { icon: <GitHub />, href: "https://github.com/RajGoti22" },
              { icon: <LinkedIn />, href: "https://linkedin.com/in/rajgoti" },
              { icon: <Email />, href: "mailto:rajgoti0622@gmail.com" },
              // { icon: <Instagram />, href: "#" } // Uncomment if needed
            ].map((social, index) => (
              <IconButton
                key={index}
                component={motion.a}
                href={social.href}
                target="_blank"
                whileHover={{ y: -5, color: '#00BFFF' }}
                sx={{
                  color: 'text.secondary',
                  mx: 1,
                  transition: 'color 0.3s'
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <Typography variant="body2" color="text.secondary" align="center">
            Designed & Built by <span style={{ color: '#00BFFF' }}>Raj Goti</span>
          </Typography>

          <Typography variant="caption" color="text.disabled" align="center">
            © {new Date().getFullYear()} All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;