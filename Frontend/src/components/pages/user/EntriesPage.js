import './EntriesPage.css';
import Entry from './Entry';
import {mdiPlusThick} from '@mdi/js';
import Icon from '@mdi/react';

const EntriesPage = () =>{

    return(
        <div className="entries-page-wrapper">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-3">
                        Grupa
                        <select class="form-select ml-4 mr-4" aria-label="Groups">
                            <option value="1">ZUT</option>
                            <option value="2">US</option>
                            <option value="3">AGH</option>
                        </select>
                    </div>
                    <div className="col-3">
                        Projekt
                        <select class="form-select ml-4 mr-4" aria-label="Client">
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
                            <Icon path={mdiPlusThick} size={1} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="table-wrapper">
                    <table className="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nazwa</th>
                                <th scope="col">Klient</th>
                                <th scope="col">Czas</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Entry entryName="Test1" entryClient="Test1Klient" entryTime="1"/>
                        </tbody>
                    </table>
                </div>  
            </div>
        </div>
    )

}

export default EntriesPage;