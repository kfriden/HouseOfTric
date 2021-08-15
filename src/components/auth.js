import React, { Component }  from 'react';
import validateInput from './validate';
import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({
                errors
            });
        }
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        //console.log("Handle submit", this.state.email, this.state.password);
        const data = {
            email: this.email,
            password: this.password
        }
        axios.post("http://localhost:8000/login", data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        
        
        
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                
                <form className="auth-center" onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />

                    <div>
                        <button className="submit__btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default Auth;