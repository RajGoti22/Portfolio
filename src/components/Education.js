import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Education = () => {
  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h2">Education</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, flexWrap: 'wrap' }}>
        <Paper elevation={3} sx={{ p: 3, minWidth: 300 }}>
          <Typography variant="h6">Bachelor of Technology (B.Tech) </Typography>
          <Typography color="text.secondary">Sarvajanik College of Engineering and Technology </Typography>
          <Typography variant="caption" display="block">2022 - Present </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, minWidth: 300 }}>
          <Typography variant="h6">Higher Secondary Certificate (HSC) </Typography>
          <Typography color="text.secondary">The Radiant International School </Typography>
          <Typography variant="caption" display="block">2020 - 2022 </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Education;