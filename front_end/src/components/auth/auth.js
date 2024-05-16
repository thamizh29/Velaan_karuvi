import './auth.css';
import Logo from '../logo/logo';
import { NavLink } from 'react-router-dom';
import Grp_img from '../logo/grp-img';
export default function Auth() {
    return (
        <div className="auth-bg">
            <Logo />
            <Grp_img />
            <div className="auth-grp">
                <h1 style={{
                    fontSize: '38pt',
                    color: 'white',
                    position: 'relative',
                    top: '250px',
                    left: '50px',
                }}>Welcome to velaan karuvigal</h1>
                <NavLink style={{ color: 'black' }} to={"/signup"}><div className='auth-btn-up'>Sign Up</div></NavLink>
                <NavLink style={{ color: 'white' }} to={"/signin"}><div className='auth-btn-in'>Sign In</div></NavLink>
            </div>

        </div>
    )
}