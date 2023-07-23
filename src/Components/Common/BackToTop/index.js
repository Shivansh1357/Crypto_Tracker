import React from 'react'
import "./styles.css"
import {motion} from "framer-motion"
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { Tooltip } from '@mui/material';
const BackToTop = () => {

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } 
    else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <motion.div 
    id='myBtn'
    className='arrow-container'
    onClick={()=>topFunction()}
    initial={{y:-10}}
    animate={{y:10}}
    transition={{
      type:'smooth',
      repeatType:'mirror',
      duration: 2,
      repeat:Infinity,
    }}
    >
        <Tooltip  title="Go back to top">
      <KeyboardDoubleArrowUpRoundedIcon
      
        sx={{fontSize:"2rem"}}
        />
        </Tooltip>
    </motion.div>

  )
}

export default BackToTop