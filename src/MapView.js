import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };
  // api key 4201738803816157

  componentDidMount() {
    this.setState({mapLoaded: true});
  }

  onRegionChangeComplete = (region) => {
    console.log(region);
    this.setState({region});
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
      </View>
    );
  }
}

export default MapScreen;
