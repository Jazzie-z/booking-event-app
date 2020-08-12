import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Container = styled.div`
width: 200px;
margin: 10px;
border: 1px solid;
height: 190px;
`
const Title = styled.div`
padding: 0 8px;
color:#4e4e4e;
`
const Image = styled.img`
width:100%;
`
const Button = styled.div`
background:${({ active }) => active ? 'orange' : 'grey'};
width:fit-content;
padding: 5px 10px;
border-radius: 10px;
color:white;
cursor:pointer;
margin: 10px auto;
`
const EventCard = ({ item }) => {
    const history = useHistory();
    return (
        <Container>
            <Image src={item.image} />
            <Title>{item.name}</Title>
            <Button active={item.noSeats} onClick={() => {
                if (item.noSeats) history.push(`/booking/${item.id}`)
            }}>{item.noSeats ? 'Book Now' : 'Sold Out'}</Button>
        </Container>
    )
}

export default EventCard;
