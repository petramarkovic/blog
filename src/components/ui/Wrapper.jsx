import React from 'react'

function Wrapper(props) {
	return (
		<div className={`wrap ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	)
}

export default Wrapper
