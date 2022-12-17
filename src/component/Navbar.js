import React from 'react'
import {Link} from 'react-scroll'

import '../resourse/css/navbar.css'
import pic from '../resourse/image/my-pic.jpg'

function Navbar(props) {
  const {id}=props;
  return (
    <div>
      <div className="navbar-sec">
          <img
          src={pic} 
          alt="my-pic"
          height={180}
          width={180}
          />
          <h3>Md. Jahid Hasan</h3>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={0}>Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={0}>About Me</Link>
          <Link to="Skill" spy={true} smooth={true} offset={-100} duration={0}>My Skill</Link>
          <Link to="Portfolio" spy={true} smooth={true} offset={-100} duration={0}>Profolio</Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={0}>Contact</Link>
      </div>

    </div>
  )
}

export default Navbar
