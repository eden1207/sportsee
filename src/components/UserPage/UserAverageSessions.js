import React from 'react'
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import '../../styles/UserAverageSessions/UserAverageSessions.css'


export default function UserAverageSessions({ userSessionsData }) {

    return (
        <ResponsiveContainer className='UserAverageSessions' width="30%" height="80%">
          <LineChart data={userSessionsData}>
            <XAxis axisLine={false} tickLine={false} dataKey='day' />
            <YAxis axisLine={false} tickLine={false} hide />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false}  />
          </LineChart>
        </ResponsiveContainer>
      );
}

UserAverageSessions.propTypes = {
  userSessionsData: PropTypes.arrayOf(PropTypes.object)
}