import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">All Quesitons</Link>
                <Link to="/api/questions">Create Question</Link>
            </div>
        </nav>
    );
}

export default Navbar