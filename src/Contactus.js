import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMapMarker from 'react-icons/lib/fa/map-marker'

export default function Contactus(props) {

  return(
    <div className="contact">
      <div className="contact-icons">
        <a href="mailto:mail@thedan.com.au"><FaEnvelope />
        </a>        
        <a href="tel:+61393471502"><FaPhone />
        </a>
        <a href="https://twitter.com/danochotel"><FaTwitter />
        </a>
      </div>
      <div className="contact-details">
        <p>tel:+61393471502</p>
        <p>mail@thedan.com.au</p>
        <p>'https://twitter.com/danochotel'</p>
      </div>
    </div>  
  )
}
      // <p><FaMapMarker/> 225 Canning St, Carlton, VIC 3053 </p> 