import './GroupsPage.scss';
import Group from "./Group";

const GroupsPage = () =>{


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
                        <Group groupName="Test1" groupAdmin="Test1Klient"/>
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default GroupsPage;