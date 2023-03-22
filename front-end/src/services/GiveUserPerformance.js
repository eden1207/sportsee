import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserPerformance from '../components/UserPage/UserPerformance';


/*-- File containing the function associated to the component displaying the third graph of 
     performance in different fields --*/


/* Function used to get the data of performance in different fields */ 

function getUserPerformance(data) {

    const performance = data.data;

    /* For each performance, a value is provided as function of a number */

    /* Each number is associated to a field (speed, cardio...) */

    /* We replace the number by the corresponding field name */

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
  

/* Function displaying the first graph */

/* We make an API call by using the endpoint 'http://localhost:3000/user/id/performance' */

/* If you want to see more informations about this kind of function, please, go to the GiveUserMainData.js file */

export default function GiveUserPerformance() {

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3000/user/' + id + '/performance')
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

        const data = getUserPerformance(items.data);

        return(
            <React.Fragment>
                <UserPerformance data={data} />
            </React.Fragment>
        )
    }
}