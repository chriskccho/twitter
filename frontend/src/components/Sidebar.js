import {FaTwitter} from 'react-icons/fa'

const Sidebar = ({loggedIn}) => {

    const loggedInSidebar = (
        <div className="sidebar">
            <FaTwitter style={{color: '#1DA1F2', fontSize:'3em', paddingTop: '10px'}}/>
            <a href="#">All Posts</a>
            <a href="#">Profile</a>
            <a href="#">Following</a>
            <a href="#">Log out</a>
        </div>
    )

    const loggedOutSidebar = (
        <div className="sidebar">
            <FaTwitter style={{color: '#1DA1F2', fontSize:'3em', paddingTop: '10px'}}/>
            <a href="#">All Posts</a>
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
        </div>
    )
    return <>{loggedIn ? loggedInSidebar : loggedOutSidebar}</>
    
}

export default Sidebar
