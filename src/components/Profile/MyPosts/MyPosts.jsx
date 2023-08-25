import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{id: 1,message:'Hi, how are you?', likesCount: 12},
		{id: 2,message:'Its my FIRST post ?', likesCount: 23},
		{id: 3,message:'Its my SECOND post', likesCount: 2},
		{id: 4,message:'Its my THIRD post', likesCount: 48},
		{id: 5,message:'Its my FOURTH post ?', likesCount: 18},
		{id: 6,message:'Its my FIFTH post', likesCount: 2300}
	]

	let postsElements = posts
			.map( p => <Post message={p.message} likesCount={p.likesCount} />)

   return (
         <div className={s.postsBlock}>
				<h3>My post</h3>
				<div>
					<div>
						<textarea></textarea>
					</div>
					<div>
						<button>Add post</button>
					</div>
				</div>
				<div className={s.posts}>
					{postsElements}
					{/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
					<Post message={postData[1].message} likesCount={postData[1].likesCount} />
					<Post message={postData[2].message} likesCount={postData[2].likesCount} />
					<Post message={postData[3].message} likesCount={postData[3].likesCount} />
					<Post message={postData[4].message} likesCount={postData[4].likesCount} />
					<Post message={postData[5].message} likesCount={postData[5].likesCount} /> */}
				</div>
         </div>
   );
};

export default MyPosts;