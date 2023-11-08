import React from 'react'
import Wrapper from '../ui/Wrapper'
import BlogList from '../containers/BlogList';
import Loader from '../ui/Loader';
import useFetch from '../../hooks/useFetch';

function Home() {
	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

	return (
		<Wrapper>
			<h1 className='h1'>Homepage</h1>
			{error && <div>Error fetching data</div>}
			{isPending && !error && <Loader />}
			{blogs && <BlogList blogs={blogs} title='All blogs'/>}
			{blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'Dave')} title='Daves blogs'/>}
			{blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title='Marios blogs'/>}
		</Wrapper>
	)
}

export default Home
