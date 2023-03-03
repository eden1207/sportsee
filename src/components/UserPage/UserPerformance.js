import { React } from 'react'

import '../../styles/UserPerformance/UserPerformance.css'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 90,
  },
  {
    subject: 'Vitesse',
    A: 200,
  },
  {
    subject: 'Force',
    A: 50,
  },
  {
    subject: 'Endurance',
    A: 140,
  },
  {
    subject: 'Energie',
    A: 120,
  },
  {
    subject: 'Cardio',
    A: 80,
  },
];



export default function UserPerformance() {

    return (
        <ResponsiveContainer className='UserPerformance' width="30%" height="80%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#000000" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
}