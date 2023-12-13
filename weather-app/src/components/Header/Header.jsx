import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const formattedDateTime = currentDateTime.toLocaleString();

	return (
		<div className='header'>
			<h1>Weather App</h1>
			<p>Current Date and Time: {formattedDateTime}</p>
		</div>
	);
};

export default Header;
