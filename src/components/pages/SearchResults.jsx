import React from 'react'

const SearchResults = ({ searchResults }) => {
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{searchResults.map(result, index => {
					<ll key={index}>
						<span>{result.title}</span>
						<p>{result.body}</p>
						<p>{result.author}</p>
					</ll>
				})}
			</ul>
		</div>
	)
}

export default SearchResults
