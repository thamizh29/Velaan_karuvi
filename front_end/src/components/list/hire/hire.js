import { NavLink } from "react-router-dom";
import "../hire/hire.css";
import Logo from "../../logo/logo";
export default function Hire(){
    return(
        <div className="hire-bg">
            <Logo />
            <div className="hire-grp">
                <div className="hire-tra">
                    <NavLink to={"/h-tractore"}><div className="tra-img"></div>Tractore</NavLink>
                    
                </div>
                <div className="hire-mtr">
                    <NavLink to={"/h-minitractore"}><div className="mtr-img"></div>Mini Tractore</NavLink>
                    
                </div>
                <div className="hire-har">
                    <NavLink to={"/h-harvaster"}><div className="har-img"></div>Harvaster</NavLink>
                    
                </div>
                <div className="hire-pwt">
                    <NavLink to={"/h-powertiller"}> <div className="pwt-img"></div>Power Tiller</NavLink>
                   
                </div>
                <div className="hire-spr">
                    <NavLink to={"/h-sprayer"}><div className="spr-img"></div>Sprayer</NavLink>
                    
                </div>
            </div>
        </div>
    )
}