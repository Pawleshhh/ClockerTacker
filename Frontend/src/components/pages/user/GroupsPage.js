import './GroupsPage.scss';
import Group from "./Group";
import axios from "axios";
import {useEffect, useState} from "react";
import {map} from "react-bootstrap/ElementChildren";

const URL_PATH = "http://localhost:80/src/LogicScripts/getGroups.php";

const GroupsPage = () =>{
    const [groupList, setGroupList] = useState();

    let success = true;
    let failMessage = "";

    const displayGroups = () => {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("userId"))
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
                return result.data;
            })
            .catch(error => console.warn("error: ", error.message));
    }


    useEffect(() => {
        setGroupList(displayGroups());
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
                    {groupList?.map(x => <Group>{x}</Group>)}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default GroupsPage;