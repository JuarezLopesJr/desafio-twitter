import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import faker from 'faker';

import TweetCard from './TweetCard';

class MapPage extends Component {
  state = {
    lat: -3.7210611,
    lng: -38.5200526,
    zoom: 12,
    tweets: [
      [-3.734585, -38.4718506],
      [-3.7349801, -38.5183062],
      [-3.7452357, -38.4881917],
      [-3.7517916, -38.5211939],
      [-3.7396666, -38.5474597]
    ].map(coords => ({
      coords: { lat: coords[0], lng: coords[1] },
      text: faker.lorem.sentence(),
      user: {
        username: faker.internet.userName(),
        avatar: faker.image.avatar()
      }
    }))
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.state.tweets.map(tweet => (
          <Marker
            key={tweet.text}
            position={[tweet.coords.lat, tweet.coords.lng]}
          >
            <TweetCard tweet={tweet} />
          </Marker>
        ))}
      </Map>
    );
  }
}

export default MapPage;
