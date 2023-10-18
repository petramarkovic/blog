import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal })
			.then(res => {
				if (!res.ok) {
					throw new Error('Error fetching data');
				}
				return res.json();
			})
			.then(data => {
				setData(data);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					return;
				} else {
					setError(err.message);
					console.log(err);
				}
			})
			return () => abortCont.abort();
	}, [url]);


	return { data, isPending, error }
};

export default useFetch;