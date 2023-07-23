import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { toast } from 'react-toastify';
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  React.useEffect(() => {
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
    <div>


      <MenuRoundedIcon onClick={() => { setState(true) }}/>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={() => setState(false)}
      >
        <div className='drawer-links'>
          <Link to='/'><p className='link'>Home</p></Link>
          <Link to='/compare'><p className='link'>Compare</p></Link>
          <Link to='/watchlist'><p className='link'>Watchlist</p></Link>
          <Link to='/dashboard'><p className='link'>Dashboard</p></Link>
          <Switch className='link'
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        </div>
      </Drawer>


    </div>
  );
}