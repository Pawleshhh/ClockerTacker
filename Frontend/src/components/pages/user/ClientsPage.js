import './ClientsPage.css';
import {mdiPlusThick} from '@mdi/js';
import Icon from '@mdi/react';
import Client from './Client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL_PATH = "http://localhost:80/src/LogicScripts/getClients.php";

const ClientsPage = () =>{
    const [clientList, setClientList] = useState();

    const getClients = () => {
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
                setClientList(result.data);
            })
            .catch(error => console.warn("error: ", error.message));

    }

    useEffect(() =>{
        getClients();
    }, []);


    return(
        <div className="clients-page-wrapper">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-4">
                        Klienci
                        <input className="form-control ml-4" placeholder="Wyszukaj klienta"/>
                    </div>
                    <div className="col-4">
                        <input className="form-control mr-4" placeholder="Nazwa klienta"/>
                        <button>
                            <Icon path={mdiPlusThick} size={1} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="client-wrapper">
                    {clientList?.map(x => <Client key={Math.random()} Name={x}></Client>)}
                </div>  
            </div>
        </div>
    )


}

export default ClientsPage;