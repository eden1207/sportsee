import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserPage from '../components/UserPage/UserPage';




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


function userMainData(data) {

    const id = data.id;
  
    const firstName = data.userInfos.firstName;

    const dailyScore = giveDailyScore(data, id);
  
    const calorieCount = (data.keyData.calorieCount/1000).toFixed(3).replace(".",",");
    const proteinCount = data.keyData.proteinCount;
    const carbohydrateCount = data.keyData.carbohydrateCount;
    const lipidCount = data.keyData.lipidCount;
  
    return({ id, firstName, dailyScore, calorieCount, proteinCount, carbohydrateCount, lipidCount })
}



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