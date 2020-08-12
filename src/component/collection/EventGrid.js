import React from 'react'
import { useSelector } from "react-redux"
import styled from 'styled-components';
import EventCard from '../container/EventCard';
const Grid = styled.div`
display:flex;
flex-wrap:wrap;
margin: 10px 20px;
overflow-y: scroll;
height: 80vh;
width:100%;
`
const NoContent = styled.div`
margin:10px;
font-size:24px;
`
const EventGrid = () => {
    const data = useSelector(state => state.search);
    if (data.length)
        return (
            <Grid>
                {data.map(item => (<EventCard item={item} />))}
            </Grid>
        )
    return <NoContent>Oops! Sorry no content Available</NoContent>
}

export default EventGrid;
