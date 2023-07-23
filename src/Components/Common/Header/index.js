import React, { useEffect, useState } from 'react'
import "./styles.css"
import TemporaryDrawer from './Drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { Switch } from '@mui/material'
import { toast } from 'react-toastify'
const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className='nav-bar'>
      <Link to={'/'}>  
          <h1 >CryptoTracker<span style={{color:"var(--blue)", cursor:"pointer"}}>.</span></h1>
</Link>
      <div className='links'>
      <Switch className='link'
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <Link to='/'><p className='link'>Home</p></Link>
        <Link to='/compare'><p className='link'>Compare</p></Link>
        <Link to='/watchlist'><p className='link'>Watchlist</p></Link>
        <Link to='/dashboard'>
          <Button text={"Dashboard"}   onClick={()=>console.log("Clicked")}/>
        </Link>
      </div>
      <div className='drawr-div'><TemporaryDrawer /></div>
    </div>

  )
}

export default Header