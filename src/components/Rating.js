import React from 'react';

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <div>
        <span>
          <i
            style={{ color: '#3494e6' }}
            className={
              value >= 1
                ? 'fa fa-star'
                : value >= 0.5
                ? 'fa fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>{' '}
        <span>
          <i
            style={{ color: '#3494e6' }}
            className={
              value >= 2
                ? 'fa fa-star'
                : value >= 1.5
                ? 'fa fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>{' '}
        <span>
          <i
            style={{ color: '#3494e6' }}
            className={
              value >= 3
                ? 'fa fa-star'
                : value >= 2.5
                ? 'fa fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>{' '}
        <span>
          <i
            style={{ color: '#3494e6' }}
            className={
              value >= 4
                ? 'fa fa-star'
                : value >= 3.5
                ? 'fa fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>{' '}
        <span>
          <i
            style={{ color: '#3494e6' }}
            className={
              value >= 5
                ? 'fa fa-star'
                : value >= 4.5
                ? 'fa fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      </div>
      <span className='rating-text'>{text && text}</span>
    </div>
  );
};

export default Rating;
