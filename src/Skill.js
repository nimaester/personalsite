import React from "react";

const Skill = ({ techSkill }) => {
  return (
    <div className='tech-skill'>
      <img className='skill-img' src={techSkill[1]} alt='' />
      <h3>{techSkill[0]}</h3>
      <p className='skill-desc'>{techSkill[2]}</p>
    </div>
  );
};

export default Skill;
