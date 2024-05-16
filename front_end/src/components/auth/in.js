import InputElement from "../inputs/input";
import "../auth/in.css";
import Logo from "../logo/logo";
import { useNavigate } from "react-router-dom";
import Grp_img from "../logo/grp-img";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="i-grp">
            <Logo />
            <Grp_img />
            <div className="i-container">
            </div>
            <h1 style={{
                fontSize: "40px",
                color: "white",
                position: "absolute",
                top: "320px",
                left: "330px",
            }}>Sign In</h1>

            <form onSubmit={handleSubmit}>
                <div className="gmail" ><InputElement type={"gmail"} name={"gmail"} placeholder={"Email"} onChange={(e) => setemail(e.target.value)} /></div>
                <div className="pass" ><InputElement type={"password"} name={"password"} placeholder={"password"} onChange={(e) => setpassword(e.target.value)} /></div>
                <button className="i-btn">Sign In</button>
            </form>
        </div>
    )
}