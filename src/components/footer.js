import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <h2 className="title">Come Look For Us On...</h2>
                <div className="social-media-icons-wrapper">
                    <a href="/" target="_blank"><img src="assets/download.png" alt="tiktok"/></a>
                </div>
            </div>
        );
    }
}

export default Footer;