

import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/stocks">
                <h5>STOCK VALUE</h5>
            </Link>
            <Link to="/">
            <h5>HOME</h5>
            </Link>
            <Link to="/About">
                <h5>ABOUT</h5>
            </Link>
        </nav>
    )
};

export default Nav;