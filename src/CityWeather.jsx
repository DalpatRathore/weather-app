import axios from 'axios';
import { useState} from 'react';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setCity('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto py-10 bg-gray-200">
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2 text-center">
          Enter City Name
        </label>
        <div className="flex flex-col gap-5 items-center pb-5">
          <input
            type="text"
            id="city"
            className="shadow appearance-none border rounded w-80 py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g. New York"
            value={city}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Weather
          </button>
        </div>
      </form>
      {weather.main && (
        <div className="bg-blue-200 w-72 sm:w-96 mx-auto rounded-md shadow-md p-4 pb-5 text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <p className="text-gray-700 font-bold mb-2">
            {weather.weather[0].description}
          </p>
          <p className="text-gray-700 font-bold">
            Temperature: {weather.main.temp} &deg;C
          </p>
          <p className="text-gray-700 font-bold">
            Humidity: {weather.main.humidity}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;

