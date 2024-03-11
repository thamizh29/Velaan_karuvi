import '../home/home.css';
import Logo from '../logo/logo';
import { NavLink } from 'react-router-dom';
import Grp_img from '../logo/grp-img';
export default function Home(){
    return(
        <div className="h-grp">
                <Logo />
                <Grp_img />
            <div className="h-para">
                <h1 style={{color:"white",
                fontSize:"42pt",
                position:"relative",
                width:"800px",
                left:"80pt",
                top:"120px"}}>Welcome to velaan Karuvigal</h1>
                <p style={{textAlign:"justify",
                position:"relative",
                top:"90pt",
                left:"120pt",
                fontSize:"20pt",
                width:"650px",
                color:"wheat",
                // padding:"40px",
                lineHeight:"1.8",
                // background:"black"
                }}>
                This is our new velaan Karuvi website we can get the agriculture
                machineries detials in this portal. Easily find the agri machineries
                holders and get the contact detials in our neraby location this website 
                it was very useful to all users any one can access easily
                it show all type of machineries get it and use it..</p>
                <ul className="h-btn">
                <div  className="btn-ha">
                <li><NavLink to={"/have"}>Have</NavLink></li>
                </div>
                <div  className="btn-hi">
                <li><NavLink to={"/hire"}>Hire</NavLink></li>
                </div>
                </ul>
            </div>
        </div>
    );
}