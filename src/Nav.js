import React from 'react'
import Scrollchor from 'react-scrollchor';

export default function Nav(props) {
  return(
    <div className="nav">
      <ul>
        <li><Scrollchor to="#about-us" className="nav-link">About us</Scrollchor></li>
        <li><Scrollchor to="#functions" className="nav-link">Functions</Scrollchor></li>
        <li><Scrollchor to="#events" className="nav-link">Events</Scrollchor></li>
        <li><Scrollchor to="#contact-us" className="nav-link">Contact Us</Scrollchor></li>
        <li><Scrollchor to="#socials" className="nav-link">Socials</Scrollchor></li>
      </ul>
     </div>  

    )
}