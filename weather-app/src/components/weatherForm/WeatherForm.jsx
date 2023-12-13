import React, { useState } from "react";
import "./weatherForm.css"; // Make sure to adjust the path based on your project structure

const WeatherForm = () => {
	const [selectedLocation, setSelectedLocation] = useState("");
	const [forecastDays, setForecastDays] = useState("");

	const handleLocationChange = (event) => {
		setSelectedLocation(event.target.value);
	};

	const handleDaysChange = (event) => {
		setForecastDays(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Location:", selectedLocation);
		console.log("Forecast Days:", forecastDays);
		// Add further logic as needed
	};

	return (
		<form className='weather-form' onSubmit={handleSubmit}>
			<label>
				Location:
				<select value={selectedLocation} onChange={handleLocationChange}>
					<option value='rochester'>Rochester, NY</option>
					<option value='brockport'>Brockport, NY</option>
					<option value='wilmington'>Wilmington, DE</option>
					<option value='los_angeles'>Los Angeles, CA</option>
					<option value='san_diego'>San Diego, CA</option>
				</select>
			</label>

			<br />

			<label>
				Forecast Days:
				<select value={forecastDays} onChange={handleDaysChange}>
					<option value='1'>1 day</option>
					<option value='3'>3 days</option>
					<option value='7'>7 days</option>
				</select>
			</label>

			<br />

			<button type='submit'>Submit</button>
		</form>
	);
};

export default WeatherForm;
