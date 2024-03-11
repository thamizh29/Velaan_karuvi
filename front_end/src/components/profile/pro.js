import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
function Profile(){
    return(
        <div className="p-g">
            <Logo />
          
            <NavLink to="/bel">Browser equipment list</NavLink>
            <NavLink to="/lye">List you equipment</NavLink>

        </div>
    )
}
export default Profile;