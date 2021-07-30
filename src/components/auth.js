import React, { Component }  from 'react';

class Auth extends Component {
    render() {
        return (
            <div>
                
                <form className="auth-center">
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} error={errors.email}/>
                    <input type="password" name="password" placeholder="Password" />

                    <div>
                        <button className="submit__btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    };
}
       
        


export default Auth;