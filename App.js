import React from 'react';
import {StyleSheet, Text, View, NativeModules, Linking} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Ball from './src/Ball';
import Deck from './src/Deck';
import MapScreen from './src/MapView';
import * as store from './store';
import {Provider} from 'react-redux';

const DATA = [
  {
    id: 0,
    text: 'Card #1',
    uri: 'https://lh4.googleusercontent.com/sWgmhw5VY70XjS_V8I0-LnJu4aHPqP95IZ1-6xojkr-kkvDb1M8TLBD3H3XN_4KH0OoxmLEqx4tsJBvhp-l1r0Gfja6knMcDHacmWG02xSfA4-I3ev-utWdIVqpHmvkDwiLP0cXltzvwtX42Sw5r-CZ77g3-LO8gis63IcvwgNnHcDZZUUCw6Csv2A',
  },
  {
    id: 1,
    text: 'Card #2',
    uri: 'https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/hero_polaris.jpg?itok=sqjMXTJ4',
  },
  {
    id: 2,
    text: 'Card #3',
    uri: 'https://www.chatelaine.com/wp-content/uploads/2019/10/Loneliness.jpg',
  },
  {
    id: 3,
    text: 'Card #4',
    uri: 'https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg',
  },
  {
    id: 4,
    text: 'Card #5',
    uri: 'https://lh4.googleusercontent.com/sWgmhw5VY70XjS_V8I0-LnJu4aHPqP95IZ1-6xojkr-kkvDb1M8TLBD3H3XN_4KH0OoxmLEqx4tsJBvhp-l1r0Gfja6knMcDHacmWG02xSfA4-I3ev-utWdIVqpHmvkDwiLP0cXltzvwtX42Sw5r-CZ77g3-LO8gis63IcvwgNnHcDZZUUCw6Csv2A',
  },
  {
    id: 5,
    text: 'Card #6',
    uri: 'https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/hero_polaris.jpg?itok=sqjMXTJ4',
  },
  {
    id: 6,
    text: 'Card #7',
    uri: 'https://www.chatelaine.com/wp-content/uploads/2019/10/Loneliness.jpg',
  },
  {
    id: 7,
    text: 'Card #8',
    uri: 'https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg',
  },
];

const handleClick = () => {
  console.log('click');
  Linking.openURL(
    'https://www.growingself.com/how-to-be-successful-online-dating/',
  );
};
class App extends React.Component {
  renderCard(item) {
    return (
      <Card style={styles.images} key={item.id} title={item.text}>
        <Card.Image source={{uri: item.uri}} />
        <Card.Title>{item.text}</Card.Title>
        <Button
          icon={{name: 'code', color: 'white'}}
          buttonStyle={styles.pressButtons}
          title="Get Advice Now!"
          onPress={handleClick}
        />
      </Card>
    );
  }
  renderNoMoreCards() {
    return (
      <Card title="All done!">
        <Text style={{marginBottom: 10}}>no more content here!</Text>
        <Button
          icon={{name: 'swap-horiz', color: 'white'}}
          buttonStyle={styles.pressButtons}
          title="Load more cards!"
          onPress={() => NativeModules.DevSettings.reload()}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        /> */}
        <MapScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDF0EA',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pressButtons: {
    backgroundColor: '#A25B5B',
  },
  images: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default App;
