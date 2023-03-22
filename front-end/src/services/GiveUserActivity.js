import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserActivity from '../components/UserPage/UserActivity';


/*-- File containing the function associated to the component displaying the first graph of 
     weight and caories as function of the days --*/


/* Function used to get the data of the user weigth and calories as function of the days */     

function getUserActivityData(data) {

    const sessions = data.sessions;

    /* We obtain the day that we transform to the corresponding number
        ex: 07/11/2022 => 7 */
    sessions.forEach((e) => {

        const day = e.day.split('-')[2];
        e.day = Number(day);
    })

  
    return sessions
}

/* Function displaying the first graph */

/* We make an API call by using the endpoint 'http://localhost:3000/user/id/activity' */

/* If you want to see more informations about this kind of function, please, go to the GiveUserMainData.js file */

export default function GiveUserActivity() {

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3000/user/' + id + '/activity')
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

        const data = getUserActivityData(items.data);

        return(
            <React.Fragment>
                <UserActivity data={data} />
            </React.Fragment>
        )
    }
}