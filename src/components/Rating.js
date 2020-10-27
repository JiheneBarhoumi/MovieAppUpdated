import React from 'react';
import '../assets/rating.css';

const Rating = ({ rating, setRatingSearch }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span key={i} onClick={() => setRatingSearch(i)} id="#starfilled">
            ★
          </span>
        );
      } else {
        starsArray.push(
          <span key={i} onClick={() => setRatingSearch(i)}>
            ☆
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(rating)}</div>;
};

Rating.defaultProps = {
  setRatingSearch: () => {},
  rating: 1,
};

export default Rating;