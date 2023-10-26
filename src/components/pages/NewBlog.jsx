import React from 'react'
import Wrapper from '../ui/Wrapper'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewBlog() {
	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');
	const [pending, setIsPending] = useState(false);

	const navigateTo = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		const blog = { title, summary, body, author };

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(blog)
		})
			.then(() => {
				setTitle('');
				setSummary('');
				setBody('');
				setAuthor('');
				setIsPending(false);
				navigateTo('/');
			})
	};

	return (
		<div className='new-blog'>
			<Wrapper>
				<h1 className="h1">Add a new blog</h1>
				<form action="" className="form" onSubmit={handleSubmit}>
					<label htmlFor='title' className="label">Title:</label>
					<input
						type="text"
						name='title'
						id='title'
						value={title}
						className="input"
						required
						onChange={(e) => setTitle(e.target.value)} />
					<label htmlFor='summary' className="label">Summary:</label>
					<textarea
						type="text"
						name='summary'
						id='summary'
						className="input"
						rows='8'
						required
						onChange={(e) => setSummary(e.target.value)} />
					<p className="text-sm new-blog__note">Note: summary appears only on the homepage</p>
					<label htmlFor='body' className="label">Body:</label>
					<textarea
						type="text"
						name='body'
						id='body'
						className="input"
						rows='20'
						required
						onChange={(e) => setBody(e.target.value)} />
					<p className="text-sm new-blog__note">Note: body appears only on the article page</p>
					<label htmlFor="author" className='label'>Author:</label>
					<select
						name="author"
						id="author"
						className='input select'
						required
						onChange={(e) => setAuthor(e.target.value)}>
						<option value="Dave" className='option'>Dave</option>
						<option value="Mario" className='option'>Mario</option>
					</select>
					{!pending && <button type='submit' className='submit'>Submit</button>}
					{pending && <button type='submit' className='submit' disabled>Submitting blog...</button>}
				</form>

				{!pending &&
					<div className="new-blog__preview">
						<h2 className="h2 new-blog__preview-title">Preview:</h2>
						<div className="new-blog__preview-wrap">
							{title && <h3 className="new-blog__title">{title}</h3>}
							{summary && <p className="text new-blog__summary">{summary}</p>}
							{body && <p className="text new-blog__body">{body}</p>}
							{author && <p className="text-sm new-blog__author">Written by {author}</p>}
						</div>
					</div>}

			</Wrapper>
		</div>
	)
}

export default NewBlog
