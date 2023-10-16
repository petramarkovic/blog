import React from 'react'
import Wrapper from '../ui/Wrapper'
import Logo from '../ui/Logo'
import Navbar from './Navbar'

function Header() {
	return (
		<header className="header">
			<Wrapper>
				<div className="header__content">
					<Logo />
					<Navbar />
				</div>
			</Wrapper>
		</header>
	)
}

export default Header
