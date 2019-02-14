import React from 'react';

import classes from './ProjectCard.module.css';

const projectCard = (props) => {
  return (
      <div className={classes.ProjectCard}>
          <p className={classes.Name}>
            {props.data.name}
          </p>
          <p className={classes.Time}>
            {props.data.duration.begin+"-"+props.data.duration.end}
          </p>
          <p className={classes.Description}>
            {props.data.note}
          </p>
      </div>
  );
}

export default projectCard;