import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/UserPerformance/UserPerformance.css'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';


/*-- Function UserPerformance made to display the performance of each users in different fields --*/

/* It returns different components which are ResponsiveContainer, RadarChart,
   Radar, PolarGrid, PolarRadiusAxis and PolarAngleAxis */

/* The component ResponsiveContainer is used to make the graph responsive and fix the dimensions */

/* RadarChart fixes the limits of the graph and receives the data  */

/* Radar and PolarAngleAxis are the components displaying the graph.
   There are many arguments:
   - stroke: color of the border of the graph and values
   - dataKey: take the values to display
   - fill: color of the graph value area 
   - fillOpacity: opacity of the graph value area 
   - tickline: display the angle values graduation
*/

/* PolarRadiusAxis is the component displaying the radial axis.
   There are many arguments:
   - tick: displays the graduation of the radius axis
   - tickCount: fixes the number of lines around the web graph
   - axisLine: displays the radius axis
*/

/* PolarGrid displays the radial lines and the web color */

export default function UserPerformance({ data }) {

    return (
        <ResponsiveContainer className='UserPerformance' width="31%" height="80%">
          <RadarChart outerRadius='61%' data={data}>
            <PolarGrid radialLines={false} stroke="#ffffff" />
            <PolarRadiusAxis tickCount={6} axisLine={false} tick={false} />
            <PolarAngleAxis dataKey="kind" tickLine={false} stroke="#ffffff" />
            <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
    );
}

UserPerformance.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}