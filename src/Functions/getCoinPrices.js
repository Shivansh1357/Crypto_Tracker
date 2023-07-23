import axios from "axios";

export const getCoinPrices=(id,days,priceType)=>{
    const prices=axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`, {crossDomain:true})
            .then(response=>{
                
                console.log("getCoinPrice Response",response.data[priceType]);
                return response.data[priceType];
             
            })
            .catch(err=>{
                console.log(err,"Error");
           
            })
    return prices;
}