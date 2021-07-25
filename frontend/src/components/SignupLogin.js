import {FaTwitter} from 'react-icons/fa'
const SignupLogin = () => {

    const signUp = (
    <div className="form-wrapper">
        <h2>Create your account</h2>
        <FaTwitter style={{color: '#1DA1F2', fontSize:'3em', position: 'relative', left: '226px', top:'20px'}}/>
        <form className="signuplogin-form">
            <div className="form-group">
                <input type="email" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Username"/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <input className="signuplogin-btn" type="submit" value="Sign Up"/>
            </div>
        </form>
    </div>
    )
    return (
        <>{signUp}</>
    )
}

export default SignupLogin
