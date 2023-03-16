import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/UserTodayScore/UserTodayScore.css'

function CustomLegend({ score }) {
    return(
        <div className='userPerformanceLegend'>
            <div className='userPerformanceGraphTop'>
                <h3 className='userPerformanceGraphTitle'>Score</h3>
            </div>
            <div className='userPerformanceGraphLegend'>
                <p className='userPerformanceGraphLegendTitle'>
                    <span className='userPerformanceGraphLegendBoldTitle'>{score}%</span> 
                    <br />de votre objectif
                </p>
            </div>
        </div>
    )
}

function provideScore(score) {

    const data = [
        {
          "value": score,
          "color": '#ff0000'
        },
        {
          "value": 100-score,
          "color": '#fbfbfb'
        }
      ];

      return data
}



export default function UserTodayScore({ score }) {

    const data = provideScore(score);

    return (
        <ResponsiveContainer className='UserTodayScore' width='31%' height='80%'>
            <PieChart>
                <Legend content={<CustomLegend score={score} />} verticalAlign="top" />
                <Pie data={data} stroke='none' startAngle={90} endAngle={450}  cornerRadius={100} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="70%"    fill="#ff0000" >
                    {
                        data.map((entry, index) => (
                            <Cell key={`slice-${index}`} fill={entry.color} />
                        ))
                    }         
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}