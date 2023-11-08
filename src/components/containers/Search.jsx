import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';


function Search({ onSearchResults }) {
	const { data } = useFetch('http://localhost:8000/blogs')
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const navigateTo = useNavigate();

	const handleSearch = () => {
		const filteredResults = data.filter(post => 
			post.title.toLowerCase().includes(query.toLowerCase()) ||
			post.body.toLowerCase().includes(query.toLowerCase())
		);
		setResults(filteredResults);
		// navigateTo('/searchresults');
	}

	return (
		<div className='search'>
			<div className='search-form'>
					<label htmlFor="search" className='label label--search'>Search:</label>
				<div className='search-form__wrap'>
					<input
						type="text"
						className='input input--search'
						value={query}
						onChange={(e) => setQuery(e.target.value)}/>
					<button type='submit' className='submit submit--search' onClick={handleSearch}>Search</button>
				</div>
			</div>
		</div>
	)
}

export default Search
