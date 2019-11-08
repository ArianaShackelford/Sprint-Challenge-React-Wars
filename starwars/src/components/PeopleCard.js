import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    width: 300px;
    max-height: 30rem;
    background: white;
    margin: 20px;
    border-radius: 10px;
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

const Info = styled.p`

`;

const PeopleCard = (props) => {
    return(
        <>
            <Card className = 'personCard'>
                <Name>{props.name}</Name>
                <Info>Height: {props.height}"</Info>
                <Info>Weight: {props.mass}lbs</Info>
                <Info>Hair color: {props.hairColor}</Info>
                <Info>Skin color: {props.skinColor}</Info>
            </Card>
        </>
    )
}
export default PeopleCard;