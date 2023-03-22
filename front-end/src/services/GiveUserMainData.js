import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserPage from '../components/UserPage/UserPage';

/*-- File containing the function associated to the component displaying the user page information --*/


/* Function used to get the daily score of the user as function of the id */

/* This function was created in order to correct a mistake in the back-end part */

function giveDailyScore(data, id) {

    if(id === 12){
        const dailyScore = data.todayScore*100;
        return dailyScore
    } else if(id === 18) {
        const dailyScore = data.score*100;
        return dailyScore
    } else{
        console.log('Your id value is different from 12 or 18')
    }
}

/* Function created to formate the user data from the API */

/* It returns an object containing the different user main data displayed on the page
  excepted the data of the graphs  */

function userMainData(data) {

    const id = data.id;
  
    const firstName = data.userInfos.firstName;

    const dailyScore = giveDailyScore(data, id);
  
    /* toFixed is used to display a number with three decimals and replace to change '.' to ',' */
    const calorieCount = (data.keyData.calorieCount/1000).toFixed(3).replace(".",",");
    const proteinCount = data.keyData.proteinCount;
    const carbohydrateCount = data.keyData.carbohydrateCount;
    const lipidCount = data.keyData.lipidCount;
  
    return({ id, firstName, dailyScore, calorieCount, proteinCount, carbohydrateCount, lipidCount })
}


/* Function displaying the user page */

/* We are using the hook useEffect() to make an API call by using the endpoint 'http://localhost:3000/user/id' */

/* We obtain an object 'items' thanks to the hook useState() and we keep the .data element */

/* Thus, the data will be sent in a component UserPage, which is a pattern of the user page */

/* The id of the endpoint is obtained from the url thanks to the hook useParams() */

/* The constant 'error' is made in order to display an error message if the data are not provided */

/* isLoaded is a waiting message during the data page loading */

export default function GiveUserMainData() {

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3000/user/' + id)
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

        const data = userMainData(items.data);

        return(
            <React.Fragment>
                <UserPage data={data} />
            </React.Fragment>
        )
    }
}