import './EntriesPage.css';
import Entry from './Entry';
import {mdiPlusThick} from '@mdi/js';
import Icon from '@mdi/react';
import {useEffect, useState} from "react";
import axios from "axios";
import Group from "./Group";

const GROUPS_URL_PATH = "http://localhost:80/src/LogicScripts/getGroups.php";
const ENTRIES_URL_PATH = "http://localhost:80/src/LogicScripts/getEntries.php";

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

const EntriesPage = () => {
    const [groupList, setGroupList] = useState();
    const [entries, setEntry] = useState();
    const [currentTime, setCurrentTime] = useState(new Date());

    const getGroups = () => {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("userId"));

        axios({
            method: "POST",
            url: GROUPS_URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        })
            .then(result => {
                console.log(result.data)
                setGroupList(result.data);
            })
            .catch(error => console.warn("error: ", error.message));
    }


    const getEntries = () => {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("userId"));

        axios({
            method: "POST",
            url: ENTRIES_URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        })
            .then(result => {
                console.log(result.data)
                setEntry(result.data);
            })
            .catch(error => console.warn("error: ", error.message));
    }


    useEffect(() => {
        getGroups();
        getEntries();
        setInterval(() => {
            setCurrentTime(new Date());
            console.log(new Date())
        }, 1000);
    }, [])




    return (
        <div className="entries-page-wrapper">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-3">
                        Grupa
                        <select className="form-select ml-4 mr-4" aria-label="entrys">
                            {groupList?.map(x => <option value={x[0]}>{x[0]}</option>)}
                        </select>
                    </div>
                    <div className="col-3">
                        Projekt
                        <select className="form-select ml-4 mr-4" aria-label="Client">
                            <option value="1">ZUT</option>
                            <option value="2">US</option>
                            <option value="3">AGH</option>
                        </select>
                    </div>
                    <div className="col-3">
                        Wpisy
                        <input className="form-control ml-4" placeholder="Wykonywane zadanie"/>
                    </div>
                    <div className="col-3">
                        <button>
                            <Icon path={mdiPlusThick} size={1}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="table-wrapper">
                    <table className="table table-dark table-striped table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Opis</th>
                            <th scope="col">Czas trwania</th>
                            <th scope="col">Początek</th>
                            <th scope="col">Koniec</th>
                        </tr>
                        </thead>
                        <tbody>
                        {entries?.map(x =>
                            <Entry
                                key={Math.random()}
                                entryDescription={x[1]}
                                entryStart={x[2]}
                                entryEnd={x[3]}
                                entryDuration={
                                    x[3] === "" ? calculateDuration(x[2], currentTime):
                                    calculateDuration(x[2], x[3])
                                }
                            />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EntriesPage;