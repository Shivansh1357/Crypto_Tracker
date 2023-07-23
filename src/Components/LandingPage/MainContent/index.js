import React from 'react'
import "./style.css"
import Button from '../../Common/Button'
import iphone from "../../../../src/assets/iphone.png"
import gradient from "../../../../src/assets/gradient.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { RWebShare } from 'react-web-share'
import { Today } from '@mui/icons-material'
const MainContent = () => {
  return (
    <div className='flex-container'>
      <div className='left-component'>
      <motion.h1 
      className='track-crypto-heading'
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      >
        Track Crypto
      </motion.h1>
      <motion.h1 
      className='real-time-heading'
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5,delay:.5}}
      >
        Real Time.
        </motion.h1>
      <motion.p 
      className='para-content'
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5,delay:.5}}
      >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
      <motion.div 
          className='btns'
          initial={{opacity:0,x:50}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.5,delay:.8}}
      >
         <Link to='/dashboard'>
          <Button text={"Dashboard"}   onClick={()=>console.log("Clicked")}/>
        </Link>
        <RWebShare 
                data={{
                  text: "Crypto Dashboard home page",
                  url: "https://on.natgeo.com/2zHaNup",
                  title: "CryptoTracker.",
                }}
                sites={["facebook","twitter","whatsapp","reddit","telegram","linkedin","mail","copy"]}
                onClick={() => console.log("shared successfully!")}
                disableNative={true}   
                closeText={"Close"} 
                
         >
        <Button text={'Share App'} outline={true} onClick={()=>Today("App shared successfully")} />
        </RWebShare>
      
      </motion.div>
      </div>
      <div className='phone-component'>
          <img src={gradient}  className='gradient'/>
          <motion.img 
          src={iphone} 
          className='iphone'
          initial={{y:-10}}
          animate={{y:10}}
          transition={{
            type:'smooth',
            repeatType:'mirror',
            duration: 2,
            repeat:Infinity,
          }}
          
          />
      </div>
    </div>
  )
}

export default MainContent