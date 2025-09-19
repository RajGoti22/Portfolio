import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion} from 'framer-motion';

// Add 'hero' to your sections
const navLinks = [
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <AppBar
        position="fixed"
        color="background"
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(18, 18, 18, 0.7)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer',color:'#00BFFF' }}
            onClick={() => scrollToSection('hero')}
          >
            RG
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navLinks.map((link) => (
              <Box key={link.id} sx={{ position: 'relative' }}>
                <Button
                  color="inherit"
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    fontWeight: 500,
                    opacity: activeSection === link.id ? 1 : 0.7,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {link.title}
                </Button>
  
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Button
            variant="outlined"
            color="primary"
            href="https://drive.google.com/file/d/19J1pSsur5MGc593S_emhBvF0ksDv3bru/view?usp=drive_link" // Ensure your resume is in the /public folder
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 3 }}
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;






