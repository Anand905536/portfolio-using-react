import React from 'react'
import './Navbar.css'


const Name = "<Anand/>";
const Navbar = () => {
    return (
        <div style={{display:'flex',justifyContent:"space-between",width:"100%"}}>
            <h3 style={{ fontFamily: "cursive", marginLeft: "50px", color: "#708090", marginTop: "30px" }}>{Name}</h3>
            <div style={{display:'flex',marginRight:"150px",fontFamily:"sans-serif"}}>
                <a className="anchor" href="#elementskills"><h3>Skills</h3></a>
                <a className="anchor" href="#elementpro"><h3 >Projects</h3></a>
                <a className="anchor" href="#elementcerti"><h3 >Certifications</h3></a>
                <a className="anchor" href="#elementconnect"><h3 >Connect</h3></a>
            </div>

        </div>
    )
}

export default Navbar