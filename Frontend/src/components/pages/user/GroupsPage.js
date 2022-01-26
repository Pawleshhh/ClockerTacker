import './GroupsPage.scss';
import Group from "./Group";
import axios from "axios";
import {useEffect, useState} from "react";

const URL_PATH = "http://localhost:80/src/LogicScripts/getGroups.php";

const GroupsPage = () =>{
    const [groupList, setGroupList] = useState([["Aplikacje internetowe", "Mateusz"], ["Aplikacje internetowe", "Mateusz"]]);

    const getGroups = () => {
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
                setGroupList(result.data);
            })
            .catch(error => console.warn("error: ", error.message));
    }

    useEffect(() => {
        getGroups();
    }, [])

    return(
        <div className="groups-page-wrapper">
            <div className="table-wrapper">
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Grupa</th>
                            <th scope="col">Admininstrator</th>
                        </tr>
                    </thead>
                    <tbody>
                    {groupList?.map(x => <Group key={Math.random()} groupName={x[0]} groupAdmin={x[1]} ></Group>)}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default GroupsPage;