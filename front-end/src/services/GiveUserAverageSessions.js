import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserAverageSessions from '../components/UserPage/UserAverageSessions';


/*-- File containing the function associated to the component displaying the second graph of 
     sessions mean duration as function of the days --*/

/* Function used to get the data of the user sessions mean duration as function of the days */ 

function getUserAverageSessions(data) {

    const sessions = data.sessions;

    /* We transform the day number by the day name first letter */

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
  
  
/* Function displaying the second graph */

/* We make an API call by using the endpoint 'http://localhost:3000/user/id/average-sessions' */

/* If you want to see more informations about this kind of function, please, go to the GiveUserMainData.js file */

export default function GiveUserAverageSessions() {

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3000/user/' + id + '/average-sessions')
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
        return <div>Error:</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        const data = getUserAverageSessions(items.data);

        return(
            <React.Fragment>
                <UserAverageSessions data={data} />
            </React.Fragment>
        )
    }
}