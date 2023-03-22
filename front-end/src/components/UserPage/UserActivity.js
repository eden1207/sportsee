import React from 'react'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPlainCircle } from "react-icons/gi";
import '../../styles/UserActivity/UserActivity.css'

/*-- Function UserActivity made to display the weight and calories of each user as function of the days --*/


/* Function to create a tooltip displaying the weight and calories  */

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip2">
          <p className="label">{`${payload[0].value}`}kg</p>
          <p className="label">{`${payload[1].value}`}kCal</p>
        </div>
      );
  }
  
    return null;
  };


  /* Function associated to the component CustomLegend used to display the graph legend the graph title */

  function CustomLegend() {
    return(
        <div className='userActivityGraphTop'>
            <h3 className='userActivityGraphTitle'>Activité quotidienne</h3>
            <ul className='userActivityGraphLegend'>
                <li><GiPlainCircle className='userActivityGraphLegendBlackPoint' />Poids (kg)</li>
                <li><GiPlainCircle className='userActivityGraphLegendRedPoint' />Calories brûlées (kCal)</li>
            </ul>
        </div>
    )
  }


/* Main function displaying the weight and calories of each user as function of the days */

/* It returns different components which are ResponsiveContainer, BarChart,
   Bar, Legend, Tooltip, CartesianGrid, XAxis and YAxis */

/* The component ResponsiveContainer is used to make the graph responsive and fix the dimensions */

/* BarChart and Bar are the components displaying the graph.
   There are many arguments:
   - margin: fixes the graph outer margins
   - data and dataKey: receives the data
   - fill: bars color
   - radius: around bars angles
   - barsize: bars' width
*/

/* Tooltip is a component creating a tooltp following the cursor
   - content: creates and customizes a toolTip 
   - cursor: toolTip's width
   - contentStyle: customizes the toolti appearence
*/

/* Legend is a component giving the main title and the graph legend */

/* XAxis and YAxis display the different axis:
   - axisline: displays the axis lines
   - tickline: displays the graduations
   - orientation: ut the y axis on the right of the graph
   - dataKey: take the data
*/

export default function UserActivity({ data }) {

    return (
        <ResponsiveContainer className='UserActivityGraph' width="90%" height="48%">
          <BarChart 
                data={data}
                margin={{ top: 15, right: 25, left: 50, bottom: 30 }}
              >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="day" />
            <YAxis tickLine={false} orientation='right' axisLine={false} />
            <Tooltip cursor={{width:100}} contentStyle={{ stroke: 'red', strokeWidth: 2 }} content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} verticalAlign="top" />
            <Bar dataKey="kilogram" barSize={10} radius={[5, 5, 0, 0]} fill="#282D30" />
            <Bar dataKey="calories" barSize={10} radius={[5, 5, 0, 0]} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
    );
}

UserActivity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}