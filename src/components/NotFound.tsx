import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="error">
      <p className="title">Something went wrong... 😕</p>
      <p className="desc">Failed to load pizzas. Please try again later</p>
    </div>
  );
};

export default NotFound;
