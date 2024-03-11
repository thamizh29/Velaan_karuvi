import '../home/abourt.css';
import Logo from '../logo/logo';
function About(){
    return(
        <div className="a-grp">
            <Logo />
            <div className="a-para">
                <div className="a-bg"></div>
                <h1 style={{   
                    position:"absolute",
                    top:"320px",
                    left:"730pt",
                    fontSize:"36px",
                    }} >About</h1>
                <div className="a-img"></div>
                <p style={{
                    position:"absolute",
                    top:"400px",
                    width:"750px",
                    fontSize:"30px",
                    lineHeight:"2",
                    left:"630px",
                    color:"white",
                    textAlign:"justify",
                }}>This is the agri related website. 
                    our website name is velaan karuvigal 
                    it is the tamil name in this site 
                    aim is save the farmers time and gives
                    the opportunity to the agri 
                    machineries holdre's in this site is 
                    no cost site easy to access any one 
                    in this site show the all type of agri machineries</p>
            </div>
        </div>
    )
}
export default About;