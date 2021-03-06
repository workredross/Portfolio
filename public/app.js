import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Name from 'Name';
import DisplayName from 'DisplayName';
import LatLong from 'LatLong';
import OpenWeatherAPI from 'OpenWeatherAPI'

require('style!css!LoaderCSS');
require('style!css!ArrowDownCSS');
require('style!css!BodyCSS');
require('style!css!NavBarCSS');
require('NavBarJS');
require('style!css!CardsCSS');
require('style!css!SkillsCSS');
require('FormSubmitJS');
require('style!css!InputFormCSS');
require('style!css!SocialMediaCSS');
require('style!css!BlogCSS');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lat: '',
      long: '',
      temp: 'Loading'
    }
  }

  onPass(Lat, Long) {
    var that = this;

    OpenWeatherAPI.getTemp(Lat, Long).then(function (data) {
      that.setState({
        lat: Lat,
        long: Long,
        temp: data.main.temp,
        loc: data.name
      });
    },
      function (errorMessage) {
        alert(errorMessage);
      });
  }

  handleSubmit(name) {

    this.setState({
      name: name
    })
  }

  render() {
    var {name,temp,loc } = this.state;
    return (
      <div>
        <Name handleSubmit={this.handleSubmit.bind(this)} />
        <DisplayName name={name} temp={temp} loc={loc} />
        <LatLong onPass={this.onPass.bind(this)} />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
