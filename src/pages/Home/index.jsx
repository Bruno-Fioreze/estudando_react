import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button'

export class Home extends Component {

	state = {
		posts: [],
		allPosts: [],
		page: 0,
		postPerPage: 5
	}

	async componentDidMount() {
		await this.loadPosts();
	}

	loadPosts = async () => {
		const { page, postPerPage } = this.state 
		const postsAndPhotos = await loadPosts()
		this.setState({
			posts: postsAndPhotos.slice(page, postPerPage),
			allPosts: postsAndPhotos,

		});
	}

	loadMorePosts = () => {
		const {
			page,
			postPerPage,
			allPosts,
			posts
		} = this.state

		const nextPage = page + postPerPage;
		const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
		posts.push(...nextPosts);
		this.setState({posts, page: nextPage});
	}

	render() {
		const { posts } = this.state;
		return (
			<section className='container'>
				<Posts posts={posts} />
				<Button onClick={this.loadMorePosts}> Load more Posts </Button>
			</section>
		)
	}
}
