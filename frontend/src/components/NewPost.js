import {useState} from 'react'
const NewPost = ({onAdd}) => {
    const [tweet, setTweet] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        onAdd(tweet)

        setTweet('')

    }

    return (

        <form className='form' onSubmit={onSubmit}>
            <textarea className="tweet" value={tweet} onChange={e => setTweet(e.target.value)} placeholder="What's happening?"/>
            <input className="tweet-btn" type="submit" disabled={tweet === ''} value="TWEET" />
        </form>

    )
}

export default NewPost
