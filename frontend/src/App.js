import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Form from './components/Form'
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(()=>{
    axios.get('http://localhost:8000/api/tweets/').then(response=>setPosts(response.data))
  }, []);

  const onAdd = async (tweet) => {
    const user = 'chriskccho'
    //console.log(JSON.stringify({tweet,user}))
    const res = await fetch('http://localhost:8000/api/tweets/', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({tweet, user})
    })

    const data = await res.json()

    setPosts([data,...posts])
  }
  return (
    // <div className="container">
    //   <Sidebar loggedIn = {loggedIn}/>
    //   <Posts posts={posts} onAdd={onAdd}/>
    // </div>
    <div className="container">
        <Form/>
    </div>
  );
}

export default App;
