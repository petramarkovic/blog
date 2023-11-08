import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Navbar() {
	const [searchToggle, setSearchToggle] = useState(false);

	const handleSearchToggle = () => {
		setSearchToggle((prevState) => !prevState);
		!searchToggle ? document.body.classList.add('scroll-disabled') : document.body.classList.remove('scroll-disabled');
	}

	return (
		<>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/" className="nav__link">Home</Link>
					</li>
					<li className="nav__item">
						<Link to="/newblog" className="nav__link">New Blog</Link>
					</li>
					<li className="nav__item">
						<button type='button' className='search-btn'>
							<span className='sr-only'>Open Search</span>
							<img className='search-btn__icon' src={!searchToggle ? `search.svg` : `close.svg`} alt="Search Icon" onClick={handleSearchToggle}/>
						</button>
					</li>
				</ul>
			</nav>
			{searchToggle && <Search />}
		</>
	)
}

export default Navbar
