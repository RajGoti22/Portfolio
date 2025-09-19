import React from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, IconButton } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    // Centered the entire section and reduced vertical padding
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Used a smaller h3 variant and adjusted margin */}
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      {/* Constrained the max-width of the entire content box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '960px' }}
      >
        <Paper
          elevation={5}
          sx={{
            p: { xs: 2, md: 4 },
            border: '1px solid',
            borderColor: 'primary.main',
            background: 'rgba(30, 30, 30, 0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            {/* Contact Info Section */}
            <Grid item xs={12} md={5}>
              <Typography variant="h5" gutterBottom color="primary.main">
                Get in Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                I'd love to hear from you! Feel free to reach out with any questions or opportunities.
              </Typography>

              {/* Tightened spacing between contact items */}
              <Box display="flex" alignItems="center" mb={1.5}>
                <IconButton color="primary" aria-label="Email" size="small">
                  <Email />
                </IconButton>
                <Typography variant="body1">rajgoti0622@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1.5}>
                <IconButton color="primary" aria-label="Phone" size="small">
                  <Phone />
                </IconButton>
                <Typography variant="body1">+91 9428110845</Typography> 
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton color="primary" aria-label="Location" size="small">
                  <LocationOn />
                </IconButton>
                <Typography variant="body1">Surat, Gujarat</Typography>
              </Box>
            </Grid>

            {/* Contact Form Section */}
            <Grid item xs={12} md={7}>
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                {/* Used 'small' size for more compact fields */}
                <TextField fullWidth label="Your Name" name="name" margin="normal" required size="small" />
                <TextField fullWidth label="Your Email" name="email" type="email" margin="normal" required size="small" />
                <TextField fullWidth label="Your Message" name="message" margin="normal" required multiline rows={4} size="small" />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, px: 4, py: 1 }}>
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;