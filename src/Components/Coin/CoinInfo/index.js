import React, { useState } from 'react'
import "./styles.css"
const CoinInfo = ({heading,desc}) => {
  const shortDesc=desc.slice(0,350)+"<span style='color:var(--grey)'> Read More...</span>";
  const longDesc=desc +"<span style='color:var(--grey)'> Read Less...</span>";
  const [flag,setFlag]=useState(false)
  return (
    <div className='grey-wrapper coin-info'>
        <h2 className='coin-info-heading'>{heading}</h2>
        <p onClick={()=>setFlag(!flag)} className='coin-info-desc' dangerouslySetInnerHTML={{__html:!flag?shortDesc:longDesc}}/>
    </div>
  )
}

export default CoinInfo