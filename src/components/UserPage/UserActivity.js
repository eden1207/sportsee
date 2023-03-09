import React from 'react'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GiPlainCircle } from "react-icons/gi";
import '../../styles/UserActivity/UserActivity.css'



  function CustomTooltip({ kilogram, calories }) {
    return(
        <ul className='Tooltip'>
            <li>{kilogram}kg</li>
            <li>{calories}Kcal</li>
        </ul>
    )
  }

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


export default function UserActivity({ userActivityData }) {

    return (
        <ResponsiveContainer className='UserActivityGraph' width="90%" height="48%">
          <BarChart data={userActivityData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="day" />
            <YAxis tickLine={false} orientation='right' axisLine={false} />
            <Tooltip content={<CustomTooltip kilogram={userActivityData.kilogram} calories={userActivityData.calories} />} />
            <Legend content={<CustomLegend />} verticalAlign="top" />
            <Bar dataKey="kilogram" barSize={10} radius={[5, 5, 0, 0]} fill="#282D30" />
            <Bar dataKey="calories" barSize={10} radius={[5, 5, 0, 0]} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
    );
}

UserActivity.propTypes = {
  userActivityData: PropTypes.arrayOf(PropTypes.object)
}