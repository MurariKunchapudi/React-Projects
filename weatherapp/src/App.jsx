import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import WeatherCard from './WeatherCard';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [weatherData, setWeatherData] = useState([
    {
      city: '',
      weather: {
        temperature: 0,
        high: 0,
        low: 0,
        precipitation: 0,
        humidity: 0,
        aqi: 0
      }
    }
  ]);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const response = await fetch('www.exampleweatherapi.com');
  //       if(!response.ok) {
  //         throw new Error('No Weather Data from Network')
  //       }
  //       const result = await response.json();
  //     } catch(error) {
  //       console.log(error);
  //     } finally {
  //       setWeatherData([result]);
  //     }
  //   }
  //   fetchWeatherData();
  // }, [])

  return (
    <>
      <Navbar 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        // getWeather={getWeather}
      />
      <WeatherCard
        selectedCity={selectedCity}
        selectedCountry={selectedCountry}
        weatherData={weatherData}
      />
    </>
  )
}

export default App
