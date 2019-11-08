import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    width: 300px;
    max-height: 30rem;
    background: snow;
    margin: 20px;
    border-radius: 10px;
    font-family: 'Raleway', sans-serif;
`;

const Name = styled.h2`
    background: slategrey;
    width: 100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content: center;
    margin: 0px;
    border-radius: 10px 10px 0px 0px;
    
`;



const PeopleCard = (props) => {
    return(
        <>
            <Card className = 'personCard'>
                <Name>{props.name}</Name>
                <p>Height: {props.height}"</p>
                <p>Weight: {props.mass}lbs</p>
                <p>Hair color: {props.hairColor}</p>
                <p>Skin color: {props.skinColor}</p>
            </Card>
        </>
    )
}
export default PeopleCard;