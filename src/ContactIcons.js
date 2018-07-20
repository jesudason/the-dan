import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import FaFacebook from 'react-icons/lib/fa/facebook'

export default function ContactIcons(props) {

  return(
    <div className="contact-icons">
      <a href="tel:+61393471502"><FaPhone />
      </a>
      <a href="mailto:mail@thedan.com.au"><FaEnvelope />
      </a>        
      <a href="https://twitter.com/danochotel"><FaTwitter />
      </a>
      <a href="https://twitter.com/danochotel"><FaFacebook/></a>
    </div>
    )
}