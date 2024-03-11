import InputElement from "../inputs/input";
import "../auth/in.css";
import Logo from "../logo/logo";
export default function SignUp(){
    return(
        <div className="u-grp">
            <Logo />
        <div className="u-container">
        </div>  
            <h1 style={{
                fontSize:"40px",
                color:"white",
                position:"absolute",
                top:"320px",
                left:"400px",
            }}>Sign Up</h1>
            <div className="uname" ><InputElement type={"name"} name={"uname"} placeholder={"User Name"}/></div>
            <div className="gmail" ><InputElement  type={"gmail"} name={"gmail"} placeholder={"Gmail"}/></div> 
          
        </div>
    )
}