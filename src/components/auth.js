import React, { Component } from 'react';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state= {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <div>
                <h2 className="auth-center">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Auth;