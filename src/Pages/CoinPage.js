
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Common/Loader';
import Header from '../Components/Common/Header';
import CoinObject from '../Functions/CoinObject';
import List from "../Components/Dashboard/List"
import CoinInfo from "../Components/Coin/CoinInfo"
import { getCoinData } from '../Functions/getCoinData';
import {getCoinPrices} from '../Functions/getCoinPrices';
import LineChart from '../Components/Coin/LineChart';
import { convertDate } from '../Functions/convertDate';
import SelectDays from '../Components/Coin/SelectDays';
import { settingChartData } from '../Functions/settingChartData';
import PriceTypes from '../Components/Coin/PriceTypes';
import TogglePriceTypes from '../Components/Coin/PriceTypes';
import Footer from '../Components/Common/Footer';
const CoinPage = () => {
    const {id}=useParams();
    const [isLoading,setIsLoading]=useState(true);
    const [coinData,setCoinData]=useState();
    const [days,setDays]=useState(7);
    const [priceType, setPriceType] = useState('prices');

    const [chartData,setChartData]=useState({
        labels: [],
        datasets: [],
    });
    useEffect(()=>{
        if(id){
            getData();
            
        } 
    },[id])

    async function getData(){
        setIsLoading(true);
        const data=await getCoinData(id);
       
        if(data){
            CoinObject(setCoinData,data) //For Coin Obj being passed in the List
            const prices1=await getCoinPrices(id,days,priceType);
            if(prices1){
                settingChartData(setChartData,prices1);
                console.log("prices Are fetched")
                setIsLoading(false);
            }
        }
    }
    const handleDaysChange = async (event) => {
        setIsLoading(true)
        setDays(event.target.value);
        
        const prices=await getCoinPrices(id,event.target.value,priceType);
        if(prices){
            // console.log("prices>>>",prices);
            settingChartData(setChartData,prices)
            
            setIsLoading(false)
        }
    };

    const handlePriceTypeChange = async (event,newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices=await getCoinPrices(id,days,newType);
        if(prices){
            
            settingChartData(setChartData,prices)
            setIsLoading(false);
        }

    };


  return (
    <>
     <Header/>
    {
        isLoading? <Loader/>:
        <>
        <div className='grey-wrapper'>
            <List coin={coinData}/>
        </div>
        <div className='grey-wrapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceTypes priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType}/>
        </div>

        <CoinInfo heading={coinData.name} desc={coinData.desc}/>
        </>
    }
    <Footer/>
    </>
  )
}

export default CoinPage