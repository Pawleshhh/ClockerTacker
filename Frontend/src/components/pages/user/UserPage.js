import logo from '../../../images/mainicon.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import EntriesPage from './EntriesPage';
import ProjectsPage from './ProjectsPage';
import GroupsPage from './GroupsPage';
import ClientsPage from './ClientsPage';
import './UserPage.css';
import Icon from '@mdi/react';
import { mdiClock, mdiDownload } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import { mdiFormatListNumbered } from '@mdi/js';
import { mdiAccountCash } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import {Button} from "react-bootstrap";
import axios from "axios";

const GET_CSV_URL_PATH = "http://localhost:80/src/LogicScripts/generateCsv.php";

const UserPage = () =>{
    const getCSVReport = () => {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("userId"));

        axios({
            method: "POST",
            url: GET_CSV_URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        })
            .then(result => {
                console.log(result.data)

                let file = new Blob([result.data], {type: "csv"});
                let a = document.createElement("a"),
                    url = URL.createObjectURL(file);

                a.href = url;
                a.download = "clockertracker_report.csv";
                document.body.appendChild(a);
                a.click();
                setTimeout(function () {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 0);

            })
            .catch(error => console.warn("error: ", error.message));
    }

    const logout = () => {
        localStorage.removeItem("userId");
        window.location = "/";
    }

    return(
        <div className="user-page-wrapper">
            <div className="d-flex flex-column flex-shrink-0 p-3 sidebar" style={{width: 280}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="mr-3" src={logo} alt="" width="40" height="40"/>
                    <span className="fs-4 text-white">Clocker Tracker</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="entries">
                            <Icon className="mr-3" path={mdiClock} size={1}/>
                            Wpisy
                        </NavLink>
                        <NavLink className="nav-link" aria-current="page" to="clients">
                            <Icon className="mr-3" path={mdiAccountCash} size={1}/>
                            Klienci
                        </NavLink>
                        <NavLink className="nav-link" aria-current="page" to="groups">
                            <Icon className="mr-3" path={mdiAccountGroup} size={1}/>
                            Grupy
                        </NavLink>
                        <NavLink className="nav-link" aria-current="page" to="projects">
                            <Icon className="mr-3"  path={mdiFormatListNumbered} size={1}/>
                            Projekty
                        </NavLink>
                        <button onClick={getCSVReport} className="nav-link" aria-current="page" to="raport">
                            <Icon className="mr-3"  path={mdiDownload} size={1}/>
                            Pobierz raport
                        </button>

                        <hr/>
                        <button onClick={logout} className="nav-link" aria-current="page" to="/">
                            <Icon className="mr-3"  path={mdiLogout} size={1}/>
                            Wyloguj
                        </button>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/entries" element={<EntriesPage/>} />
                <Route path="/clients" element={<ClientsPage/>} />
                <Route path="/groups" element={<GroupsPage/>} />
                <Route path="/projects" element={<ProjectsPage/>} />
            </Routes>
        </div>
    )


}

export default UserPage;