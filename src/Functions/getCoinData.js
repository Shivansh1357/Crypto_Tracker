import axios from "axios"


export const getCoinData=(id)=>{
    const myData=axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(response=>{
                return response.data
                // //passing data to filter it to store only useful info by CoinObject Function
                // CoinObjectject(setCoinData,response.data)
                // console.log("get Coin data Reponse",response.data);
            })
            .catch(err=>{
                console.log(err,"Error")
            })
    return myData;
}