import React from 'react'
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {
  return (
	<>
		<h2 className='h2'>{title}</h2>
		<div className='blog-list'>
			{blogs.map(blog => <Link to={`/blogs/${blog.id}`} className='blog' key={blog.id}>
				<h3 className='blog__title'>{blog.title}</h3>
				<p className='blog__author'>Written by {blog.author}</p>
				<p className="blog__body">{blog.summary}</p>
			</Link>)}
		</div>
	</>
	)
}

export default BlogList
