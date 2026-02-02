import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../utils/Animations';

const About = () => {
    return (
        <Box id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Typography variant="h2" align='center' sx={{ mb: 6 }}>
                        About <span style={{ color: '#00BFFF' }}>Me</span>
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="center">
                    {/* <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                        >
                            <Paper
                                elevation={6}
                                sx={{
                                    height: '400px',
                                    borderRadius: '20px',
                                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <Typography variant="h1" sx={{ opacity: 0.1, transform: 'rotate(-15deg)' }}>
                                    DEV
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <Typography variant="h3" gutterBottom sx={{ color: 'primary.light' }}>
                                Who I Am
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ mb: 2, fontSize: '1.2rem' }}>
                                Hello, I'm <Box component="span" sx={{ color: 'white', fontWeight: 600 }}>Raj Goti</Box>, a detail-oriented
                                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> Frontend / Full Stack Developer </Box>
                                based in Surat, Gujarat.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                With a strong foundation in <b>React.js, Node.js, Express, and MongoDB</b>, I specialize in building
                                end-to-end web applications that prioritize user experience and performance.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                I am passionate about writing clean, maintainable code and designing modern, component-based UIs.
                                As a quick learner with a problem-solving mindset, I am eager to contribute to a collaborative team
                                and create impactful digital solutions.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;