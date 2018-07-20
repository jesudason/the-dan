import React from 'react'
import Hours from './Hours'
import Location from './Location'
import Contactus from './Contactus'
import Nav from './Nav'
import style from './style.css'
import Gallery from './Gallery.js'
import AboutUs from './AboutUs.js'
import Functions from './Functions.js'
import Events from './Events.js'
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import FaTwitter from 'react-icons/lib/fa/twitter'; 
import ContactIcons from './ContactIcons'

export default class App extends React.Component {

  render() {
    return <div className="wrapper">

      <section className="bg1">
        <img className="logo" src="https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty4/seller/Dan-logo-LARGE-171103-075155.png" alt=""/>
        <Nav/>
      </section>
      <section className="section short about" id="about-us">  
        <AboutUs/>
      </section>
      <section className="bg3">
        <div className="menu-downloads">
          <button>View Menu</button>
          <button>View Drinks List</button>
        </div>
      </section> 
      <section className="section short functions" id="functions">
        <Functions/>
      </section>        
      <section className="bg2">
      </section>
      <section className="section short" id="events">
        <Events/>
      </section>      
      <section className="bg3">
      </section> 
      <section className="section long gallery" id="gallery">
        <Gallery/>
      </section>                  
      <section className="bg4">
        <ContactIcons/>
      </section>
      <section className="section long contact" id="contact-us">  
        <Hours/>
        <Contactus/>
        <Location/>        
      </section>   
    </div>
  }

}
