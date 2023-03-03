import { React } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import '../../styles/UserTodayScore/UserTodayScore.css'


const data = [
  {
    name: '18-24',
    uv: 0.12,
    pv: 2400,
    fill: '#8884d8',
  },
];



export default function UserTodayScore() {

    return (
        <div className='UserTodayScore'>
            <h3>Score</h3>
            <ResponsiveContainer width="30%" height="85%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="75%" outerRadius="75%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}