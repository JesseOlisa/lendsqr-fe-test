import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import Briefcase from '../assets/icons/briefcase.png';
import Home from '../assets/icons/home.png';

import { SideBarLinks } from '../data/SidebarLinks';

const Sidebar = () => {
	return (
		<section className='sidebar--container'>
			<div>
				<Link
					to='/'
					className='mainLinks'
				>
					<img
						src={Briefcase}
						alt='icon'
					/>
					<p>Switch Organisation</p>
					<FiChevronDown size={15} />
				</Link>
			</div>

			<div>
				<Link
					to='/'
					className='mainLinks mainLink-light'
				>
					<img
						src={Home}
						alt='icon'
					/>
					<p>Dashboard</p>
				</Link>
			</div>

			<div>
				{SideBarLinks.map((linksection, index) => {
					return (
						<div key={index}>
							<p className='link--section'>{linksection.title}</p>
							<ul>
								{linksection.links.map((link, index) => {
									return (
										<li key={index}>
											<NavLink
												to={`/${link.title}`}
												className={({ isActive }) => 
													isActive ? 'isActive sidebar--link' : 'sidebar--link'
												}
											>
												<div>
													<img
														src={link.logo}
														alt='logo'
													/>
												</div>
												<p>{link.name}</p>
											</NavLink>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Sidebar;
