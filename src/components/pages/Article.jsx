import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../ui/Loader';
import Wrapper from '../ui/Wrapper';
import { useNavigate } from 'react-router-dom';

function Article() {
	const { id } = useParams();
	const { data: article, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
	const navigateTo = useNavigate();

	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: 'DELETE'
		})
		.then(() => {
			navigateTo('/');
		})
	}

	return (
		<div className='article-holder'>
			<Wrapper className='wrap--sm'>
					{error && <div>{ error }</div>}
					{isPending && !error && <Loader />}
					{ article &&
						<article className="article">
							<h1 className="h1 article__title">{ article.title }</h1>
							<div className='article__categories'>
								{article.categories.map((category, index) => <span className='tag' key={index}>{category}</span>)}
							</div>
							<p className='article__author'>Written by { article.author }</p>
							<p className="text article__text">{ article.body }</p>
							<Link className='link' to="/">go to homepage</Link>
							<button type='button' className='btn' onClick={handleDelete}>Delete this post</button>
						</article>
					}
			</Wrapper>
		</div>
	)
}

export default Article
