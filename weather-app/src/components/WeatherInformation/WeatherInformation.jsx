import React, { useEffect } from "react";
import "./weatherInformation.css";
import useForceUpdate from "../../hooks/useForceUpdate";

const WeatherInformation = ({ weatherData }) => {
	const forceUpdate = useForceUpdate(); // hook for forceUpdate

	useEffect(() => {
		forceUpdate();
	}, [weatherData]);

	if (!weatherData || weatherData.length === 0 || !weatherData[0]) {
		// Handle the case when there is no weather data or the first data point is undefined
		return <p>No weather data available</p>;
	}

	const firstDataPoint = weatherData[0];
	console.log(firstDataPoint);

	console.log("Received weatherData:", weatherData);

	return (
		<div className='weather-info-container'>
			<h2 className='weather-info-header'>
				Weather Information for {firstDataPoint.city}, {firstDataPoint.state}{" "}
				for the next {firstDataPoint.days} days
			</h2>

			{weatherData.map((dataPoint, index) => (
				<div key={index} className='weather-info-card'>
					{/* Render individual properties of the dataPoint object */}
					<p className='weather-info-property'>Date: {dataPoint.date}</p>
					<p className='weather-info-property'>
						Temperature: {dataPoint.temperature}
					</p>
					<p className='weather-info-property'>
						Humidity: {dataPoint.humidity.value}%
					</p>
					<p className='weather-info-property'>
						Wind Speed: {dataPoint.windSpeed}
					</p>
					<p className='weather-info-property'>
						Description: {dataPoint.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default WeatherInformation;
