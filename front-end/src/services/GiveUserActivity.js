import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserActivity from '../components/UserPage/UserActivity';




function getUserActivityData(data) {

    const sessions = data.sessions;

    sessions.forEach((e) => {

        const day = e.day.split('-')[2];
        e.day = Number(day);
    })

  
    return sessions
}


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