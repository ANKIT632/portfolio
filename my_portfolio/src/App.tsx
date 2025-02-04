import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectSection';
import Footer from './components/Footer';
import Box from '@mui/material/Box'; 

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </Box>
  );
};

export default App;