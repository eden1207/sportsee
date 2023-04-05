import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserPerformance from '../components/UserPage/UserPerformance';
import ErrorPage from '../components/UserPage/ErrorPage';
import { USER_PERFORMANCE } from '../mocked-data/USER_PERFORMANCE'


/**
 * File containing the function associated to the component displaying the third graph of 
 * performance in different fields 
 */


/**
 * Function to switch the data of the back-end to the mocked data
 * @param {Object[]} data
 * @param {number} id
 * @returns {Object}
 */
function giveMockedUserPerformance(data, id) {
  for(let i=0; i<data.length; i++) {
    if(data[i].userId === id) {
      return data[i]
    }
  }
}


/**
 * Constructor pattern used to get the data of performance in different fields
 * @param {Object} data
 * @returns {Object[]}
 */ 
class Performance {
  constructor(data) {
    this._data = data
  }

  get performance() {

    const performance = this._data.data;

    /**
     * For each performance, a value is provided as function of a number
     * 
     * Each number is associated to a field (speed, cardio...)
     * 
     * We replace the number by the corresponding field name
     */
    performance.forEach((e) => {
  
        switch (e.kind) {
    
          case 1:
            e.kind = 'Cardio';
          break;
    
          case 2:
            e.kind = 'Energie';
          break;
    
          case 3:
            e.kind = 'Endurance';
          break;
    
          case 4:
            e.kind = 'Force';
          break;
    
          case 5:
            e.kind = 'Vitesse';
          break;
    
          case 6:
            e.kind = 'Intensité';
          break;
    
          default:
            console.log('Unknown value');
        }
    })

    return performance
  }
}
  

/**
 * Function displaying the first graph
 * 
 * We make an API call by using the endpoint 'http://localhost:3000/user/id/performance'
 * 
 * Here, we use an environment constante giving the port number
 * We also do the same for the constant isMocked
 * This is a boolean made to switch from the data of the back-end (isMocked = false)
 * to the mocked data (isMocked = true)
 * 
 * If you want to see more informations about this kind of function, please, 
 * go to the GiveUserMainData.js file
 */
export default function GiveUserPerformance() {

    const isMocked = process.env.REACT_APP_MOCKED_DATA==='true';

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch(process.env.REACT_APP_PORT + '/user/' + id + '/performance')
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
          const mockedData = giveMockedUserPerformance(USER_PERFORMANCE, idValue);
          data = new Performance(mockedData).performance;
        } else{
          data = new Performance(items.data).performance;
        }
        return(
          <React.Fragment>
              <UserPerformance data={data} />
          </React.Fragment>
        )
    }
}