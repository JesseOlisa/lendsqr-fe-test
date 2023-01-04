import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './container/Home';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				></Route>
				<Route
					path='/*'
					element={<Home />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
