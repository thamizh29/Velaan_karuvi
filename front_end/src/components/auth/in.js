import InputElement from "../inputs/input";
import "../auth/in.css";
import Logo from "../logo/logo";
import { NavLink } from "react-router-dom";

export default function SignIn(){
    return(
        <div className="i-grp">
            <Logo />
        <div className="i-container">
        </div>  
            <h1 style={{
                fontSize:"40px",
                color:"white",
                position:"absolute",
                top:"320px",
                left:"400px",
            }}>Sign In</h1>
            <div className="uname" ><InputElement type={"name"} name={"uname"} placeholder={"User Name"}/></div>
            <div className="gmail" ><InputElement  type={"gmail"} name={"gmail"} placeholder={"Gmail"}/></div> 
            {/* <div className="i-btn"><NavLink to={"/signin"}>SignIn</NavLink></div> */}
        </div>
    )
}