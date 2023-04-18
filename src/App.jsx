import Weather from "./Weather"
import CityWeather from "./CityWeather"

function App() {
  
  return (
    <main className="bg-gray-200 h-min">
    <h1 className="text-3xl md:text-6xl text-[#069] text-center font-bold py-5 drop-shadow-lg italic"> <span className="text-[#10a37f] not-italic">ChatGPT</span> Weather App </h1>
    <Weather></Weather>
    <CityWeather></CityWeather>
    <footer className="bg-black text-white flex items-center justify-center py-4">  
      <p>Built with help of ChatGPT | <a href="https://github.com/DalpatRathore/weather-app/tree/main">More Info</a></p>
      </footer>
    </main>
  )
}

export default App
