import React, { Component } from 'react';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state= {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Handle event", this.state.email, this.state.password);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("Handle change", event);
    }
    render() {
        return (
            <div className="auth-center">
                <h2>Login</h2>
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