import React from 'react'
import Wrapper from '../ui/Wrapper'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className='404'>
			<Wrapper>
				<h1 className="h1">Oops! Page not found...</h1>
				<p className="text">This page seems to be missing ..</p>
				<Link to="/" className='link'>Go back to the homepage</Link>
			</Wrapper>
		</div>
	)
}

export default NotFound
