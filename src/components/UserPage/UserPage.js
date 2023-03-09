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
import { USER_ACTIVITY } from '../../data/USER_ACTIVITY'
import { USER_AVERAGE_SESSIONS } from '../../data/USER_AVERAGE_SESSIONS'
import { USER_PERFORMANCE } from '../../data/USER_PERFORMANCE'




/*------- Import User_Main_Data --------------*/


function getUserMainData(data, id) {

    const userData = data.filter((e) => {
      if(e.id === id) {
        return true
      } else{
        return false
      }
    })
  
    return userData[0]
}

class MainDataCard {
    constructor(data) {
        this._data = data
    }

    get() {

        /* User Main Card Data */
        const userInfos = this._data.userInfos;

        const firstName = userInfos.firstName;

        /* User Today Score */
        const todayScore = this._data.todayScore*100;

        /* User Main Card Data */
        const keyData = this._data.keyData;

        const calorieCount = (keyData.calorieCount/1000).toFixed(3).replace(".",",");
        const proteinCount = keyData.proteinCount;
        const carbohydrateCount = keyData.carbohydrateCount;
        const lipidCount = keyData.lipidCount;

        return({ firstName, todayScore, calorieCount, proteinCount, carbohydrateCount, lipidCount })
    }
}

const userMainData = getUserMainData(USER_MAIN_DATA, 12);

const userFirstName = new MainDataCard(userMainData).get().firstName;

const todayScore = new MainDataCard(userMainData).get().todayScore;

/* User Main Card Data */
const calorieCount = new MainDataCard(userMainData).get().calorieCount;
const proteinCount = new MainDataCard(userMainData).get().proteinCount;
const carbohydrateCount = new MainDataCard(userMainData).get().carbohydrateCount;
const lipidCount = new MainDataCard(userMainData).get().lipidCount;

/*------------ User Performance -------------*/

function getUserPerformanceData(data, id) {

    const userData = data.filter((e) => {
      if(e.userId === id) {
        return true
      } else{
        return false
      }
    })
  
    return userData[0]
}

const userPerformanceData = getUserPerformanceData(USER_PERFORMANCE, 12);
const data = userPerformanceData.data;

/*---------------------------------------------------------------------------------------------*/

/* Import USER_AVERAGE_SESSIONS */

function getUserSessionsData(data, id) {

  const userData = data.filter((e) => {
    if(e.userId === id) {
      return true
    } else{
      return false
    }
  })

  return userData[0].sessions
}

const userSessionsData = getUserSessionsData(USER_AVERAGE_SESSIONS, 12);
//const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];


/*-------------- User Activity -------------------------*/

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

  const userActivityData = getUserActivityData(USER_ACTIVITY, 12);

/*---------------------------------------------------------------------------------------------*/







export default function UserPage() {

    return (
        <div className='Userpage Userpage_dimensions'>
            <Header />
            <div className='Main Main_dimensions'>
                <IconsTape />
                <div className='PageContent'>
                    <PageTitle name={userFirstName} />
                    <div className='DataPart DataPart_dimensions'>
                        <div className='UserGraphs UserGraphs_dimensions'>
                            <UserActivity userActivityData={userActivityData} />
                            <div className='OtherDatas'>
                                <UserAverageSessions userSessionsData={userSessionsData} />
                                <UserPerformance data={data} />
                                <UserTodayScore score={todayScore} />
                            </div>
                        </div>
                        <div className='UserMainData UserMainData_dimensions'>
                            <UserMainDataCard symbol={<GoFlame />} color={'Red'} title={calorieCount + 'kCal'} name={'Calories'} />
                            <UserMainDataCard symbol={<GiChickenLeg />} color={'Blue'} title={proteinCount + 'g'} name={'Proteines'} />
                            <UserMainDataCard symbol={<FaAppleAlt />} color={'Yellow'} title={carbohydrateCount + 'g'} name={'Glucides'} />
                            <UserMainDataCard symbol={<FaHamburger />} color={'Pink'} title={lipidCount + 'g'} name={'Lipides'} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}