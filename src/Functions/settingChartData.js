import { convertDate } from "./convertDate";

export const settingChartData=(setChartData,prices1,prices2,crypto1,crypto2)=>{
  // console.log("Both prices ftchh>>>>>>>>>>>>>>>>>>>>>>>>>>",prices1)
  if(prices2)  {
  setChartData({
      labels: prices1.map((price)=>convertDate(price[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1.map((price)=>price[1]),
          borderColor: "#3a80e9",
          borderWidth:2,
          fill:false,
          tension:0.25,
          backgroundColor:"transparent",
          pointRadius:0,
          yAxisID: 'crypto1',
        },
      {
          label: "Crypto2",
          data: prices2.map((price)=>price[1]),
          borderColor: "#61c96f",
          borderWidth:2,
          fill:false,
          tension:.25,
          backgroundColor:"transparent",
          pointRadius:0,
          yAxisID: 'crypto2', 
        },
      ],
  });
  }
  else{
    setChartData({
      labels: prices1.map((price)=>convertDate(price[0])),
      datasets: [
        {
          label: 'Graphical Representation',
          data: prices1.map((price)=>price[1]), 
          borderColor: "#3a80e9",
          borderWidth:2,
          fill:true,
          tension:.25,
          backgroundColor:"rgba(58,128,233,.1)",
          pointRadius:0,
          yAxisID: 'crypto1',
        },
      ],
  });
  }
    
}