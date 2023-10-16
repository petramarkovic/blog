import React from 'react'

function Wrapper(props) {
	return (
		<div className='wrap'>
			{props.children}
		</div>
	)
}

export default Wrapper
