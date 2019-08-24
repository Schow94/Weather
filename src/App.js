import React, { Component } from 'react';

import WeatherCard from './WeatherCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      city: 'San Francisco',
      currentTemp: '',
      forecast: [
        {
          day: '',
          temp: [],
          humidity: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          skies: { main: '', description: '' }
        },
        {
          day: '',
          temp: [],
          humidity: '',
          skies: { main: '', description: '' }
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        // console.log(data);

        const temp = [];
        let week = [];

        data.map(item => {
          temp.push(item.main.temp_min);
          temp.push(item.main.temp_max);
          return temp;
        });

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

        let weather = [
          { day: week[0], temp: [] },
          { day: week[1], temp: [] },
          { day: week[2], temp: [] },
          { day: week[3], temp: [] },
          { day: week[4], temp: [] }
        ];

        for (let i = 0; i < 16; i++) {
          weather[0].temp.push(Math.round(temp[i]));
          weather[0].temp.sort();
        }

        for (let i = 16; i < 32; i++) {
          weather[1].temp.push(Math.round(temp[i]));
          weather[1].temp.sort();
        }

        for (let i = 32; i < 48; i++) {
          weather[2].temp.push(Math.round(temp[i]));
          weather[2].temp.sort();
        }

        for (let i = 48; i < 64; i++) {
          weather[3].temp.push(Math.round(temp[i]));
          weather[3].temp.sort();
        }

        for (let i = 64; i < 80; i++) {
          weather[4].temp.push(Math.round(temp[i]));
          weather[4].temp.sort();
        }
        // console.log(weather);

        this.setState({
          city: city,
          forecast: weather
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

  render() {
    return (
      <div style={styles.container}>
        <h1>Weather App</h1>
        <h1>{`Current Temperature in ${this.state.city} is ${
          this.state.currentTemp
        }°F`}</h1>

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
          />
          <Button className="button" color="primary" variant="contained">
            Check Weather
          </Button>
        </form>

        <div style={styles.buttons}>
          <Button
            style={styles.button}
            variant="contained"
            onClick={() => this.getData('London')}
          >
            London Weather
          </Button>
          <Button
            style={styles.button}
            variant="contained"
            onClick={() => this.getData('Torrance')}
          >
            Torrance Weather
          </Button>
          <Button
            style={styles.button}
            variant="contained"
            onClick={() => this.getData('Las Vegas')}
          >
            Las Vegas Weather
          </Button>
        </div>
        <WeatherCard
          city={this.state.city}
          currentTemp={this.state.currentTemp}
          forecast={this.state.forecast}
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
    fontFamily: 'Roboto, sans-serif'
  },
  button: { marginLeft: '10px' },
  buttons: {
    marginTop: '30px',
    marginBottom: '10px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
};
