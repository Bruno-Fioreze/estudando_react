import './styles.css';
import { useEffect, useState, useCallback } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput';

export const Home = () => {
	const [posts, setPosts] = useState([]);
	const [allPosts, setallPosts] = useState([]);
	const [page, setPage] = useState(0);
	const [postPerPage, setPostPerPage] = useState(10);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		handleLoadPosts(0, postPerPage);
	}, [handleLoadPosts, postPerPage]);

	const filteredPosts = !!searchValue ? 
		allPosts.filter(post => {
			return post.title.toLowerCase().includes(
				searchValue.toLowerCase()
			);
		}) 
	: posts;
	

	const handleLoadPosts = useCallback(async (page, postPerPage) => {
		const postsAndPhotos = await loadPosts()
		setPosts(postsAndPhotos.slice(page, postPerPage))
		setallPosts(postsAndPhotos)
	}, [])

	const loadMorePosts = () => {
		const nextPage = page + postPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
		posts.push(...nextPosts);
		
		setPosts(posts)
		setPage(nextPage)
	}

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchValue(value)
	}

	const noMorePosts =  true ? page + postPerPage >= allPosts.length: false;
	return (
		
		<section className='container'>
			<div className="search-container">
				<TextInput onChange={handleChange} value={searchValue} type={searchValue} />
			</div>
			{filteredPosts.length > 0 && (
				<Posts posts={filteredPosts} />
			)}
			{filteredPosts.length === 0 && (
				<p>Não existem posts</p>
			)}
			<div className='button-container'>
				{!searchValue && (
					<Button 
						onClick={loadMorePosts}
						disabled={noMorePosts}
					> 
					Load more Posts 
					</Button>
				)}
			</div>
		</section>
	)
}

// usando Component
// export class Home extends Component {

// 	state = {
// 		posts: [],
// 		allPosts: [],
// 		page: 0,
// 		postPerPage: 10,
// 		searchValue: ""
// 	}

// 	async componentDidMount() {
// 		await this.loadPosts();
// 	}

// 	loadPosts = async () => {
// 		const { page, postPerPage } = this.state 
// 		const postsAndPhotos = await loadPosts()
// 		this.setState({
// 			posts: postsAndPhotos.slice(page, postPerPage),
// 			allPosts: postsAndPhotos,

// 		});
// 	}

// 	loadMorePosts = () => {
// 		const {
// 			page,
// 			postPerPage,
// 			allPosts,
// 			posts
// 		} = this.state

// 		const nextPage = page + postPerPage;
// 		const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
// 		posts.push(...nextPosts);
// 		this.setState({posts, page: nextPage});
// 	}

// 	handleChange = (e) => {
// 		const { value } = e.target;
// 		this.setState({ searchValue: value})
// 	}

// 	render() {
// 		const { posts, page, postPerPage, allPosts, searchValue } = this.state;
// 		const noMorePosts =  true ? page + postPerPage >= allPosts.length: false;

// 		const filteredPosts = !!searchValue ? 
// 		allPosts.filter(post => {
// 			return post.title.toLowerCase().includes(
// 				searchValue.toLowerCase()
// 			);
// 		}) 
// 		: posts;


// 		return (
// 			<section className='container'>
// 				<div className="search-container">
// 					<TextInput onChange={this.handleChange} value={searchValue} type={searchValue} />
// 				</div>
// 				{filteredPosts.length > 0 && (
// 					<Posts posts={filteredPosts} />
// 				)}
// 				{filteredPosts.length === 0 && (
// 					<p>Não existem posts</p>
// 				)}
// 				<div className='button-container'>
// 					{!searchValue && (
// 						<Button 
// 							onClick={this.loadMorePosts}
// 							disabled={noMorePosts}
// 						> 
// 						Load more Posts 
// 						</Button>
// 					)}
// 				</div>
// 			</section>
// 		)
// 	}
// }
