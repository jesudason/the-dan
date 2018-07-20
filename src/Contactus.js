import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMapMarker from 'react-icons/lib/fa/map-marker'

export default function Contactus(props) {

  return(
    <div className="contact-div">
      <div className="contact-details">
        <p><FaPhone />+61 3 9347 1502</p>
        <p><FaEnvelope />mail@thedan.com.au</p>
        <p><FaTwitter />twitter.com/danochotel</p>
      </div>
    </div>  
  )
}
      // <p><FaMapMarker/> 225 Canning St, Carlton, VIC 3053 </p> 