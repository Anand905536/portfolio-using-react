import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import './Connectme.css'
import github from '../assets/github.png'
import linked from '../assets/linkedin.png'
import gfg from '../assets/gfg.jpg'
import leetcode from '../assets/leetcode.png'
import netlify from '../assets/netlify.png'
import gmail from '../assets/gmail.png'



const Connectme = () => {
  const [handleArray,setHandleArray]=useState([
    {
       image:github,
       name:"Github",
       link:"https://github.com/Anand905536"
    },
    {
      image:linked,
      name:"Linked In",
      link:"https://www.linkedin.com/in/anand-5084021ba/"
    },
    {
      image:gfg,
      name:"GFG",
      link:"https://auth.geeksforgeeks.org/user/anand_9055/practice"
    },
    {
      image:leetcode,
      name:"Leetcode",
      link:"https://leetcode.com/anand_9055/"
    },
    {
      image:netlify,
      name:"Netlify",
      link:"https://app.netlify.com/teams/anand905536/sites"
    },
    {
      image:gmail,
      name:"Gmail",
      link:""
    }
  ])

  // clickhandler
  const clickhandler=(e)=>{
    window.open(e, '_blank');
  }
  return (
    <Box id="elementconnect" sx={{height:"300px",backgroundColor:"black"}}>
      <Typography variant="h5" sx={{paddingTop:"20px",color:"whitesmoke",textAlign:"center",letterSpacing:"4px",height:"50px"}}>Links/Handles</Typography>
        <hr className='line_in_connect'/>
        <Box sx={{display:'flex',justifyContent:"space-evenly"}}>
          {
            handleArray.map((val,idx)=>{
              return(
                <>
                <Box sx={{width:'70px',height:"70px",marginTop:"80px"}}>
                  <img className="connection_logo" src={val.image} alt="not shown" onClick={()=>clickhandler(val.link)}/>
                  <p className='p_inside_connection'>{val.name}</p>
                </Box>
                </>
              )
            })
          }
        </Box>
      </Box>
  )
}

export default Connectme