import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        
        <div className="contact-us">
          <h1>Contact us: By Phone</h1>
          <h2>+31 555 8888</h2>
          <img className="map" src="assets/map.png" alt="map" />
        </div>

        <div className="socials">
          <h1>Find us on Social Media!</h1>
            <div className="social-icons">
              <img src="assets/download.png" />
              <img src="assets/instagram.png" />
              <img src="assets/facebook.png" />
            </div>

            <div className="picture-contact">
              <img src="assets/Ella2.jpg" />
            </div>
            
        </div>    
        
      </div>
    );
  }
}

export default About;