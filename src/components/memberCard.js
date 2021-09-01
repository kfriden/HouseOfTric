import React, { Component } from 'react';
import MemPics from './memPics';

class Card extends Component {
    constructor() {
        super();
      
    }

    render() {
        return (
            <div>
                <MemPics />
                <div>
                    <h2>Name</h2>
                    <h4>Birth Name</h4>
                    <h4>Quirk</h4>
                    <h4>Age</h4>
                    <h4>Rank</h4>
                    <h4>Location</h4>
                    <h4>Villain/Vigilante</h4>
                    <h4>Description</h4>
                </div>
            </div>
        );
      }
    }

export default Card;