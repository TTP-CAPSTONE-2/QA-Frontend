import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">All Questions</Link>
                <Link to="/api/questions">Create Question</Link>
                <Link /*to={}*/>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;