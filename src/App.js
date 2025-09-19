import React from 'react';
import { CssBaseline, ThemeProvider, Container, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box component="main" sx={{ pt: 10 }}>
          <section id="hero"><Hero /></section>
          <section id="about" style={{ paddingTop: '80px' }}><About /></section>
          <section id="skills" style={{ paddingTop: '80px' }}><Skills /></section>
          <section id="experience" style={{ paddingTop: '80px' }}><Experience /></section>
          <section id="projects" style={{ paddingTop: '80px' }}><Projects /></section>
          <section id="education" style={{ paddingTop: '80px' }}><Education /></section>
          <section id="contact" style={{ paddingTop: '80px' }}><Contact /></section> 
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;