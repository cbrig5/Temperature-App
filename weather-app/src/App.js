import logo from "./logo.svg";
import "./App.css";
import WeatherForm from "./components/weatherForm/WeatherForm";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className='container'>
			<Header />
			<WeatherForm />
		</div>
	);
}

export default App;
