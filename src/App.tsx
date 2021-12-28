import React from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from "./components/All-Charts/src/index";
import AddChart from "./components/AddChart/AddChart";
import WireFrame from "./WireFrame/WireFrame";
function App() {
	return (
		<div className='App'>
			{/* <WireFrame></WireFrame> */}

			<Charts></Charts>
		</div>
	);
}

export default App;
