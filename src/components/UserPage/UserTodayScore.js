import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import '../../styles/UserTodayScore/UserTodayScore.css'



export default function UserTodayScore({ score }) {

    const data = [
        { percent: 20, fill: '#83a6ed' },
        { percent: score, fill: '#ff0000' },
    ];

    return (
        <ResponsiveContainer className='UserTodayScore' width='30%' height='85%'>
            <RadialBarChart cx="50%" cy="50%" innerRadius='60%' outerRadius="80%" data={data}>
                <RadialBar minAngle={15}  background clockWise={true} dataKey='percent'/>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}