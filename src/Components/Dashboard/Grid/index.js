import React, { useState } from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../Functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../Functions/removeFromWatchlist";
import { addToWatchlist } from "../../../Functions/addToWatchlist";
const Grid = ({ coin,delay,isWatchlistPage }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    className={`grid-container ${coin.price_change_percentage_24h<0 && "grid-container-red"}`}
    style={{ display: isWatchlistPage && !added && "none" }}
    >
      <div className='info-flex'>
        <img src={coin.image} className='coin-logo' />
        <div className='coin-name-flex'>
          <h3 className='coin-symbol'>{coin.symbol}</h3>
          <p className='coin-name'>{coin.name}</p>

        </div>

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
              />
              )
               : 
              (<StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
              )
            } 
          </IconButton> 
      </div>
      {coin.price_change_percentage_24h > 0 ?
        (<div className='chip-flex'>
          <div className='chip-price'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
          <div className='icon-chip'><TrendingUpRoundedIcon /></div>
        </div>
        ) :
        (<div className='chip-flex'>
          <div className='chip-price chip-red'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
          <div className='icon-chip chip-red'><TrendingDownRoundedIcon /></div>
        </div>)
      }
      <div className='info-container'>
        <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)" }}>${coin.current_price.toLocaleString()}</h3>
        <p className='total-volume'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
        <p className='total-volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
      </div>
    </motion.div>
    </Link>
  )
}

export default Grid