import './StatisticsPage.css';
import { useState } from 'react';
import {mdiAccount, mdiDeathStar, mdiStar} from '@mdi/js';
import Icon from '@mdi/react';

const StatisticsPage = () =>{

    const [activeUsers, setActiveUsers] = useState(Math.floor(Math.random() * (0 - 10000)) + 10000);
    const [ratings, setRatings] = useState(5);

    return(
        <div className="statistics-page-wrapper">
            <div className="card">
                <Icon path={mdiAccount} size={3}/>
                Obecnie aktywnych użytkowników: 
                <span>
                    {activeUsers}
                </span>
            </div>

            <div className="card">
                <Icon path={mdiStar} size={3}/>
                Oceny Google play: 
                <span>
                    {ratings}
                </span>
            </div>

            <div className="card">
                <Icon path={mdiDeathStar} size={3}/>
                Zniszczonych planet:  
                <span>
                    1
                </span>
            </div>
        </div>
    )


}

export default StatisticsPage;