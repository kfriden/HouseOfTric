import React from 'react';

const MemPic = props => {
    console.log(props.imageUrl);
    return (
        <div>
            <img className="member-image" src={props.imageUrl} />
        </div>
    )
}

export default MemPic; 