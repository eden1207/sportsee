import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/UserPerformance/UserPerformance.css'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';


import { USER_PERFORMANCE } from '../../data/USER_PERFORMANCE'

/*------------ User Performance -------------*/

function getUserPerformanceData(data, id) {

  const userData = data.filter((e) => {
    if(e.userId === id) {
      return true
    } else{
      return false
    }
  })

  return userData[0]
}

function transformData(data) {

  data.forEach((e) => {

    switch (e.kind) {

      case 1:
        e.kind = 'Cardio';
      break;

      case 2:
        e.kind = 'Energie';
      break;

      case 3:
        e.kind = 'Endurance';
      break;

      case 4:
        e.kind = 'Force';
      break;

      case 5:
        e.kind = 'Vitesse';
      break;

      case 6:
        e.kind = 'Intensité';
      break;

      default:
        console.log('Unknown value');
    }
  })

  return data
}







export default function UserPerformance({ id }) {

  const datas = getUserPerformanceData(USER_PERFORMANCE, id);

  const transformedData = transformData(datas.data);


    return (
        <ResponsiveContainer className='UserPerformance' width="31%" height="80%">
          <RadarChart outerRadius='61%' data={transformedData}>
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