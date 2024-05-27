import React, { useState } from 'react';
import { EventList } from '../helpers/EventList';
import EventItem from '../components/EventItem';
import '../styles/Event.css';

function Event() {
  // storing the search term input by the user
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('active');

  // Filter the events based on the search term and selected filter
  const filteredEventList = EventList.filter((event) => {
    const today = new Date();
    const eventDate = new Date(event.parsedDate);
  // Check if the event name matches the search term
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || 
      (filter === 'nearFuture' && eventDate > today) || 
      (filter === 'active' && eventDate.toDateString() === today.toDateString()) || 
      (filter === 'completed' && eventDate < today);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className='event'>
      <h1 className='eventTitle'>Events</h1>
      <div className="search-and-filters">
        <input 
          type="text" 
          placeholder="Search events..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'nearFuture' ? 'active' : ''} 
            onClick={() => setFilter('nearFuture')}
          >
            Near Future
          </button>
          <button 
            className={filter === 'active' ? 'active' : ''} 
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      <div className='EventList'>
        {filteredEventList.map((event, key) => (
          <EventItem
            key={key}
            id={key}
            image={event.image}
            name={event.name}
            description={event.description}
            date={event.date}
            price={event.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
