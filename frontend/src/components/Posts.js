import Post from './Post'
import NewPost from './NewPost'

const Posts = ({posts, onAdd}) => {
    return (
        <div className="posts">
            <NewPost onAdd={onAdd}/>
            {posts.map(post => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Posts
