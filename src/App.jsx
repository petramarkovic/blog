import Header from './components/containers/Header';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewBlog from './components/pages/NewBlog';
import Article from './components/pages/Article';
import NotFound from './components/pages/NotFound';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path='/newblog' element={<NewBlog />}/>
				<Route path='/blogs/:id' element={<Article />}/>
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</Router>
	)
}

export default App
