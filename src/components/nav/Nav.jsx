import { Link} from "react-router-dom"
import "./Nav.css";

function Nav(props) {
    return (
        <nav>
           
                <Link to="/">Home</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/new-inventory">Add a car</Link> 
                {/* <Link to="/renter">Renter</Link>  */}

        </nav>

    )
};

export default Nav;