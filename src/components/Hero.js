import React from 'react';
import { Box, Typography, Button, Stack, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { fadeInUp, staggerContainer } from '../utils/Animations';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.05) 0%, rgba(10, 10, 10, 0) 50%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Background Elements */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(156, 39, 176, 0.15) 0%, rgba(0,0,0,0) 70%)',
            zIndex: 0,
          }}
        />

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              spacing={4}
              sx={{ zIndex: 1, position: 'relative', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 2,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Hello, World!
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant='h1'>
                  I'm Raj Goti <br />
                  <Box component="span" sx={{ color: 'text.secondary', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                    Full Stack Developer
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="body1" sx={{ maxWidth: '600px', fontSize: '1.2rem', color: 'text.secondary' }}>
                  I craft robust and scalable web applications with high-quality code.
                  Specializing in the Frontend/ MERN stack Developer, I bring creative designs to life with smooth interactions.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="mailto:rajgoti0622@gmail.com"
                    startIcon={<Email />}
                    component={motion.a}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </Button>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      href="https://github.com/RajGoti22"
                      target="_blank"
                      startIcon={<GitHub />}
                      component={motion.a}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      href="https://linkedin.com/in/rajgoti"
                      target="_blank"
                      startIcon={<LinkedIn />}
                      component={motion.a}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/profile.jpg"}
                alt="Raj Goti"
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic shape
                  border: '2px solid rgba(0, 191, 255, 0.5)',
                  boxShadow: '0 0 40px rgba(0, 191, 255, 0.3)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                  }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;