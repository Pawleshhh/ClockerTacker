import './ProjectsPage.scss';
import Project from './Project';

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
                        <Project projectName="Test1" projectClient="Test1Klient" projectTime="1" projectGroup="testgroup1"/>
                    </tbody>
                </table>
             </div>
        </div>
    )


}

export default ProjectsPage;