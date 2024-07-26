import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarLogo">
                <h3>Weather</h3>
            </div>
            <div className="navbarMenu">
                <option value="">Select City</option>
            </div>
        </div>
    )
}

export default Navbar;