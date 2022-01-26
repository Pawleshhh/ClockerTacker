import './Entry.css';
import {mdiPlay, mdiStop} from '@mdi/js';
import Icon from '@mdi/react';
import React, {useState} from 'react';

const Entry = (props) => {

    const [isStarted, setStarted] = useState(false);


    return (
        <tr>
            <td>{props.entryDescription}</td>
            <td>{props.entryDuration}</td>
            <td>{props.entryStart}</td>
            {isStarted ?
                <td>
                    <button>
                        <Icon onClick={() => setStarted(!isStarted)} path={isStarted ? mdiPlay : mdiStop} size={1}/>
                    </button>
                </td>
                :
                <td>{props.entryEnd}</td>}

        </tr>
    )


}

export default Entry;