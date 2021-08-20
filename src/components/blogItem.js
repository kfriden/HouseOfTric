import React from 'react';

const BlogItem = props => {
    const {
        id,
        title,
        content
    } = props.blogItem;

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {content}
            </div>
        </div>
    )
}

export default BlogItem; 