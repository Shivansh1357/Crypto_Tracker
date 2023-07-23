import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'; // Don't get rid of this
import { ConvertNumbers } from '../../../Functions/ConvertNumbers';
const LineChart = ({chartData,priceType,multiAxis}) => {
    const options={
        plugins:{
            legend:{
                position:'top',
                display:multiAxis?true:false,
            },
        },
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        },
        scales: {
            crypto1: {
                type:"linear",
                display:true,
                position:"left",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(priceType=='prices'){
                            return '$' + value.toLocaleString();
                        }
                        else {
                            return '$' + ConvertNumbers(value);
                        }
                    }
                }
            },
            crypto2:{
                type:"linear",
                display:true,
                position:"right",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(priceType=='prices'){
                            return '$' + value.toLocaleString();
                        }
                        else {
                            return '$' + ConvertNumbers(value);
                        }
                    }
                }
            }
        }
    };
  return <Line data={chartData} options={options}/>
}

export default LineChart