import React, { Component } from 'react';

class MemberCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            birth_name,
            quirk,
            age,
            rank,
            location,
            villain_vigilante,
            description,
            images
    
        } = this.props.memberItem;
        return (
                <div className="member">
                <img className="member-image" src={images} />
                    <div className="description">
                        <h1>{name}</h1>
                        <h3>Birth Name: {birth_name}</h3>
                        <h3>Quirk: {quirk}</h3>
                        <h3>Age: {age}</h3>
                        <h3>Rank: {rank}</h3>
                        <h3>Location: {location}</h3>
                        <h3>Villain/Vigilante: {villain_vigilante}</h3>
                        <h3>Description: {description}</h3>
                    </div>
                    
                </div>
                
             );
    }
}


export default MemberCard; 