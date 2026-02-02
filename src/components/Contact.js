import React from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, IconButton, Container, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer } from '../utils/Animations';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Blob */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.05) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography variant="h2" align="center" sx={{ mb: 8 }}>
            Get In <span style={{ color: '#00BFFF' }}>Touch</span>
          </Typography>
        </motion.div>

        <Grid container spacing={8} alignItems="center">
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={4} component={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>Let's Talk</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4 }}>
                  I'm open to freelance opportunities, collaborations, or just a friendly chat.
                </Typography>
              </motion.div>

              {[
                { icon: <Email />, text: "rajgoti0622@gmail.com", href: "mailto:rajgoti0622@gmail.com" },
                { icon: <Phone />, text: "+91 9428110845", href: "tel:+919428110845" },
                { icon: <LocationOn />, text: "Surat, Gujarat", href: null }
              ].map((item, index) => (
                <motion.div key={index} variants={scaleIn} whileHover={{ scale: 1.05, x: 10 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      transition: 'all 0.3s',
                      cursor: item.href ? 'pointer' : 'default',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(0, 191, 255, 0.05)'
                      }
                    }}
                    onClick={() => item.href && window.open(item.href, '_self')}
                  >
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>{item.icon}</Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{item.text}</Typography>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px'
                }}
              >
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          bgcolor: 'rgba(0,0,0,0.2)'
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          bgcolor: 'rgba(0,0,0,0.2)'
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          bgcolor: 'rgba(0,0,0,0.2)'
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{ py: 1.5, fontSize: '1rem', marginTop: 2 }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;