const Post = ({post}) => {
    return (
        <div className='post'>
            <h5>{`@${post.user} on ${post.date}`}</h5>
            <p>{post.tweet}</p>
        </div>
    )
}

export default Post
