import React from 'react';
import { useParams } from 'react-router-dom';


const CaseDetails = () => {
  const { id } = useParams();

  return (
    <div className="case-details">
      <h1>Case Details for ID: {id}</h1>
      <p>More information will be displayed here.</p>
    </div>
  );
};

export default CaseDetails;