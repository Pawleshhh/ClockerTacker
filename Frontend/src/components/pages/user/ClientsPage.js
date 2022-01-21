import './ClientsPage.css';
import {mdiPlusThick} from '@mdi/js';
import Icon from '@mdi/react';
import Client from './Client';

const ClientsPage = () =>{


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
                    <Client Name="Klient testowy"/> 
                    <Client Name="Klient test2"/>  
                    <Client Name="ttt"/>
                    <Client Name="ttt"/> 
                    <Client Name="ttt"/> 
                    <Client Name="ttt"/> 
                    <Client Name="ttt"/>      
                    <Client Name="ttt"/>
                </div>  
            </div>
        </div>
    )


}

export default ClientsPage;