import React from 'react';
import MissingCard from '../components/MissingCard';


const Browse = () => {
  return (
    <div className="browse">
      <h1>Browse Missing Persons</h1>
      <div className="card-container">
        <MissingCard name="John Doe" age={30} location="New York" />
        <MissingCard name="Jane Smith" age={25} location="California" />
      </div>
    </div>
  );
};

export default Browse;