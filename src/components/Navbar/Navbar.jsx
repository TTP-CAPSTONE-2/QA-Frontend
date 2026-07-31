import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import TempUserComponent from "../TempUserComponent";

function Navbar({authUser, setAuthUser}) {
    const navigate = useNavigate();

    async function handleLogOut() {
        const response = await fetch('http://localhost:3000/api/auth/logout', {
            credentials: 'include'
        })
        const data = await response.json()

        setAuthUser({
            isLoggedIn: false,
            user: null
        })
        navigate('/api/login')
    }
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">All Questions</Link>
                <Link to="/api/questions">Create Question</Link>
                
            </div>

            <div className="nav-routes">
            {authUser.isLoggedIn ? (
                <>
                    {/* Here we simply on click and run the log out and navgiate back to homepage */}
                    <button onClick={handleLogOut}>Log out</button>
                    <TempUserComponent user={authUser}/>
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