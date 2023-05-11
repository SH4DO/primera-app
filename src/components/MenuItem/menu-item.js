import { Link } from "react-router-dom";
import "./menu-item.css"

function MenuItem(props){
    return(
        <li className="menu-item">
            <Link to={props.link}>{props.text}</Link>
        </li>
    );

}

export default MenuItem;