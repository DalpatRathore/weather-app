import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-auto py-10">
        <div className="text-gray-600 text-xl font-bold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-auto py-10">
        <div className="text-red-600 text-xl font-bold">{error.message}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-auto py-10 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{weatherData.name}</h1>
        <p className="text-gray-600 mb-4">{weatherData.weather[0].description}</p>
        <div className="flex justify-around items-center">
          <div className="text-3xl sm:text-6xl font-bold">{weatherData.main.temp}&deg;C</div>
          <div className="flex flex-col items-end">
            <div className="text-gray-600">{`Feels like ${weatherData.main.feels_like}`}&deg;C</div>
            <div className="text-gray-600">{`Humidity: ${weatherData.main.humidity}%`}</div>
            <div className="text-gray-600">{`Wind: ${weatherData.wind.speed} m/s`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;


