import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return <div>
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-links">
                    <ul>
                        <li className="nav-link">
                            <Link to='/recipes'>Przepisy</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='/shoppingList'>Zakupy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;