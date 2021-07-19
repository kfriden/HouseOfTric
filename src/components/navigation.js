import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                  <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                  </NavLink>
                </div>
      
                <div className="nav-link-wrapper">
                  <NavLink to="/about" activeClassName="nav-link-active">
                    About
                  </NavLink>
                </div>

                <div className="nav-link-wrapper">
                  <NavLink to="/members" activeClassName="nav-link-active">
                    Members
                  </NavLink>
                </div>
      
                <div className="nav-link-wrapper">
                  <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                  </NavLink>
                </div>

                <div className="nav-link-wrapper">
                  <NavLink to="/login" activeClassName="nav-link-active">
                    Login <FontAwesomeIcon icon="sign-in-alt" />
                  </NavLink>
                </div>
                
                
              </div>
          );
    }
}
    
export default Navigation;