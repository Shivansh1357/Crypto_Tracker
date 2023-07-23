import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {get100Coins} from "../../../Functions/get100Coins";
import "./style.css";
const SelectCoins = ({crypto1,crypto2,handleCoinsChange}) => {
  const [allCoins, setAllCoins] = useState([])


  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  
  useEffect(() => {
    getData();
}, []);

async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
}

  // console.log(allCoins,"allcoins")
  return (
    <div className="coin-flex">
      <p> Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        onChange={(event)=>handleCoinsChange(event,false)}
      >
        {
          allCoins?.filter((item)=>item.id!=crypto2).map((coin ,i)=>(
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))
        }
      </Select>
      <p> Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        onChange={(event)=>handleCoinsChange(event,true)}
      >
        {
          allCoins?.filter((item)=>item.id!=crypto1).map((coin ,i)=>(
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))
          }
      </Select>
    </div>
  )
}

export default SelectCoins