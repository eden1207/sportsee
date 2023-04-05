import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserActivity from '../components/UserPage/UserActivity';
import ErrorPage from '../components/UserPage/ErrorPage';
import { USER_ACTIVITY } from '../mocked-data/USER_ACTIVITY'


/**
 * File containing the function associated to the component displaying the first graph of 
 * weight and calories as function of the days
 */


/**
 * Function to switch the data of the back-end to the mocked data
 * @param {Object[]} data
 * @param {number} id
 * @returns {Object}
 */
function giveMockedUserActivity(data, id) {
  for(let i=0; i<data.length; i++) {
    if(data[i].userId === id) {
      return data[i]
    }
  }
}

/**
 * Constructor pattern used to get the data of the user weigth and calories as function of the days
 * @param {Object} data
 * @returns {Object[]}
 */   
class Activity {
  constructor(data) {
    this._data = data
  }

  get sessions() {

    const sessions = this._data.sessions;

    /**
     * We obtain the day that we transform to the corresponding number
     * ex: 07/11/2022 => 7
     */
    sessions.forEach((e) => {

        const day = e.day.split('-')[2];
        e.day = Number(day);
    })

    return sessions
  }
}

/**
 * Function displaying the first graph
 * 
 * We make an API call by using the endpoint 'http://localhost:3000/user/id/activity'
 * 
 * Here, we use an environment constante giving the port number
 * We also do the same for the constant isMocked
 * This is a boolean made to switch from the data of the back-end (isMocked = false)
 * to the mocked data (isMocked = true)
 * 
 * If you want to see more informations about this kind of function, please, 
 * go to the GiveUserMainData.js file
 */
export default function GiveUserActivity() {

    const isMocked = process.env.REACT_APP_MOCKED_DATA==='true';

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch(process.env.REACT_APP_PORT + '/user/' + id + '/activity')
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
          const mockedData = giveMockedUserActivity(USER_ACTIVITY, idValue);
          data = new Activity(mockedData).sessions;
        } else{
          data = new Activity(items.data).sessions;
        }
        return(
          <React.Fragment>
              <UserActivity data={data} />
          </React.Fragment>
        )
    }
}