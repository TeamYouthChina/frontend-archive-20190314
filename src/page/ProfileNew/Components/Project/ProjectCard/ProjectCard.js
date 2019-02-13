import React from 'react';

import classes from './ProjectCard.module.css';

const projectCard = () => {
  return (
      <div className={classes.ProjectCard}>
          <p className={classes.Name}>
              name
          </p>
          <p className={classes.Time}>
              time
          </p>
          <p className={classes.Description}>
              description
          </p>
      </div>
  );
}

export default projectCard;