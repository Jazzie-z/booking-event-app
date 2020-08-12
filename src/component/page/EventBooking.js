import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MOCK_EVENTS } from '../../mock'
import styled from 'styled-components'
import Form from '../container/Form'
const Container = styled.div`
padding: 10px;
`

const Image = styled.img``
const Title = styled.div`
font-size:24px;
`
const Seats = styled.div``
const EventBooking = () => {
    const { id } = useParams()
    const data = MOCK_EVENTS.items.filter(item => item.id === id).pop()
    const history = useHistory()
    if (!data) {
        history.push('/')
        return null
    }
    return (
        <Container>
            <Title>{data.name}</Title>
            <Seats>Number of seats available : {data.noSeats}</Seats>
            <Form />
        </Container>
    )
}

export default EventBooking;
