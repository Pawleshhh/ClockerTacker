import './Client.css';
import {mdiClose} from '@mdi/js';
import Icon from '@mdi/react';

const Client = (props) =>{

    return(
        <div className="client">
            <span>
                {props.Name}
            </span>
            <button>
                <Icon path={mdiClose} size={1} />
            </button>
        </div>
    )


}

export default Client