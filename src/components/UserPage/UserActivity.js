import React from 'react'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPlainCircle } from "react-icons/gi";
import '../../styles/UserActivity/UserActivity.css'




import { USER_ACTIVITY } from '../../data/USER_ACTIVITY'


function getUserActivityData(data, id) {

  const userData = data.filter((e) => {
    if(e.userId === id) {
      return true
    } else{
      return false
    }
  })

  return userData[0].sessions
}

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


  function transformData(data) {

    data.forEach((e) => {

      const day = e.day.split('-')[2];
      e.day = Number(day);
    })
  
    return data
  }


export default function UserActivity({ id }) {

  const userActivityData = getUserActivityData(USER_ACTIVITY, id);
  const data = transformData(userActivityData);

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
  id: PropTypes.number
}

/*
          <BarChart 
                data={data}
                >
 */