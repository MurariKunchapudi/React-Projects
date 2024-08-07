import './WeatherCard.css';

const WeatherCard = ({selectedCity, selectedCountry, weatherData}) => {
    return (
        <div className="weatherCard">
            <div className="mainWeather">
                <div className="location">
                    <h3>{selectedCity && selectedCountry ? `${selectedCity}` : `Bengaluru`}</h3>
                    <span className="temperature">27 Degrees</span>
                </div>
                <div className="weatherType">
                    <h4>Cloudy</h4>
                    <div className="temperatureInfo">
                        <span>H: 36</span>
                        <span>L: 28</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;