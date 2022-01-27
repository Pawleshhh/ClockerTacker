import './Entry.css';
import {mdiPlay, mdiStop} from '@mdi/js';
import Icon from '@mdi/react';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const STOP_ENTRY_URL_PATH = "http://localhost:80/src/LogicScripts/stopEntry.php";

const Entry = (props) => {

    const [state, setState] = useState(false);

    const stopTimer = (entryId) => {
        let data = new FormData();
        data.append("id", entryId)

        axios({
            method: "POST",
            url: STOP_ENTRY_URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        })
            .then(result => {
                console.log(result)
                // setStarted(true);
            })
            .catch(error => console.warn("error: ", error.message));
    }

    useEffect(() => {
        console.log(props)
        // setStarted(true);
    }, [props])

    return (
        <tr id={props.entryId}>
            <td>{props.entryDescription}</td>
            <td>{props.entryDuration}</td>
            <td>{props.entryStart}</td>
            {
                props.entryEnd === null ?//&& !started ?
                <td>
                    <button>
                        <Icon onClick={() => stopTimer(props.entryId)} path={mdiStop} size={1}/>
                    </button>
                </td>
                :
                <td>test: {props.entryEnd}</td>
            }
        </tr>
    )
}

export default Entry;