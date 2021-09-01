import React from 'react';

const MemPic = props => {
    console.log(props.images);
    return (
        <div>
            <img src={props.images} />
        </div>
    )
}

export default MemPic; 