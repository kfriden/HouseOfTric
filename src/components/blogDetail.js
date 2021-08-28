import React, { Component } from 'react';
import axios from 'axios';

class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        };
    }

    getBlogItem() {
        axios.get(`http://127.0.0.1:8000/api/blogs/${this.state.currentId}`)
        .then(response => {
            console.log('response', response);
        }).catch(error => {
            console.log('getBlogItem error', error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }
    render() {
        const {
            id,
            title,
            content
        } = this.state.blogItem;
        console.log("currentId", this.state.currentId)
        return (
            <div className="blog-container">
                <div className="content-container">
                    <h1>{title}</h1>
                </div>
            <div className="content">{content}</div>
            </div>
        );
    }
}

export default BlogDetail;