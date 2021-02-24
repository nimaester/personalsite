import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section className="projects"ref={ref}>
      <h2>Projects</h2>
    </section>
  );
});

export default Projects;