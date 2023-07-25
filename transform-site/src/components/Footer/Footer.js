import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.scss';

import FacebookIcon from '../../images/social/facebook.png';
import instaIcon from '../../images/social/instagram.png';
import twitterIcon from '../../images/social/twitter.png';

function Footer(props) {

    function handleLinkClick(link) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        window.open(link, "_blank");
      }

    return (
        <footer className="Footer">
            <div className='footer-section'>
            {/* <footer> */}
    {/* <p>&copy; 2023 Professional Hypnotherapy. All rights reserved. | Privacy Policy | Terms of Service</p> */}
    {/* <div class="social-icons"> */}
      {/* <a href="#"><img src="facebook.png" alt="Facebook"></a> */}
      {/* <a href="#"><img src="twitter.png" alt="Twitter"></a> */}
      {/* <a href="#"><img src="instagram.png" alt="Instagram"></a> */}
    {/* </div> */}
  {/* </footer> */}
            </div>
            <div className='footer-section'>
                <div className='sub-section copyright'>
                    <div className='sub-container'>
                        <span>&copy; 2023 Do Well 2 Transform. All rights reserved. | Privacy Policy | Terms of Service</span></div>
                </div>
                <div className='sub-section social'>
                    <div className='sub-container'>
                        <div className='social-icons'>
                            {/* <div className='image facebook' 
                            onClick={() => handleLinkClick('')}>
                                <div></div></div>
                            <div className='image instagram'
                            onClick={() => handleLinkClick('')}>
                                <div></div></div>
                            <div className='image twitter'
                            onClick={() => handleLinkClick('')}>
                                <div></div></div> */}
                            {/* <img src={FacebookIcon} alt='facebook' />
                            <img src={instaIcon} alt='instagram' />
                            <img src={twitterIcon} alt='twitter' /> */}
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;