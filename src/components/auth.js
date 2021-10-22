import React, { Component }  from 'react';
import validateInput from './validate';
import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorText: ""
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
       
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        
        console.log("Handle submit",data);
        axios.post("http://localhost:8000/rest-auth/login/", data)
        // fetch("http://localhost:8000/rest-auth/login/", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        .then(
            res => {
                console.log(res)
            })
        .catch(err => {
            console.log(err);
            this.setState({
                errorText: "An error occured"
            });
        });
            
        
        
        
        
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
                    <div>{this.state.errorText}</div>
                    <input type="username" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} />
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