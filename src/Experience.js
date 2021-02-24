import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <section className="experience"ref={ref}>
      <h2>Experience</h2>
    </section>
  );
});

export default Experience;