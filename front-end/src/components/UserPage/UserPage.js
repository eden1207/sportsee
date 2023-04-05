import React from 'react'
import PropTypes from 'prop-types';

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


/**
 * Function UserPage used as a pattern to display the different user data
 * 
 * 
 * Header is a component displaying the header
 * 
 * IconTape displays the vertical black tape with icons
 * 
 * PageTitle is a component to provide the title and the user's firstname
 * 
 * The three components 'GiveUserActivity', 'GiveUserAverageSessions' and 'GiveUserPerformance' 
 * are used to display the three graphs
 * 
 * UserTodayScore displays the daily user score
 * 
 * Finally, the components 'UserMainDataCard' provide the main informations on the right 
 * such as the calories rates and so on
 */


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

UserPage.propTypes = {
    data: PropTypes.object
}