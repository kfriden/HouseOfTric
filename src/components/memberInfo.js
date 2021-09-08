import React from 'react';

const MemberInfo = props => {
    const {
        id,
        name,
        birth_name,
        quirk,
        age,
        rank,
        location,
        villain_vigilante,
        description

    } = props.memberItem;

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h4>Birth Name: {birth_name}</h4>
                <h4>Quirk: {quirk}</h4>
                <h4>Age: {age}</h4>
                <h4>Rank: {rank}</h4>
                <h4>Location: {location}</h4>
                <h4>Villain/Vigilante: {villain_vigilante}</h4>
                <h4>Description: {description}</h4>
                </div>
           
        </div>
    )
}

export default MemberInfo; 