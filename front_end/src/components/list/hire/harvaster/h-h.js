import { NavLink } from "react-router-dom";
import Logo from "../../../logo/logo";
import "../harvaster/h-h.css";
export default function Harvaster(){
    return(
        <div className="har-bg">
            <Logo />
            <div className="har-grp">
                <div className="har-pad">
                    <NavLink to={"/paddy"}><div className="pad-img"></div>Paddy</NavLink>
                </div>
                <div className="har-cor">
                    <NavLink to={"/corn"}><div className="cor-img"></div>Corn</NavLink>
                </div>
                <div className="har-sug">
                    <NavLink to={"/sugar"}><div className="sug-img"></div>SugarCan</NavLink>
                </div>
            </div>
        </div>
    )
}