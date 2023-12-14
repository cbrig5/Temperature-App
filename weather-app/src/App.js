import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherInformation from "./components/WeatherInformation/WeatherInformation";

const App = () => {
	const locations = {
		rochester: "43.165556,-77.611389",
		brockport: "43.214167,-77.939444",
		wilmington: "39.745833,-75.546667",
		los_angeles: "34.02,-118.7421",
		san_diego: "32.715,-117.1625",
	};
	const [weatherData, setWeatherData] = useState([]);

	const fetchWeatherData = async (location, days) => {
		try {
			const response = await axios.get(
				`https://api.weather.gov/points/${locations[location]}`
			);

			// Extract the forecast URL from the response
			const forecastURL = response.data.properties.forecast;

			// Fetch the forecast data using the obtained URL
			const forecastResponse = await axios.get(forecastURL);

			const weatherData = forecastResponse.data.properties.periods
				.filter((period) => period.isDaytime)
				.slice(0, days)
				.map((period) => ({
					date: period.startTime,
					temperature: period.temperature,
					humidity: period.relativeHumidity,
					windSpeed: period.windSpeed,
					description: period.shortForecast,
					city: response.data.properties.relativeLocation.properties.city,
					state: response.data.properties.relativeLocation.properties.state,
					days: days,
				}));

			setWeatherData(weatherData);
			console.log(weatherData);
		} catch (error) {
			console.error(
				"Error fetching data:",
				error.response,
				error.message,
				error
			);
		}
	};

	useEffect(() => {
		// Fetch weather data when the component mounts
		fetchWeatherData("rochester", 3);
	}, []);

	console.log("Weather Data in App:", weatherData);

	return (
		<div className='container'>
			<Header />
			<WeatherForm fetchWeatherData={fetchWeatherData} />
			<WeatherInformation weatherData={weatherData} />
		</div>
	);
};

export default App;
