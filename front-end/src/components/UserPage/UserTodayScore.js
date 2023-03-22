import React from 'react'
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/UserTodayScore/UserTodayScore.css'


/*-- Function UserTodayScore made to display the daily score of each users --*/

/* Function associated to the component CustomLegend used to display
   the graph title and the score in tke center of the graph */

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


/* Function made to treat the data before to inject it inside the component
   used to display the data on a graph. For a Pie component here, there are
   two domains represented by two obecjts in an array. The first one is the score value (%)
   and the other one is the rest of the score that the user have not reached */

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


/* Main function displaying the score of each users */

/* It returns different components which are ResponsiveContainer, PieChart,
   Pie, Legend and Cell */

/* The component ResponsiveContainer is used to make the graph responsive and fix the dimensions */

/* PieChart and Pie are the components displaying the graph.
   There are many arguments:
   - data: receives the data
   - stroke: border of the graph
   - startAngle, endAngle: fix the start and the end of the graph scale
   - cornerRadius: round the graph line angle
   - dataKey: take the values to display
   - cx, cy: fix the center of the graph
   - innerRadius, outerRadius: fix the thickness of the graph line
   - fill: color of the graph 
*/

/* Cell is a component to fix the number of domain to display */

export default function UserTodayScore({ score }) {

    const data = provideScore(score);

    return (
        <ResponsiveContainer className='UserTodayScore' width='31%' height='80%'>
            <PieChart>
                <Legend content={<CustomLegend score={score} />} verticalAlign="top" />
                <Pie data={data} stroke='none' startAngle={90} endAngle={450}  cornerRadius={100} dataKey="value" cx="50%" cy="50%" innerRadius="60%" outerRadius="70%" fill="#ff0000" >
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

UserTodayScore.propTypes = {
    score: PropTypes.number
}