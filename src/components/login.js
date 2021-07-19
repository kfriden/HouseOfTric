import React, { Component } from 'react';
import Juan from '../../static/assets/juan-auth.jpg';

class Login extends Component {
    render() {
        return (
            <div className="login-layout">
                <div className="left-column">
                    <img src={Juan} />
                </div>
                
                <div className="auth-center">Login</div>
                <div className="right-column">
                    <img src={Juan} />
                </div>
                
            </div>

            
        )
    }
}  


export default Login