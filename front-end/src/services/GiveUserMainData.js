import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserPage from '../components/UserPage/UserPage';
import ErrorPage from '../components/UserPage/ErrorPage';
import { USER_MAIN_DATA } from '../mocked-data/USER_MAIN_DATA'


/**
 * File containing the function associated to the component displaying the user page information
 */


/**
 * Function to switch the data of the back-end to the mocked data
 * @param {Object[]} data
 * @param {number} id
 * @returns {Object}
 */
function giveMockedUserMainData(data, id) {
  for(let i=0; i<data.length; i++) {
    if(data[i].id === id) {
      return data[i]
    }
  }
}


/**
 * Function used to get the daily score of the user as function of the id
 * 
 * This function was created in order to correct a mistake in the back-end part
 * @param {Object} data
 * @param {number} id
 * @returns {number}
 */
function giveDailyScore(data, id) {
    const firstUserID = 12;
    const secondUserID = 18;
    
    if(id === firstUserID){
        const dailyScore = data.todayScore*100;
        return dailyScore
    } else if(id === secondUserID) {
        const dailyScore = data.score*100;
        return dailyScore
    } else{
        console.log('Your id value is different from 12 or 18')
    }
}

/**
 * Class created to formate the user data from the API
 * 
 * It is a constructor pattern containing the different user main data displayed on the page
 * excepted the data of the graphs
 * @param {Object} data
 * @param {boolean} isMocked
 * @returns {Object}
 */
class Main {
  constructor(data, isMocked) {
    this._data = data
    this._isMocked = isMocked
  }

  get id() {
    return this._data.id
  }

  get firstName() {
    return this._data.userInfos.firstName
  }

  get dailyScore() {
    if(this._isMocked) {
      const dailyScoreValue = this._data.todayScore*100;
      return dailyScoreValue
    } else {
      return giveDailyScore(this._data, this._data.id)
    }
  }

  get calorieCount() {
    /**
     * toFixed is used to display a number with three decimals and replace to change '.' to ','
     */
    return (this._data.keyData.calorieCount/1000).toFixed(3).replace(".",",")
  }

  get proteinCount() {
    return this._data.keyData.proteinCount
  }

  get carbohydrateCount() {
    return this._data.keyData.carbohydrateCount
  }

  get lipidCount() {
    return this._data.keyData.lipidCount
  }
}


/**
 * Function displaying the user page
 * 
 * We are using the hook useEffect() to make an API call by using the endpoint 
 * 'http://localhost:3000/user/id'
 * 
 * Here, we use an environment constante giving the port number
 * We also do the same for the constant isMocked
 * This is a boolean made to switch from the data of the back-end (isMocked = false)
 * to the mocked data (isMocked = true)
 * 
 * We obtain an object 'items' thanks to the hook useState() and we keep the .data element
 * 
 * Thus, the data will be sent in a component UserPage, which is a pattern of the user page
 * 
 * The id of the endpoint is obtained from the url thanks to the hook useParams()
 * 
 * The constant 'error' is made in order to display an error message if the data are not provided 
 * 
 * isLoaded is a waiting message during the data page loading
 */
export default function GiveUserMainData() {

    const isMocked = process.env.REACT_APP_MOCKED_DATA==='true';

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch(process.env.REACT_APP_PORT + '/user/' + id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [id])

    if (error) {
        return <ErrorPage />;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        let data = [];
        if(isMocked) {
          const idValue = Number(id);
          const mockedData = giveMockedUserMainData(USER_MAIN_DATA, idValue);
          data = new Main(mockedData, isMocked);
        } else{
          data = new Main(items.data, isMocked);
        }
        return(
          <React.Fragment>
              <UserPage data={data} />
          </React.Fragment>
        )
    }
}