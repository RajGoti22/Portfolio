import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ py: 5, textAlign: 'center' }}>
            <Typography variant="h2" align='center'>
                About Me
            </Typography>
            <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="body1" color="text.secondary" align="center" sx={{ margin: 'auto' }}>
                        Hello, I'm <b>Raj Goti</b>, a detail-oriented <b>Full Stack Developer</b> based in Surat, Gujarat.
                        <br />With a strong foundation in<b> React, Node.js, Express, and MongoDB </b>, I specialize in building end-to-end web applications that prioritize user experience and performance.
                        <br />I am passionate about writing clean, maintainable code and designing modern, component-based UIs.
                        As a quick learner with a problem-solving mindset, I am eager to contribute to a collaborative team and create impactful digital solutions.
                        <br />I enjoy building fast, scalable, and user-friendly web applications that deliver great user experiences.
                    </Typography>


                </Grid>
            </Grid>
        </Box>
    );
};

export default About;