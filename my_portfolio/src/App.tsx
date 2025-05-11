import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectSection';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
<div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Footer />
 </div>  
  );
};

export default App;