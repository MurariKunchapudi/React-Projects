import './Navbar.css';

const Navbar = ({ selectedCity, setSelectedCity, selectedCountry, setSelectedCountry, getWeather}) => {
    // useEffect(() => {
    //     fetchCities();
    // })

    const cities = [
        { name: "New York", country: "USA" },
        { name: "San Francisco", country: "USA" },
        { name: "Florida", country: "USA" },
        { name: "Texas", country: "USA" },
        { name: "London", country: "UK" },
        { name: "Stratford", country: "UK" },
        { name: "Liverpool", country: "UK" },
        { name: "Paris", country: "France" },
        { name: "Bengaluru", country: "India" },
        { name: "Hyderabad", country: "India" },
        { name: "Pune", country: "India" },
        { name: "Chennai", country: "India" },
        { name: "Mumbai", country: "India" },
    ]

    const countries = [...new Set(cities.map(city => city.country))];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        getWeather();
    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedCity('');
    }

    const filteredCities = cities.filter(city => city.country === selectedCountry);

    return (
        <div className="navbar">
            <div className="navbarLogo">
                <h3>MKWeather</h3>
            </div>
            <div className="navbarMenu">
                <select 
                    id="country"
                    name="Select Country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="" disabled>Select A Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                <select 
                    id="city"
                    name="Select City"
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedCountry}
                >
                    <option value="" disabled>Select A City</option>
                    {filteredCities.map((city, index) => (
                        <option key={index} value={city.name}>{city.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Navbar;