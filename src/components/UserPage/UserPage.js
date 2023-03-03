import { React } from 'react'

import '../../styles/UserPage/UserPage.css'

import { GoFlame } from "react-icons/go";
import { FaAppleAlt, FaHamburger } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";

import Header from './Header'
import IconsTape from './IconsTape'
import PageTitle from './PageTitle'
import UserMainDataCard from './UserMainDataCard'
import UserActivity from './UserActivity'
import UserAverageSessions from './UserAverageSessions';
import UserPerformance from './UserPerformance';
import UserTodayScore from './UserTodayScore';


export default function UserPage() {

    return (
        <div className='Userpage Userpage_dimensions'>
            <Header />
            <div className='Main Main_dimensions'>
                <IconsTape />
                <div className='PageContent'>
                    <PageTitle />
                    <div className='DataPart DataPart_dimensions'>
                        <div className='UserGraphs UserGraphs_dimensions'>
                            <UserActivity />
                            <div className='OtherDatas'>
                                <UserAverageSessions />
                                <UserPerformance />
                                <UserTodayScore />
                            </div>
                        </div>
                        <div className='UserMainData UserMainData_dimensions'>
                            <UserMainDataCard symbol={<GoFlame />} color={'Red'} title={'1,930kCal'} name={'Calories'} />
                            <UserMainDataCard symbol={<GiChickenLeg />} color={'Blue'} title={'155g'} name={'Proteines'} />
                            <UserMainDataCard symbol={<FaAppleAlt />} color={'Yellow'} title={'290g'} name={'Glucides'} />
                            <UserMainDataCard symbol={<FaHamburger />} color={'Pink'} title={'50g'} name={'Lipides'} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}