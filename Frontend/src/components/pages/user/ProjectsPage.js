import './ProjectsPage.scss';

const ProjectsPage = () =>{


    return(
        <div className="projects-page-wrapper">
            <div className="table-wrapper">


                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Projekt</th>
                            <th scope="col">Klient</th>
                            <th scope="col">Czas</th>
                            <th scope="col">Grupa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Projekt testowy</td>
                            <td>Bogaty klient</td>
                            <td>4h</td>
                            <td>:)</td>
                        </tr>

                        <tr>
                            <td>Projekt testowy 2</td>
                            <td>Biedak</td>
                            <td>0h</td>
                            <td>XD</td>
                        </tr>

                    </tbody>
                </table>
             </div>
        </div>
    )


}

export default ProjectsPage;