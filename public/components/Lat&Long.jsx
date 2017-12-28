import React, { Component } from 'react';

class LatLong extends Component{
  constructor(props) {
    super(props);

    this.state = {
      lat:'Loading',
      long:'Loading'
    }
  }
  componentDidMount() {
    var that = this;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        that.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        that.props.onPass(that.state.lat,that.state.long)
      },
      function (error) {

      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
  render () {

    return <div></div>
  }
}
export default LatLong;
