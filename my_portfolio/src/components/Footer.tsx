import React from 'react';
import Box from '@mui/material/Box'; // Ensure you have this import if using Material-UI

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: 2,
        marginTop: 'auto',
      }}
    >
      Footer Content;
    </Box>
  );
};

export default Footer;