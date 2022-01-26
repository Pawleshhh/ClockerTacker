import './Group.scss';

const Group = (props) =>{


    return(
        <tr>
            <td>{props.groupName}</td>
            <td>{props.groupAdmin}</td>
        </tr>
    )


}

export default Group;