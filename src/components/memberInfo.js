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
            <div>
                    <img className="member-image" src={images} />
                    <div className="member-info">
                        <h2>{name}</h2>
                        <h4>Birth Name: {birth_name}</h4>
                        <h4>Quirk: {quirk}</h4>
                        <h4>Age: {age}</h4>
                        <h4>Rank: {rank}</h4>
                        <h4>Location: {location}</h4>
                        <h4>Villain/Vigilante: {villain_vigilante}</h4>
                        <h4>Description: {description}</h4>
                    </div>
                </div> );
    }
}


    

            
           
    


export default MemberCard; 