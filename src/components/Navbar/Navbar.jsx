import { Link } from "react-router-dom";
import './Navbar.css';
import TempUserComponent from "../TempUserComponent";

function Navbar({user}) {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">All Questions</Link>
                <Link to="/api/questions">Create Question</Link>
                
            </div>

            <div className="nav-routes">
            {user ? (
                <>
                    {/* Here we simply on click and run the log out and navgiate back to homepage */}
                    <Link to="/api/logout">Log out</Link> 
                    <TempUserComponent user={user}/>
                </>
            ) : (
                <>
                    <Link to="/api/login">Login</Link>
                    <Link to="/api/register">Register</Link>
                </>
            )}
            </div>
            
        </nav>
    );
}

export default Navbar;