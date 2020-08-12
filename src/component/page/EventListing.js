import React from 'react'
import Search from '../container/Search';
import EventGrid from '../collection/EventGrid';

const EventListing = () => {
    return (
        <div>
            <Search />
            <EventGrid />
        </div>
    )
}

export default EventListing;
