import React, { useState,useEffect } from 'react'
import Header from "../Components/Common/Header"
import TabsComponent from "../Components/Dashboard/Tabs"
import axios from 'axios'
import Search from '../Components/Dashboard/Search'
import PaginationComponent from '../Components/Dashboard/Pagination'
import Loader from '../Components/Common/Loader'
import BackToTop from '../Components/Common/BackToTop'
import { get100Coins } from '../Functions/get100Coins'
import Footer from '../Components/Common/Footer'
const DashboardPage = () => {
  const [coins,setCoins]=React.useState([])
  const [paginatedCoins,setPaginatedCoins]=React.useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [search,setSearch]=useState('')
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex=(value-1)*10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
  };
  const  onSearchChange=(e)=>{
    setSearch(e.target.value);
   
  }
  var filteredCoins=coins.filter((coin)=>(
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  ));


  useEffect(()=>{
    // const API=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    getData();


  },[])
  const getData=async ()=>{
    const data =await get100Coins();
    if(data){
      setCoins(data)
      setPaginatedCoins(data.slice(0,10))
      setIsLoading(false)
    }
  }
  return (
    <>
        
    <Header/>
        
    {
      isLoading?
      <Loader/>:
      <div>
      
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search ? filteredCoins: paginatedCoins}    setSearch={setSearch}/>
      {
        !search && 
        (
        <PaginationComponent  page={page} handleChange={handlePageChange}/>
        )
      }

    </div>
    }
    <BackToTop/>
    <Footer/>
    </>
    
  )
}

export default DashboardPage