import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className='main--container'>
			<Navbar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<div className='dashboard--container'>
				<Sidebar />
				<Dashboard />
			</div>
		</div>
	);
};

export default Home;
