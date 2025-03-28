import React from 'react';


const ReportForm = () => {
  return (
    <form className="report-form">
      <label>Name:</label>
      <input type="text" placeholder="Enter name" />
      <label>Age:</label>
      <input type="number" placeholder="Enter age" />
      <label>Location:</label>
      <input type="text" placeholder="Last seen location" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportForm;
