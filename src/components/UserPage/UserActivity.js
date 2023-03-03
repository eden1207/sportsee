import { React } from 'react'

//import React, { PureComponent } from 'react';
//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/UserActivity/UserActivity.css'

import { GiPlainCircle } from "react-icons/gi";


  const data = [
    {
      name: '1',
      kilogram: 80,
      calories: 240,
    },
    {
      name: '2',
      kilogram: 80,
      calories: 220,
    },
    {
      name: '3',
      kilogram: 81,
      calories: 280,
    },
    {
      name: '4',
      kilogram: 81,
      calories: 290,
    },
    {
      name: '5',
      kilogram: 80,
      calories: 160,
    },
    {
      name: '6',
      kilogram: 78,
      calories: 162,
    },
    {
      name: '7',
      kilogram: 76,
      calories: 390,
    },
  ];


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


export default function UserActivity() {

    return (
        <ResponsiveContainer className='UserActivityGraph' width="90%" height="48%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} orientation='right' axisLine={false} />
            <Tooltip content={<CustomTooltip kilogram={data[0].kilogram} calories={data[0].calories} />} />
            <Legend content={<CustomLegend />} verticalAlign="top" />
            <Bar dataKey="kilogram" barSize={10} radius={[5, 5, 0, 0]} fill="#282D30" />
            <Bar dataKey="calories" barSize={10} radius={[5, 5, 0, 0]} fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      );
}