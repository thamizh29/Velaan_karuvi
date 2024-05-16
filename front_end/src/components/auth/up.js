import InputElement from "../inputs/input";
import "../auth/up.css";
import Logo from "../logo/logo";
import Grp_img from "../logo/grp-img";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
export default function SignUp() {
    const [email, setemail] = useState()
    const [mobile, setmobile] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/register', { email, mobile, password })
            .then(result => {
                console.log(result)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="u-grp">
            <Logo />
            <Grp_img />
            <div className="u-container">
            </div>
            <h1 style={{
                fontSize: "40px",
                color: "white",
                position: "absolute",
                top: "300px",
                left: "330px",
            }}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="u-gmail" ><input type="gmail" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} /></div>
                <div className="u-mobile" ><input type="number" name="mobile" placeholder="mobiler" onChange={(e) => setmobile(e.target.value)} /></div>
                <div className="u-pass" ><input type="password" name="password" placeholder="password" onChange={(e) => setpassword(e.target.value)} /></div>
                <button className="u-btn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}