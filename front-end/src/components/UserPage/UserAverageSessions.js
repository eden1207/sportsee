import React from 'react'
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/UserAverageSessions/UserAverageSessions.css'



function CustomLegend() {
  return(
      <div className='userAverageSessionsGraphTop'>
          <h3 className='userAverageSessionsGraphTitle'>Durée moyenne des sessions</h3>
      </div>
  )
}


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


export default function UserAverageSessions({ data }) {


    return (
        <ResponsiveContainer className='UserAverageSessions' width="31%" height="80%">
          <AreaChart 
                data={data}
                margin={{ top: 10, right: 25, left: 25, bottom: 20 }}
                >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={1}/>
              </linearGradient>
            </defs>
            <XAxis axisLine={false} tickLine={false} dataKey='day' />
            <YAxis axisLine={false} tickLine={false} hide />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} verticalAlign="top" />
            <Area type="monotone" activeDot={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 12, strokeOpacity: 0.2, r: 4 }} dataKey="sessionLength" stroke='url(#colorUv)' strokeWidth={2} fill={'#ffffff'} fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      );
}

UserAverageSessions.propTypes = {
  id: PropTypes.number
}

/*
margin={{ top: 10, right: 25, left: 25, bottom: 20 }}
 */