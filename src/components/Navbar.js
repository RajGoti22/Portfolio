import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
  { title: 'Education', id: 'education' },
  { title: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', ...navLinks.map(link => link.id)];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          transition: 'all 0.3s ease',
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                flexGrow: 1,
                fontWeight: 800,
                cursor: 'pointer',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1px',
              }}
              onClick={() => scrollToSection('hero')}
            >
              RG.
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navLinks.map((link) => (
                <Box key={link.id} sx={{ position: 'relative' }}>
                  <Button
                    color="inherit"
                    onClick={() => scrollToSection(link.id)}
                    sx={{
                      fontWeight: 500,
                      color: activeSection === link.id ? 'primary.main' : 'text.secondary',
                      '&:hover': { color: 'text.primary' },
                    }}
                  >
                    {link.title}
                  </Button>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '10px',
                        right: '10px',
                        height: '2px',
                        background: theme.palette.primary.main,
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Box>
              ))}
              <Button
                variant="outlined"
                color="primary"
                href="https://drive.google.com/file/d/1qklLWJJoWVk8b5IQEm0DJIv7ntYSUXg1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 2, borderRadius: '50px', px: 3 }}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </Button>
            </Box>

            {/* Mobile Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ display: { md: 'none' } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              zIndex: 1200, // Below AppBar (1100) but AppBar is sticky? No, AppBar is 1100 usually. Let's make this go full screen ON TOP or below? 
              // Usually generic drawers are 1200. Let's check AppBar z-index logic.
              // Actually better to have this ON TOP of everything.
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '64px'
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography
                    variant="h3"
                    onClick={() => scrollToSection(link.id)}
                    sx={{
                      cursor: 'pointer',
                      color: activeSection === link.id ? 'primary.main' : 'text.primary',
                      fontWeight: 700,
                      '&:hover': { color: 'primary.light' }
                    }}
                  >
                    {link.title}
                  </Typography>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="https://drive.google.com/file/d/1qklLWJJoWVk8b5IQEm0DJIv7ntYSUXg1/view?usp=sharing"
                  target="_blank"
                  sx={{ mt: 2, minWidth: '200px' }}
                >
                  Resume
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;






