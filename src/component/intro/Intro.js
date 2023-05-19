import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Typography, Box, Button } from '@mui/material';
import Image from '../assets/image.avif'
import './Intro.css'
import Navbar from '../navbar/Navbar';



const Intro = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedOptions = {
      strings: [
        "A front-end developer",
        "A react developer",
      ],
      typeSpeed: 80,
      backDelay: 1100,
      backSpeed: 30,
      loop: true,
    };
    const typed = new Typed(typedRef.current, typedOptions);
    return () => {
      typed.destroy(); // Clean up the Typed instance when the component unmounts
    };
  }, []);

  return (
    <Box sx={{ height: "400px" }}>
    <Navbar/>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "500px" }}>
          <Typography variant="h2" sx={{ marginLeft: "80px", color: "#8B0000", fontWeight: "normal", fontFamily: "Verdana, Geneva, Tahoma, sans-serif", marginTop: "100px" }}>
            I'm Anand
          </Typography>
          <Typography variant="h4" sx={{ marginLeft: "80px", color: "#2F4F4F", fontWeight: "light", marginTop: "15px" }} ref={typedRef}>
          </Typography>
        </Box>
        <img src={Image} className="image" alt="Not shown" />
      </Box>
      <Button sx={{ marginLeft: "110px", marginTop: "-190px", width: "250px", backgroundColor: "#ff2625", padding: '10px', backgroundColor: "green" }} variant="contained" color="success" href="#elementpro">My Projects</Button>
    </Box>
  );
};

export default Intro;
