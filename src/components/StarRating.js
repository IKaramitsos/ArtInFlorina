import React from 'react';
import ReactStars from 'react-rating-stars-component';

const StarRating = ({ rating, onRate }) => {
  return (
    <div  className='starRatingContainer'>
    <ReactStars
      count={5}
      value={rating}
      onChange={onRate}
      size={24}
      activeColor="#ffd700"
    />
    </div>
  );
};

export default StarRating;
