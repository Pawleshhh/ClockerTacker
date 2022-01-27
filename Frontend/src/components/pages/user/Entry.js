import './Entry.css';
import {mdiPlay, mdiStop} from '@mdi/js';
import Icon from '@mdi/react';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const STOP_ENTRY_URL_PATH = "http://localhost:80/src/LogicScripts/stopEntry.php";

const Entry = (props) => {


    const calculateDuration = (start, end) => {

        var seconds = Math.floor((Date.parse(end) - (Date.parse(start)))/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
    
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
        return days + "d " + hours + "h " + minutes + "min " + seconds + "s";
    }

    const [stopped, setStopped] = useState(false);
    const [stoppedTime, setStoppedTime] = useState(0);
    const [duration, setDuration] = useState(0);

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
                setStopped(true);
            })
            .catch(error => console.warn("error: ", error.message));
    }
    var interval;
    useEffect(() => {
        if(!stopped){
            interval = setInterval(() => {
                setDuration(calculateDuration(props.entryStart, new Date()));
            }, 1000);
        }
        else{
            clearInterval(interval);
            setDuration(calculateDuration(props.entryStart, stoppedTime));
        }
    }, [duration, stoppedTime, stopped])

    return (
        <tr id={props.entryId}>
            <td>{props.entryDescription}</td>
            <td>{duration}</td>
            <td>{props.entryStart}</td>
            {
                props.entryEnd === null && !stopped ?
                <td>
                    <button>
                        <Icon onClick={() => {setStopped(true); setStoppedTime(new Date())}} /*onClick={() => stopTimer(props.entryId)}*/ path={mdiStop} size={1}/>
                    </button>
                </td>
                :
                <td>{props.entryEnd}</td>
            }
        </tr>
    )
}

export default Entry;