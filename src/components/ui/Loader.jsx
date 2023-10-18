import React from 'react'

function Loader() {
  return (
	<div className='loader'>
		<p className="loader__text">Loading
			<span className='loader__dot'>.</span>
			<span className='loader__dot'>.</span>
			<span className='loader__dot'>.</span>
		</p>
	</div>
  )
}

export default Loader
