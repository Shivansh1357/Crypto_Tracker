import React, { useState } from 'react'
import "./styles.css"
import {motion} from  "framer-motion"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { ConvertNumbers } from "../../../Functions/ConvertNumbers";
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchlist";
const List = ({ coin ,isWatchlistPage,delay}) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  const handleWatchlist =(event)=>{
    event.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
  }
  return (
      <Link to={`/coin/${coin.id}`}>
    <motion.tr className='list-row'
    style={{ display: isWatchlistPage && !added && "none" }}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    >
      <Tooltip title="Image">
        <td className='td-img'>
        <img src={coin.image} className='coin-logo' />
        </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement='bottom-start'>
        <td className='td-info-flex'>
          <div className='coin-name-flex'>
            <h3 className='coin-symbol coin-symbol-list'>{coin.symbol}</h3>
            <p className='coin-name coin-name-list'>{coin.name}</p>
          </div>
        </td>
        </Tooltip>
      <Tooltip title="Price" >
        {
        coin.price_change_percentage_24h > 0 ?
        (
        <td className='chip-flex' >
          <div className='chip-price '>{coin.price_change_percentage_24h.toFixed(2)} %</div>
          <div className='icon-chip td-icon'>< TrendingUpRoundedIcon  /></div>
        </td>
        ) :
        (<td className='chip-flex' >
          <div className='chip-price  chip-red'>{coin.price_change_percentage_24h.toFixed(2)} %</div>

          <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon /></div>
        </td>)
      }

       </Tooltip>
       <Tooltip title="Coin Price" placement='bottom-start'>
       <td className='info-container'>
        <p className='coin-price chip-price-list desktop-price' style={{ color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)" }}>${coin.current_price.toLocaleString()}</p>
      </td>
       </Tooltip>
      
      <Tooltip title="Total Volume">
      <td className='td-total-volume'>
        <p className='total-volume right-align'>{coin.total_volume.toLocaleString()}</p>
      </td>
       </Tooltip>
      
      <Tooltip title="Market Cap" >
      <td className='desktop-td-market'>
        <p className='total-volume right-align'>${coin.market_cap.toLocaleString()}</p>
      </td>
       </Tooltip>
       <Tooltip title="Market Cap" >
      <td className='mobile-td-market'>
        <p className='total-volume right-align'>${ConvertNumbers(coin.market_cap)}</p>
      </td>
       </Tooltip>
       <Tooltip title="Add to Watchlist" >
       <td style={{ width: "fit-content" }}> 
          <IconButton
          onClick={(e) => {
            e.preventDefault();
            if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
  
            } else {
                addToWatchlist(coin.id);
                setAdded(true);
  
            }
        }}
          >
                        {added ? (
            <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />)
               : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />)
}
          </IconButton>
       </td>
       </Tooltip>
    </motion.tr>
      </Link>
  )
}

export default List