import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Logo from '../assets/logo.png';
import Bell from '../assets/icons/bell.png';
import ProfilePic from '../assets/avatar.png';

interface SearchProps {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ searchTerm, setSearchTerm }: SearchProps) => {
	const navigate = useNavigate();

	return (
		<section className='header--container'>
			<div className='logo--container'>
				<img
					src={Logo}
					alt='company logo'
				/>
			</div>
			<div className='search--container'>
				<input
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearchTerm(e.target.value)
					}
					placeholder='Search for anything'
					value={searchTerm}
					className='p-2 w-full bg-white outline-none '
				/>
				<button
					type='button'
					className='btn btn-search'
				>
					<IoSearchSharp />
				</button>
			</div>

			<div className='userinfo--container'>
				<span>
					<a href='#'>Docs</a>
				</span>
				<div>
					<img
						src={Bell}
						alt='notification'
                        className='bell-icon'
					/>
				</div>
				<div className='profile--container'>
					<img
						src={ProfilePic}
						alt='user picture'
					/>
					<h4>Ayodeji</h4>
					<AiOutlineCaretDown size={14} />
				</div>
			</div>
		</section>
	);
};

export default Navbar;
