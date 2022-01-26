import './Project.scss';

const Project= (props) =>{


    return(
        <tr>
            <td>{props.projectName}</td>
            <td>{props.projectClient}</td>
            <td>{props.projectTime} h</td>
            <td>{props.projectGroup}</td>
        </tr>
    )


}

export default Project;