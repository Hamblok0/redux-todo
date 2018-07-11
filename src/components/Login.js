import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className="LoginBody">
                <h3>Login</h3>
                <form className="LoginForm">
                    <ul>
                        <li>
                            <input type="text" placeholder="Email..."/>
                        </li>
                        <li>
                            <input type="text" placeholder="Password..."/>
                        </li>
                    </ul>
                </form>
                <Link to="/signup" className="SignupLink">Don't have an account?</Link>
            </div>
        )
    }
}

export default Login