import { Link, Outlet } from "react-router-dom";

const SiteNavigation = () => {
    const {handleLogout} = useUserContext();
    return (
        <nav>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>
        <li>
        <Link to="/upload">Upload</Link>
        </li>
        <li>
       {!user && <Link to="/login">Login</Link>}
        </li>
        {user && !== undefind && <button text= }
        </ul>
        <button text = "Logout" onClick = {() => {
            console.log("Click on logout");
            handleLogout();
        }}/>
    
        </nav>
    );

}

export default SiteNavigation;