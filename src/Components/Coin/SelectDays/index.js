import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './styles.css'
export default function SelectDays({days,handleDaysChange,noPTag}) {

  


  return (
    < div className='select-days' >
{       !noPTag && <p className='price-change' >Price Change in </p>}      
  <Select
            sx={
                {
                height:"2.5rem",
                color:"var(--white)",
                "& .MuiOutlinedInput-notchedOutline":{
                    borderColor:"var(--white)",
                },
                "& .MuiSvgIcon-root":{
                    color:"var(--white)",
                },
                "&:hover":{
                    "&& fieldset":{
                        borderColor:"#3a80e9",
                    },
                },
            }}
          value={days}
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>365 Days</MenuItem>
        </Select>
    </div>
  );
}