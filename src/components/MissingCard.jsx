import React from 'react';


const MissingCard = ({ name, age, location }) => {
  return (
    <div className="missing-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default MissingCard;