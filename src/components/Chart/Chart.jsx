import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2';

// Chart.defaults.global.legend.display = false;

const Chart = () => {
    const [ChartData, setChartData] = useState({})
    const chart =() => {
        setChartData({
            labels: ['monday', 'tuesday', "wednesday", 'thursday', 'friday'],
            datasets: [
                {label: 'level of thickness',
                
            data: [32, 45, 12, 76, 65],
        backgroundColor: ['rgba(75, 196, 0, 0.6)'
    ], 
    borderWidth: 4},
    
            ]
        })
        
    }
    useEffect(() => {
        chart ()
    });
    
    return (
        <div>
            <div style={{height: '100%', width: '90%'}}>
            <Line data={ChartData} options={{responsive:true ,
            scales:{ 
                yAxes: [
                    {
                        ticks: { 
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                        display: false
                    }
                }
                ]
            }
            }}/>  
            </div>
        </div>
    )
}

export default Chart
