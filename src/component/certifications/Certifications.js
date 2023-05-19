import React,{useState} from 'react'
import { Box,Typography,Button } from '@mui/material'
import './Certifications.css'
import cl from '../assets/certificationlogo.jpg'

const Certifications = () => {
  const [projectarray, setProjectarray] = useState([
    {
      title: "Data structures with C++",
      image: cl,
      link: "https://ninjasfiles.s3.amazonaws.com/certificate16876282b68220e4af6ef5a85b89c534cbba346.pdf"
    },
    {
      title: "React",
      image: cl,
      link: "https://ninjasfiles.s3.amazonaws.com/certificate2412784a6332ac83ff3ab848abb77e0a5b947a0.pdf"
    },
    {
      title: "Data structures with Java",
      image: cl,
      link: "https://ninjasfiles.s3.amazonaws.com/certificate241279009315bdbe218c62cf4beaaaae132e7f8.pdf"
    }
  ])


  
    // link handler
  const linkhandler = (e) => {
    window.open(e, '_blank');
  }

  return (
    <Box id="elementcerti" sx={{ marginLeft: "30px",marginTop:"200px"}}>
     <hr className='line_inside_certification' />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>Certifications</Typography>
      <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "50px" }}>
        {
          projectarray.map((data, idx) => {
            return (
              <Box key={idx} sx={{
                width: "350px", height: "500px", backgroundColor: "rgb(215, 215, 215)", marginBottom: "50px", boxShadow: "0 0 3px grey",borderRadius:"4px",
                transform: 'scale(1)',
                transition: 'all 0.3s',
                 "&:hover": {
                  transform: 'scale(1.001)',
                  cursor:'pointer',
                  boxShadow: "0 0 8px grey"
                },
              }} >
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "30px" }}>{data.title}</Typography>
                <img className='image_certification' src={data.image} alt="Not shown" />
                <Box sx={{ height: "180px", alignContent: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "10px" }}>
                    {
                      data.skill1 != "" ? <p className='skill_p'>{data.skill1}</p> : ""
                    }
                    {
                      data.skill2 != "" ? <p className='skill_p'>{data.skill2}</p> : ""
                    }
                    {
                      data.skill3 != "" ? <p className='skill_p'>{data.skill3}</p> : ""
                    }
                    {
                      data.skill4 != "" ? <p className='skill_p'>{data.skill4}</p> : ""
                    }
                    {
                      data.skill5 != "" ? <p className='skill_p'>{data.skill5}</p> : ""
                    }
                    {
                      data.skill6 != "" ? <p className='skill_p'>{data.skill6}</p> : ""
                    }
                    {
                      data.skill7 != "" ? <p className='skill_p'>{data.skill7}</p> : ""
                    }
                  </Box>

                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly", marginTop: "-80px" }}>
                  <Button className="button" variant="contained" color="primary"
                    style={{
                      width: "140px", height: "40px", background: "green",
                      color: "white", borderRadius: "20px"
                    }} onClick={() => linkhandler(data.link)}
                  >
                    Go To</Button>
                </Box>
              </Box>
            )
          })
        }
      </Box>
  </Box>
  )
}

export default Certifications




// import React from 'react'
// import './Projects.css'
// import { Box, Typography, Button } from '@mui/material'
// import { useState } from 'react';
// import pj1 from '../assets/projectlogo1.png';
// import pj2 from '../assets/projectlogo2.png';
// import pj3 from '../assets/projectlogo3.png';
// import pj4 from '../assets/projectlogo4.png';
// import pj5 from '../assets/projectlogo5.png';
// import pj6 from '../assets/projectlogo6.png';
// import { useNavigate } from "react-router-dom";


// const Projects = () => {
 

//   // Note-// here _blank specify tht link the will be opened in new tab but if
//   // we remove it then it will open in the same server or it depends on ur browser's setting as well


//   // repository handler
//   const repositoryhandler = (e) => {
//     window.open(e, '_blank');
//   }



//   return (
//     <Box id="elementpro" sx={{ height: "1200px", marginTop: "80px", marginLeft: "30px"}}>
//       <hr className='line_inside_skills' />
//       <Typography variant="h4" sx={{ fontWeight: "bold" }}>Projects</Typography>
     
//     </Box>
//   )
// }

// export default Projects