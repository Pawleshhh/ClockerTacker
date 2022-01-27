import './ProjectsPage.scss';
import Project from './Project';
import Icon from "@mdi/react";
import {mdiDownload} from "@mdi/js";
import axios from "axios";
import {useEffect, useState} from "react";
import Group from "./Group";

const URL_PATH = "http://localhost:80/src/LogicScripts/getProjects.php";
const ProjectsPage = () => {
    const [projectList, setProjectList] = useState([]);

    const getProjects = () => {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("userId"));

        axios({
            method: "POST",
            url: URL_PATH,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        })
            .then(result => {
                console.log(result.data)
                setProjectList(result.data);
            })
            .catch(error => console.warn("error: ", error.message));
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className="projects-page-wrapper">
            <div className="table-wrapper">
                <table className="table table-dark table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Projekt</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Grupa</th>
                        <th scope="col">Klient</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<Project projectName="Test1" projectClient="Test1Klient" projectTime="1" projectGroup="testgroup1"/>*/}
                    {/*<Project projectName="Test2" projectClient="Test2Klient" projectTime="4" projectGroup="testgroup2"/>*/}
                    {projectList?.map(x => <Project
                        key={Math.random()}
                        projectName={x[0]}
                        projectDescription={x[1]}
                        projectClient={x[2]}
                        projectGroup={x[3]}
                    />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsPage;