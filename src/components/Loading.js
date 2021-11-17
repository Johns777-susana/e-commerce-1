import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const Loading = () => {
  return (
    <div className='loading-container'>
      <PuffLoader size={100} />
    </div>
  );
};

export default Loading;
