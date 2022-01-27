import './Project.scss';

const Project= (props) =>{


    return(
        <tr>
            <td>{props.projectName}</td>
            <td>{props.projectDescription}</td>
            <td>{props.projectGroup}</td>
            <td>{props.projectClient}</td>
        </tr>
    )


}

export default Project;