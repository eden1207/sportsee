import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/UserPerformance/UserPerformance.css'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';




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
  id: PropTypes.number
}