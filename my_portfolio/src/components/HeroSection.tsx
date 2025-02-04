import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        I'm a Full Stack Developer
      </Typography>
      <Button variant="contained" color="primary">
        View My Work
      </Button>
    </Box>
  );
};

export default HeroSection;