import React from 'react'
import './Skills.css'
import { Typography, Box } from '@mui/material'
import { useState } from 'react';
import cpp from '../assets/c++.png'
import css from '../assets/css.webp'
import dsa from '../assets/dsa.png'
import git from '../assets/git.png'
import html from '../assets/html.webp'
import java from '../assets/java.png'
import js from '../assets/js.png'
import mui from '../assets/mui.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'


const Skills = () => {
  const [skillState, setSkillState] = useState([{
    skill: "HTML 5",
    pic: html,
  }, { skill: "CSS 3", pic: css }, { skill: "Javascript", pic: js }, { skill: "React", pic: react }
    , { skill: "Redux", pic: redux }, { skill: "c++", pic: cpp }, { skill: "DSA", pic: dsa }, 
    { skill: "Java", pic: java }, { skill: "MUI 5", pic: mui }, { skill: "Git", pic: git }])
  return (
    <Box id="elementskills" sx={{ marginTop: "200px", height: "200px" }}>
      <hr className='line_inside_skills' />
      <Typography variant="h4" sx={{ fontFamily: "sans-serif", marginLeft: "35px",fontWeight:"bold" }} >Skills</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "120px"}}>
        {
          skillState.map((val,idx) => {
            return (
              <Box key={idx} sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap",width:"100px" }}>
                <img className="skill_image" src={val.pic} alt="not shown" />
                <p style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" ,color:"#708090",fontFamily:"sans-serif"}}>{val.skill}</p>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Skills
