import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/UserPerformance/UserPerformance.css'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function UserPerformance({ data }) {

    return (
        <ResponsiveContainer className='UserPerformance' width="30%" height="80%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="value" stroke="#000000" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
    );
}

UserPerformance.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}