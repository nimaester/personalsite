import React from "react";

const ExperienceEntry = ({ data }) => {
  return (
    <div className='exp-container'>
      <div className='exp-entry'>
        <div className='exp-details'>
          <h3>{data[0]}</h3>
          <h3 className='year'>{data[1]}</h3>
        </div>
        <div className='exp-desc'>
          <p>{data[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
