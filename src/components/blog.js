import React, { Component } from 'react';
import axios from 'axios';
import BlogItem from "./blogItem";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios.get("http://127.0.0.1:8000/api/blogs").then(response => {
      console.log(response)
      this.setState({
        blogItems: response.data
      });
    })
    .catch(error => {
      console.log("getBlogItems error", error);
    });
  }

  componentDidMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    })
    return (
      <div>
        
        {blogRecords}
      </div>
    );
  }
}

export default Blog;