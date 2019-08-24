import React from 'react';

import Day from './Day';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function WeatherCard(props) {
  const classes = useStyles();

  const { city, currentTemp, forecast } = props;

  function renderWeek() {
    return forecast.map((day, i) => (
      <Day key={i} day={day.day} low={day.temp[0]} high={day.temp[15]} />
    ));
  }

  return (
    <Card className={classes.parentCard}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Today's weather in {city}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex' }}>
            <i
              style={{ margin: '10px', fontSize: '60px', color: '#d4d2d2' }}
              className="fa fa-cloud"
            />
            <Typography className={classes.currentTemp}>
              {currentTemp}
              <span className={classes.degree}>°F</span>
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography>Precipitation:</Typography>
            <Typography>Humidity:</Typography>
            <Typography>Wind:</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">More Weather Info</Button>
      </CardActions>
      <div className={classes.week}>{renderWeek()}</div>
    </Card>
  );
}

const useStyles = makeStyles({
  title: {
    fontSize: 20
  },
  parentCard: {
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  currentTemp: {
    fontSize: 50
  },

  week: {
    display: 'flex',
    flexDirection: 'row'
  },
  degree: {
    fontSize: '20px',
    opacity: 0.8
  }
});
