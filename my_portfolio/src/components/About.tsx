import { Box, Typography, Button, Grid } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Me"
            sx={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" gutterBottom>
            I am a Full Stack Developer with experience in building web applications using JavaScript, React, Node.js, and other technologies.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I have a passion for learning new technologies and improving my skills. I enjoy working on challenging projects and collaborating with others to create innovative solutions.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;