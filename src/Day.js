import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

export default function Day(props) {
  const classes = useStyles();
  console.log(props);
  const { low, high, day } = props;

  return (
    <div className={classes.day}>
      <Typography>Day: {day}</Typography>
      <i
        style={{ fontSize: '60px', color: '#fcdd74' }}
        className="fa fa-circle"
      />
      <Typography>{`${low}° ${high}°`}</Typography>
    </div>
  );
}

const useStyles = makeStyles({
  day: {
    width: '7em',
    height: '9em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    color: '#a8a7a7'
  }
});
