import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Event.css';
import StarRating from './StarRating';

function EventItem({image, name, description, date, price, id}) {
  // State to manage the rating of the event item
  const [rating, setRating] = useState(0);

  // Function to handle the change in rating
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='EventItem'>
      <Link to={`/event/${id}`} className='EventItemLink'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        </Link>
        <p><b>Περιγραφή: </b>{description}</p>
        <p><b>Τοποθεσία: </b>{date}</p>
        <p><b>Τιμή: </b>{price}</p>
        <div className="starRatingContainer">
            <StarRating rating={rating} onRate={handleRating} />
          </div>
    </div>
  )
}

export default EventItem