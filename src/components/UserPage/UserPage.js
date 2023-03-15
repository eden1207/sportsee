import React from 'react'

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



import { USER_MAIN_DATA } from '../../data/USER_MAIN_DATA'


function userMainData(data, id) {

  const userData = data.filter((e) => {
    if(e.id === id) {
      return true
    } else{
      return false
    }
  })

  const firstName = userData[0].userInfos.firstName;

  const dailyScore = userData[0].todayScore*100;

  const calorieCount = (userData[0].keyData.calorieCount/1000).toFixed(3).replace(".",",");
  const proteinCount = userData[0].keyData.proteinCount;
  const carbohydrateCount = userData[0].keyData.carbohydrateCount;
  const lipidCount = userData[0].keyData.lipidCount;

  return({ firstName, dailyScore, calorieCount, proteinCount, carbohydrateCount, lipidCount })
}



export default function UserPage() {

  const id = 18;

  const data = userMainData(USER_MAIN_DATA, id);

    return (
        <div className='Userpage Userpage_dimensions'>
            <Header />
            <div className='Main Main_dimensions'>
                <IconsTape />
                <div className='PageContent'>
                    <PageTitle name={data.firstName} />
                    <div className='DataPart DataPart_dimensions'>
                        <div className='UserGraphs UserGraphs_dimensions'>
                            <UserActivity id={id} />
                            <div className='OtherDatas'>
                                <UserAverageSessions id={id} />
                                <UserPerformance id={id} />
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