import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<Link to="/" className="nav__link">Home</Link>
				</li>
				<li className="nav__item">
					<Link to="/newblog" className="nav__link">New Blog</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
