import React, { Component } from 'react';
import WeatherApp from './WeatherApp';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <WeatherApp />
      </div>
    );
  }
}
