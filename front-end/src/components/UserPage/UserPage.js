import React from 'react'

import '../../styles/UserPage/UserPage.css'

import { GoFlame } from "react-icons/go";
import { FaAppleAlt, FaHamburger } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";

import Header from './Header'
import IconsTape from './IconsTape'
import PageTitle from './PageTitle'
import UserMainDataCard from './UserMainDataCard'
import GiveUserActivity from '../../services/GiveUserActivity'
import GiveUserAverageSessions from '../../services/GiveUserAverageSessions'
import GiveUserPerformance from '../../services/GiveUserPerformance'
import UserTodayScore from './UserTodayScore';




export default function UserPage({ data }) {

    return (
        <div className='Userpage Userpage_dimensions'>
            <Header />
            <div className='Main Main_dimensions'>
                <IconsTape />
                <div className='PageContent'>
                    <PageTitle name={data.firstName} />
                    <div className='DataPart DataPart_dimensions'>
                        <div className='UserGraphs UserGraphs_dimensions'>
                            <GiveUserActivity />
                            <div className='OtherDatas'>
                                <GiveUserAverageSessions />
                                <GiveUserPerformance />
                                <UserTodayScore score={data.dailyScore} />
                            </div>
                        </div>
                        <div className='UserMainData UserMainData_dimensions'>
                            <UserMainDataCard symbol={<GoFlame />} color={'Red'} title={data.calorieCount + 'kCal'} name={'Calories'} />
                            <UserMainDataCard symbol={<GiChickenLeg />} color={'Blue'} title={data.proteinCount + 'g'} name={'Proteines'} />
                            <UserMainDataCard symbol={<FaAppleAlt />} color={'Yellow'} title={data.carbohydrateCount + 'g'} name={'Glucides'} />
                            <UserMainDataCard symbol={<FaHamburger />} color={'Pink'} title={data.lipidCount + 'g'} name={'Lipides'} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}