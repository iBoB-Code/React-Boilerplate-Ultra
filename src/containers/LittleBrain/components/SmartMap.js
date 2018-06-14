/* eslint react/style-prop-object: 0 */  // --> OFF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Button, Image, Card, Icon } from 'semantic-ui-react';
// import { Grow } from 'react-preloading-component';
// import { reset } from 'redux-form';
// import { login } from 'REDUX/actions/asyncActions';
import { scrap } from 'REDUX/actions/asyncActions';
// import Status from './components/Status';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiaWJvYmNvZGUiLCJhIjoiY2pocWhza3M1MngybzM3cW93bW05NTIyNiJ9.6zH88aBTMOIclq617MXt7w'
});

@connect(store => ({
  moyen: store.asyn.moyen,
  cher: store.asyn.cher,
  bon: store.asyn.bon,
  data: store.asyn.data
}))
export default class SmartMap extends Component {
  constructor(props) {
    super(props);
    this.scrapHandler = this.scrapHandler.bind(this);
    this.scrapHandler();
  }

  scrapHandler() {
    this.props.dispatch(scrap(this.props.data.length))
    .then(() => {
      setTimeout(() => {
        this.scrapHandler();
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="smartMap">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
          zoom={[11]}
          center={[2.340097, 48.858023]}
        >
          <Layer
            type="circle"
            id="moyen"
            paint={
            {
              'circle-color': '#11b4da',
              'circle-radius': 5,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
            }
          >
            {
              this.props.moyen.length > 0 ?
              this.props.moyen.map(apt => (
                <Feature
                  key={apt.id}
                  coordinates={[apt.blurInfo.position.lon, apt.blurInfo.position.lat]}
                />
              )) : ''
            }
          </Layer>
          <Layer
            type="circle"
            id="cher"
            paint={
            {
              'circle-color': '#E34040',
              'circle-radius': 5,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
            }
          >
            {
              this.props.cher.length > 0 ?
              this.props.cher.map(apt => (
                <Feature
                  key={apt.id}
                  coordinates={[apt.blurInfo.position.lon, apt.blurInfo.position.lat]}
                />
              )) : ''
            }
          </Layer>
          <Layer
            type="circle"
            id="bon"
            paint={
            {
              'circle-color': '#0ed630',
              'circle-radius': 5,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
            }
          >
            {
              this.props.bon.length > 0 ?
              this.props.bon.map(apt => (
                <Feature
                  key={apt.id}
                  onClick={() => console.log(apt)}
                  coordinates={[apt.blurInfo.position.lon, apt.blurInfo.position.lat]}
                />
              )) : ''
            }
          </Layer>
        </Map>
      </div>
    );
  }
}
SmartMap.WrappedComponent.displayName = 'SmartMap';
SmartMap.WrappedComponent.propTypes = {
  moyen: PropTypes.array.isRequired,
  cher: PropTypes.array.isRequired,
  bon: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  // history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
SmartMap.WrappedComponent.defaultProps = {
};
