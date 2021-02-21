import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section className="projects"ref={ref}>
      Projects
    </section>
  );
});

export default Projects;