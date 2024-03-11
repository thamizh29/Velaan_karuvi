import '../navbars/nav.css';
import { NavLink } from "react-router-dom";
function Nav(){
    return(
        <div className="group">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/profile"}>Profile</NavLink></li>
            </ul>

        </div>
    )
}
export default Nav;