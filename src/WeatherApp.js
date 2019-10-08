import React, { Component } from 'react';

import WeatherCard from './WeatherCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import bg from './bg2.svg';

const axios = require('axios');
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      city: 'San Francisco',
      currentTemp: '',
      selectedDay: 'Mon',
      selectedDayWeather: {
        day: 'Mon',
        temp: [],
        humidity: '',
        wind: '',
        rain: ''
      },
      forecast: [
        {
          day: '',
          temp: [],
          humidity: '',
          wind: '',
          rain: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          wind: '',
          rain: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          wind: '',
          rain: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          wind: '',
          rain: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          wind: '',
          rain: '',
          skies: { main: '', description: '' }
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.showOneDay = this.showOneDay.bind(this);
  }

  getData(city) {
    let currentUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API_KEY}`;
    return axios
      .get(currentUrl)

      .then(response => {
        const data = response.data;
        let currentTemp = data.main.temp;
        this.setState({
          city: city,
          currentTemp: currentTemp
        });
      })

      .catch(error => console.log('There was an error: ', error));
  }

  getFiveDay(city) {
    let fiveDayUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${API_KEY}`;
    return axios
      .get(fiveDayUrl)

      .then(response => {
        const data = response.data.list;
        console.log('data', data);

        let week = [];
        let humidity = [];
        const temp = [];
        let wind = [];
        let rain = [];

        data.map(item => {
          temp.push(item.main.temp_min);
          temp.push(item.main.temp_max);
          return temp;
        });

        data.map(item => {
          humidity.push(item.main.humidity);
          return humidity;
        });

        data.map(item => {
          wind.push(item.wind.speed);
          return wind;
        });

        // STILL WORKING ON FILTERING OUT rain objs without a rain[3h] prop
        data.map(item => {
          return rain.push(item.rain);
        });
        // Leave rain out for now

        const day = Date().slice(0, 3);

        if (day === 'Sun') {
          week = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
        } else if (day === 'Mon') {
          week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        } else if (day === 'Tue') {
          week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        } else if (day === 'Wed') {
          week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        } else if (day === 'Thu') {
          week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        } else if (day === 'Fri') {
          week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        }
        //case where day is Saturday
        else {
          week = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
        }

        let forecast = [
          { day: week[0], temp: [], humidity: '' },
          { day: week[1], temp: [], humidity: '' },
          { day: week[2], temp: [], humidity: '' },
          { day: week[3], temp: [], humidity: '' },
          { day: week[4], temp: [], humidity: '' }
        ];

        //Add High/Low temps for each day
        for (let i = 0; i < 16; i++) {
          forecast[0].temp.push(Math.round(temp[i]));
          forecast[0].temp.sort();
        }

        for (let i = 16; i < 32; i++) {
          forecast[1].temp.push(Math.round(temp[i]));
          forecast[1].temp.sort();
        }

        for (let i = 32; i < 48; i++) {
          forecast[2].temp.push(Math.round(temp[i]));
          forecast[2].temp.sort();
        }

        for (let i = 48; i < 64; i++) {
          forecast[3].temp.push(Math.round(temp[i]));
          forecast[3].temp.sort();
        }

        for (let i = 64; i < 80; i++) {
          forecast[4].temp.push(Math.round(temp[i]));
          forecast[4].temp.sort();
        }

        //Add humidities for each day & avg to get 1 humidity/day
        let dayOneHumid = [];
        let dayTwoHumid = [];
        let dayThreeHumid = [];
        let dayFourHumid = [];
        let dayFiveHumid = [];

        const average = arr =>
          Math.round(arr.reduce((acc, c) => acc + c) / arr.length);

        for (let i = 0; i < 8; i++) {
          dayOneHumid.push(humidity[i]);
          // forecast[0].humidity.push(humidity[i]);
        }
        forecast[0].humidity = average(dayOneHumid);

        for (let i = 8; i < 16; i++) {
          dayTwoHumid.push(humidity[i]);
        }
        forecast[1].humidity = average(dayTwoHumid);

        for (let i = 16; i < 24; i++) {
          dayThreeHumid.push(humidity[i]);
        }
        forecast[2].humidity = average(dayThreeHumid);

        for (let i = 24; i < 32; i++) {
          dayFourHumid.push(humidity[i]);
        }
        forecast[3].humidity = average(dayFourHumid);

        for (let i = 32; i < 40; i++) {
          dayFiveHumid.push(humidity[i]);
        }
        forecast[4].humidity = average(dayFiveHumid);

        // Wind
        let dayOneWind = [];
        let dayTwoWind = [];
        let dayThreeWind = [];
        let dayFourWind = [];
        let dayFiveWind = [];

        for (let i = 0; i < 8; i++) {
          dayOneWind.push(wind[i]);
        }
        forecast[0].wind = average(dayOneWind);

        for (let i = 8; i < 16; i++) {
          dayTwoWind.push(wind[i]);
        }
        forecast[1].wind = average(dayTwoWind);

        for (let i = 16; i < 24; i++) {
          dayThreeWind.push(wind[i]);
        }
        forecast[2].wind = average(dayThreeWind);

        for (let i = 24; i < 32; i++) {
          dayFourWind.push(wind[i]);
        }
        forecast[3].wind = average(dayFourWind);

        for (let i = 32; i < 40; i++) {
          dayFiveWind.push(wind[i]);
        }
        forecast[4].wind = average(dayFiveWind);

        // Rain - API returning some undefined rain values
        // messes up the app

        let dayOneRain = [];
        let dayTwoRain = [];
        let dayThreeRain = [];
        let dayFourRain = [];
        let dayFiveRain = [];

        // for (let i = 0; i < 8; i++) {
        //   dayOneRain.push(rain[i]);
        // }
        // forecast[0].rain = average(dayOneRain);

        // for (let i = 8; i < 16; i++) {
        //   dayTwoWind.push(rain[i]);
        // }
        // forecast[1].rain = average(dayTwoRain);
        // console.log('array', dayTwoRain);

        // for (let i = 16; i < 24; i++) {
        //   dayThreeRain.push(rain[i]);
        // }
        // forecast[2].rain = average(dayThreeRain);

        // for (let i = 24; i < 32; i++) {
        //   dayFourRain.push(rain[i]);
        // }
        // forecast[3].rain = average(dayFourRain);

        // for (let i = 32; i < 40; i++) {
        //   dayFiveRain.push(rain[i]);
        // }
        // forecast[4].rain = average(dayFiveRain);

        // console.log(rain);

        // console.log(humidity);
        // console.log(dayOneHumid);

        this.setState({
          city: city,
          forecast: forecast
        });
      })

      .catch(error => console.log('There was an error: ', error));
  }

  componentDidMount() {
    this.getData(this.state.city);
    this.getFiveDay(this.state.city);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.getData(this.state.text);
    this.getFiveDay(this.state.text);
    this.setState({ text: '' });
  }

  selectDay(day) {
    this.setState({
      selectedDay: day
    });
  }

  showOneDay(day) {
    let currentDayData = this.state.forecast.filter(
      day => day.day === this.state.selectedDay
    );

    console.log(currentDayData);

    this.setState({
      selectedDayWeather: currentDayData[0]
    });
  }

  render() {
    console.log('state', this.state);
    const { input, title } = styles;
    return (
      <div style={styles.container}>
        <h1 style={title}>Weather App</h1>

        <form style={styles.formContainer} onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: '400px' }}
            autoComplete="off"
            id="my-input"
            aria-describedby="my-helper-text"
            type="text"
            name="text"
            placeholder="Enter a City"
            onChange={this.handleChange}
            value={this.state.text}
            style={input}
          />
          <Button className="button" color="primary" variant="contained">
            Check Weather
          </Button>
        </form>

        <WeatherCard
          city={this.state.city}
          currentTemp={this.state.currentTemp}
          forecast={this.state.forecast}
          selectedDay={this.state.selectedDay}
          selectDay={this.selectDay}
          selectedDayWeather={this.state.selectedDayWeather}
          showOneDay={this.showOneDay}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    /* background by SVGBackgrounds */
    // backgroundColor: '#1baa13',
    backgroundColor: '#e1e3e6',
    // backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'scroll',
    paddingTop: '2em'
  },
  button: { marginLeft: '10px' },
  buttons: {
    marginTop: '30px',
    marginBottom: '10px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px'
  },
  input: {
    marginTop: '1em',
    marginRight: '1em',
    width: '300px'
  },
  title: {
    fontSize: '3em',
    letterSpacing: '8px'
  }
};
