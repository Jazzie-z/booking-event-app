import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MOCK_EVENTS } from '../../mock'
import styled from 'styled-components'
import Form from '../container/Form'
import { useSelector } from 'react-redux'
const Container = styled.div`
padding: 10px;
`

const Image = styled.img``
const Title = styled.div`
font-size:24px;
`
const Seats = styled.div``
const Status = styled.div`
background:green;
color:white;
width:fit-content;
padding:0 5px;
margin: 10px;
`
const EventBooking = () => {
    const { id } = useParams()
    const data = MOCK_EVENTS.items.filter(item => item.id === id).pop()
    const history = useHistory()
    const { success } = useSelector(state => state.booking)
    if (!data) {
        history.push('/')
        return null
    }
    return (
        <Container>
            <Title>{data.name}</Title>
            <Seats>Number of seats available : {data.noSeats}</Seats>
            {success?<Status>Tickets booked !</Status>:''}
            <Form />
        </Container>
    )
}

export default EventBooking;
