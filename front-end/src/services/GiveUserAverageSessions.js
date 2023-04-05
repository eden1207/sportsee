import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserAverageSessions from '../components/UserPage/UserAverageSessions';
import ErrorPage from '../components/UserPage/ErrorPage';
import { USER_AVERAGE_SESSIONS } from '../mocked-data/USER_AVERAGE_SESSIONS'


/**
 * File containing the function associated to the component displaying the second graph of
 * sessions mean duration as function of the days
 */


/**
 * Function to switch the data of the back-end to the mocked data
 * @param {Object[]} data
 * @param {number} id
 * @returns {Object}
 */
function giveMockedUserAverageSessions(data, id) {
  for(let i=0; i<data.length; i++) {
    if(data[i].userId === id) {
      return data[i]
    }
  }
}


/**
 * Constructor pattern used to get the data of the user sessions mean duration as function of the days
 * @param {Object} data
 * @returns {Object[]}
 */ 
class AverageSessions {
  constructor(data) {
    this._data = data
  }

  get sessions() {

    const sessions = this._data.sessions;

    /**
     * We transform the day number by the day name first letter
     */
    sessions.forEach((e) => {
  
      switch (e.day) {
  
        case 1:
          e.day = 'L';
        break;
  
        case 2:
          e.day = 'M';
        break;
  
        case 3:
          e.day = 'M';
        break;
  
        case 4:
          e.day = 'J';
        break;
  
        case 5:
          e.day = 'V';
        break;
  
        case 6:
          e.day = 'S';
        break;
  
        case 7:
          e.day = 'D';
        break;
  
        default:
          console.log('Unknown value');
      }
    })

    return sessions
  }
}
  
 
/**
 * Function displaying the second graph
 * 
 * We make an API call by using the endpoint 'http://localhost:3000/user/id/average-sessions'
 * 
 * Here, we use an environment constante giving the port number
 * We also do the same for the constant isMocked
 * This is a boolean made to switch from the data of the back-end (isMocked = false)
 * to the mocked data (isMocked = true)
 * 
 * If you want to see more informations about this kind of function, please, 
 * go to the GiveUserMainData.js file
 */
export default function GiveUserAverageSessions() {

    const isMocked = process.env.REACT_APP_MOCKED_DATA==='true';

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch(process.env.REACT_APP_PORT + '/user/' + id + '/average-sessions')
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

        let data = []
        if(isMocked) {
          const idValue = Number(id);
          const mockedData = giveMockedUserAverageSessions(USER_AVERAGE_SESSIONS, idValue);
          data = new AverageSessions(mockedData).sessions;
        } else{
          data = new AverageSessions(items.data).sessions;
        }
        return(
          <React.Fragment>
              <UserAverageSessions data={data} />
          </React.Fragment>
        )
    }
}