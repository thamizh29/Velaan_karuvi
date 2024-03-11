import { NavLink } from "react-router-dom";
import Logo from "../../../logo/logo";
import "../tractore/h-t.css";
export default function Tractore(){
    return(
        <div className="tra-bg">
            <Logo />
            <div className="tra-grp">
                <div className="tra-tip">
                <NavLink to={"/t-tipper"}><div className="tip-img"></div>Tipper</NavLink>
                </div>
                <div className="tra-cul">
                <NavLink to={"/t-cultivator"}><div className="cul-img"></div>Cultivator</NavLink>
                </div>
                <div className="tra-rot">
                <NavLink to={"/t-rotavator"}><div className="rot-img"></div>Rotavator</NavLink>
                </div>
            </div>
        </div>
    )
}