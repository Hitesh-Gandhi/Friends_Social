import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friends Social</h3>
                    <span className="loginDesc">Connect with Friends Around You on Friends Social.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create A New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
