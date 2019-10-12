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

  const {
    city,
    currentTemp,
    forecast,
    selectedDay,
    selectDay,
    showOneDay,
    selectedDayWeather,
    cardSize
  } = props;

  function renderWeek() {
    return forecast.map((day, i) => (
      <Day
        selectDay={selectDay}
        showOneDay={showOneDay}
        key={i}
        day={day.day}
        low={day.temp[0]}
        high={day.temp[15]}
      />
    ));
  }

  return (
    <Card className={classes.parentCard}>
      <div className={cardSize}>
        <CardContent>
          <Typography variant="h5" color="textSecondary">
            {city}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {selectedDay}
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
                style={{
                  marginRight: '0.2em',
                  fontSize: '5vw',
                  color: '#d4d2d2'
                }}
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
              <Typography>
                {selectedDayWeather.humidity
                  ? `Humidity: ${selectedDayWeather.humidity}`
                  : `Humidity: 0%`}
              </Typography>
              <Typography>
                {selectedDayWeather.wind
                  ? `Wind: ${selectedDayWeather.wind}`
                  : `Wind: 0 mph`}
              </Typography>
            </div>
          </div>
        </CardContent>
      </div>

      <CardActions>
        <Button size="small">More Weather Info</Button>
      </CardActions>
      <div className={classes.week}>{renderWeek()}</div>
    </Card>
  );
}

const useStyles = makeStyles({
  parentCard: {
    height: '65vh',
    width: '95vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '1vh',
    marginTop: '1vh',
    marginBottom: '1vh'
  },
  currentTemp: {
    fontSize: '4vw'
  },
  week: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '3vh'
  },
  degree: {
    fontSize: '2.5vh',
    opacity: 0.8
  },
  cardSize: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
