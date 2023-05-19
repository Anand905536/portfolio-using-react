import React from 'react'
import './Projects.css'
import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react';
import pj1 from '../assets/projectlogo1.png';
import pj2 from '../assets/projectlogo2.png';
import pj3 from '../assets/projectlogo3.png';
import pj4 from '../assets/projectlogo4.png';
import pj5 from '../assets/projectlogo5.png';
import pj6 from '../assets/projectlogo6.png';
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const [projectarray, setProjectarray] = useState([
    {
      title: "T-shirt Store",
      image: pj1,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "react-router",
      skill5: "CSS",
      skill6: "Mantine Library",
      skill7: "MUI 5",
      repository: "https://github.com/Anand905536/Trex-store.",
      link: "https://trexstore.netlify.app"
    },
    {
      title: "Gymexer- A gym App",
      image: pj2,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "",
      skill5: "CSS",
      skill6: "",
      skill7: "MUI 5",
      repository: "https://github.com/Anand905536/gymexer-using-react",
      link: "https://gymexer.netlify.app"
    },
    {
      title: "Movix- A movie App",
      image: pj3,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "Bootstrap",
      skill5: "CSS",
      skill6: "",
      skill7: "",
      repository: "https://github.com/Anand905536/movix_a_react_app",
      link: "https://movitech.netlify.app"
    },
    {
      title: "bookie- A travel app ",
      image: pj4,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "react-router",
      skill5: "CSS",
      skill6: "",
      skill7: "MUI 5",
      repository: "https://github.com/Anand905536/mmt-clone",
      link: "https://mmtclone.netlify.app"
    },
    {
      title: "Weather app",
      image: pj5,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "",
      skill5: "CSS",
      skill6: "Auth0",
      skill7: "MUI 5",
      repository: "https://github.com/Anand905536/Weather-App-",
      link: "https://weatherix.netlify.app"
    },
    {
      title: "Catalog-view",
      image: pj6,
      skill1: "React",
      skill2: "React-icons",
      skill3: "JSX",
      skill4: "",
      skill5: "CSS",
      skill6: "",
      skill7: "",
      repository: "https://github.com/Anand905536/catalog_view",
      link: "catalogview.netlify.app/"
    }
  ])

  // Note-// here _blank specify tht link the will be opened in new tab but if
  // we remove it then it will open in the same server or it depends on ur browser's setting as well


  // repository handler
  const repositoryhandler = (e) => {
    window.open(e, '_blank');
  }

  // link handler
  const linkhandler = (e) => {
    window.open(e, '_blank');
  }

  return (
    <Box id="elementpro" sx={{ height: "1200px", marginTop: "200px", marginLeft: "30px" }}>
      <hr className='line_inside_skills' />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>Projects</Typography>
      <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "140px" }}>
        {
          projectarray.map((data, idx) => {
            return (
              <Box key={idx} sx={{
                width: "350px", height: "500px", backgroundColor: "lightGrey", marginBottom: "50px", boxShadow: "0 0 3px grey", borderRadius: "4px",
                transform: 'scale(1)',
                transition: 'all 0.3s',
                "&:hover": {
                  transform: 'scale(1.001)',
                  cursor: 'pointer',
                  boxShadow: "0 0 8px grey"
                },
              }} >
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>{data.title}</Typography>
                <img className='image_project' src={data.image} alt="Not shown" />
                <Box sx={{ height: "180px", alignContent: "center" }}>
                  <Typography sx={{ marginLeft: "20px", fontWeight: "light", fontFamily: "sans-serif", fontWeight: "bold" }}
                    variant="h6">Tags -</Typography>
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
                <Box sx={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
                  <Button className="button" variant="contained" color="primary"
                    style={{
                      width: "140px", height: "40px", backgroundColor: "rgb(228, 94, 11)",
                      color: "white", borderRadius: "20px"
                    }} onClick={() => repositoryhandler(data.repository)}
                  >
                    Github</Button>
                  <Button className="button" variant="contained" color="primary"
                    style={{
                      width: "140px", height: "40px", backgroundColor: "green",
                      color: "white", borderRadius: "20px"
                    }} onClick={() => linkhandler(data.link)}
                  >
                    Live</Button>
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Projects