// imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { EventList } from '../helpers/EventList';
import '../styles/EventDetail.css';

function EventDetail() {
  // Extract the id parameter from the URL
  const { id } = useParams();
  // Get the event object corresponding to the ID from the EventList
  const event = EventList[id];

  return (
    <div className='eventDetail'>
      {event ? (
        <>
          <h1>{event.name}</h1>
          <img src={event.image} alt={event.name} />
          <p><strong>Περιγραφή:</strong> {event.description}</p>
          <p><strong>Ημερομηνία:</strong> {event.date}</p>
          <p><strong>Τιμή:</strong> {event.price}</p>
          {event.additionalInfo1 && (
            <p><strong>Αναλυτικές Πληροφορίες: <br></br> <br></br></strong> {event.additionalInfo1}</p>
          )}
          {event.additionalInfo2 && ( <p>{event.additionalInfo2}</p> )}
          {event.additionalImages && (
              <div>
              {event.additionalImages.map((image, index) => (
                <img key={index} src={image} alt={`Additional Image ${index + 1}`} />
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
}

export default EventDetail;
