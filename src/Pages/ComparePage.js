import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import SelectDays from '../Components/Coin/SelectDays'
import SelectCoins from '../Components/Compare/SelectCoins'
import { getCoinPrices } from '../Functions/getCoinPrices'
import { getCoinData } from "../Functions/getCoinData"
import CoinObject from "../Functions/CoinObject"
import List from "../Components/Dashboard/List"
import Loader from '../Components/Common/Loader'
import { get100Coins } from '../Functions/get100Coins'
import { settingChartData } from '../Functions/settingChartData'
import CoinInfo from '../Components/Coin/CoinInfo'
import LineChart from '../Components/Coin/LineChart'
import TogglePriceTypes from '../Components/Coin/PriceTypes'
import Footer from '../Components/Common/Footer'
const ComparePage = () => {
    const [allCoins, setAllCoins] = useState([]);
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState();
    const [crypto2Data, setCrypto2Data] = useState();
    const [days, setDays] = useState(30);
    const [isLoading, setIsLoading] = useState(true)
    const [priceType, setPriceType] = useState('prices');
    const [chartData, setChartData] = useState({});
    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(event.target.value);
        if (newType == null) {
            const prices1 = await getCoinPrices(crypto1, days, event.target.value);
            const prices2 = await getCoinPrices(crypto2, days, event.target.value);
            settingChartData(setChartData,prices1,prices2);
            setIsLoading(false);
        }
        else {
            setPriceType(newType);
            const prices1 = await getCoinPrices(crypto1, days, newType);
            const prices2 = await getCoinPrices(crypto2, days, newType);
            settingChartData(setChartData, prices1, prices2);
            setIsLoading(false);

        }
    }
    async function handleDaysChange(event) {
        setIsLoading(true)

        setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
        settingChartData(setChartData,prices1,prices2);
        setIsLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    async function getData() {

        setIsLoading(true);
        const myCoins = await get100Coins();
        if (myCoins) {
            setAllCoins(myCoins);
        }
      
        const data1 = await getCoinData(crypto1);
        
        if (data1) {
            const data2 = await getCoinData(crypto2);
            CoinObject(setCrypto1Data, data1)
            console.log("DATA!1",crypto1)
            if (data2) {
                CoinObject(setCrypto2Data, data2)
                console.log("DATA!2",crypto2)
                const prices1 = await getCoinPrices(crypto1, days,priceType);
                const prices2 = await getCoinPrices(crypto2, days,priceType);
              
                settingChartData(setChartData,prices1,prices2);
           
                setIsLoading(false)
            }
        }
    }
    const handleCoinsChange = async (event, isCoin2) => {
        setIsLoading(true)
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data2 = await getCoinData(event.target.value);
            if (data2) {

                CoinObject(setCrypto2Data, data2)
            }

            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            if(prices1 && prices2){
                settingChartData(setChartData,prices1,prices2);

                console.log("Both Prices Fetched",prices2)
                setIsLoading(false)
            }
        }
        else {
            setCrypto1(event.target.value);
            const data1 = await getCoinData(event.target.value);
            if (data1) {
                CoinObject(setCrypto1Data, data1)
            }
            // const prices1 = await getCoinPrices(event.target.value, days, priceType);
            // const prices2 = await getCoinPrices(crypto2, days, priceType);
        }
        setIsLoading(false)

    }

    return (
        <div>
            <Header />
            {
                isLoading ?
                    (<Loader />) :
                    (
                        <>
                            <div className='select-days-flex'>
                                <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinsChange={handleCoinsChange} />
                                <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true} />
                            </div>
                            <div className="grey-wrapper">
                                <List coin={crypto1Data} />
                            </div>
                            <div className="grey-wrapper">
                                <List coin={crypto2Data} />
                            </div> 
                            <div className='grey-wrapper' style={{padding:"1rem"}}>
                            <TogglePriceTypes  priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                            <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
                            </div>
                           <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
                           <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/>



                        </>
                    )
            }
            <Footer/>
        </div>
    )
}

export default ComparePage