import React from 'react'
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/UserAverageSessions/UserAverageSessions.css'

/**
 * Function UserAverageSessions made to display the duration of each user sessions
 */


/**
 * Function associated to the component CustomLegend used to display the graph title
 */

function CustomLegend() {
  return(
      <div className='userAverageSessionsGraphTop'>
          <h3 className='userAverageSessionsGraphTitle'>Durée moyenne des sessions</h3>
      </div>
  )
}


/**
 * Function to create a tooltip displaying the value of a session duration
 * @param {boolean} active
 * @param {Array.<Object>} payload
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}min</p>
      </div>
    );
}

  return null;
};


/**
 * Main function displaying the duration of each user sessions
 * 
 * It returns different components which are ResponsiveContainer, AreaChart,
 * Area, Legend, Tooltip, linearGradient, XAxis and YAxis
 * 
 * The component ResponsiveContainer is used to make the graph responsive and fix the dimensions
 * 
 * 
 * AreaChart and Area are the components displaying the graph.
 * There are many arguments:
 * - margin: fixes the graph outer margins
 * - data and dataKey: receives the data
 * - fill: area color
 * - fillOpacity: area opacity
 * - stroke: curve line color (here, using a color gradient given by the component linearGradient)
 * - strokeWidth: thickness of the curve line
 * - active dot: fixes the appearence of the pointing dot on the curve line:
 *                    - fill: color of the dot
 *                    - r: radius of the dot
 *                    - stroke: color of the border area of the dot
 *                    - strokeWidth: thickness of the border area of the dot
 *                    - strokeOpacity: opacity of the border area of the dot
 * 
 * 
 * linearGradient is a component creating a gradient color of the curve line 
 * 
 * 
 * Tooltip is a component creating two area domains under the curve line and a tooltp following the cursor
 * - content: creates and customizes a toolTip 
 * - cursor: creates two domains under the curve line
 *             - stroke: color of the area following the cursor
 *             - strokeWidth: width of the area domain
 *             - strokeOpacity: opacity of the area domain
 *             - transform: makes the area following the cursor
 * 
 * 
 * Legend is a component giving the main title
 * 
 * 
 * XAxis and YAxis display the different axis:
 *  - axisline: displays the axis lines
 *  - tickline: displays the graduations
 *  - hide: delete the Y axis here
 *  - stroke: color of the X axis
 *  - fillOpacity: opacity of the X axis
 *  - dataKey: take the data
 */

export default function UserAverageSessions({ data }) {


    return (
        <ResponsiveContainer className='UserAverageSessions' width={245} height='88%'>
          <AreaChart 
                data={data}
                margin={{ top: 10, right: 15, left: 15, bottom: 20 }}
                >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={1}/>
              </linearGradient>
            </defs>
            <XAxis axisLine={false} tickLine={false} stroke="#ffffff" fillOpacity={0.4} dataKey='day' />
            <YAxis axisLine={false} tickLine={false} hide />
            <Tooltip cursor={{stroke: '#000000', strokeWidth: '100%', strokeOpacity: 0.1, transform: 'translate(123, 0)'}} content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} verticalAlign="top" />
            <Area type="monotone" activeDot={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 12, strokeOpacity: 0.2, r: 4 }} dataKey="sessionLength" stroke='url(#colorUv)' strokeWidth={2} fill={'#ffffff'} fillOpacity={0.05} />
          </AreaChart>
        </ResponsiveContainer>
      );
}

UserAverageSessions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}