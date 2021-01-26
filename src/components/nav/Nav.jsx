import { Link} from "react-router-dom"

function Nav(props) {
    return (
        <nav>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/inventory">Inventory</Link></div>
            <div><Link to="/new-inventory">Add a car</Link></div>
            {/* <Link to="/renter">Renter</Link> */}
        </nav>

    )
};

export default Nav;