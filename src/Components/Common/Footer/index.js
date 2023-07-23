import React from 'react'
import "./styles.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='footer'>
                <h1 onClick={()=>topFunction()}>CryptoTracker<span>.</span></h1>
      <div className='social-links'>
        <a href='https://facebook.com'>
        <FacebookIcon className='social-link'/>  
        </a>
        <a href='https://www.twitter.com'>
        <TwitterIcon className='social-link'/>
        </a>
        <a href='mailto:shivanshtripathi1357@gmail.com'>
        <MailIcon className='social-link'/>
        </a>
        <a href='https://www.instagram.com'>
        <InstagramIcon className='social-link'/>
        </a>
          </div>

    </div>
  )
}

export default Footer