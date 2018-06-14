/* eslint class-methods-use-this: 0 */  // --> OFF
/* eslint react/no-array-index-key: 0 */  // --> OFF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Stage, Layer, Line, Circle, Rect } from 'react-konva';
import * as tf from '@tensorflow/tfjs';
// import { Button, Image, Card, Icon } from 'semantic-ui-react';
// import { Grow } from 'react-preloading-component';
// import { reset } from 'redux-form';
import { addPoint, updatePred } from 'REDUX/actions/playgroundActions';
// import Status from './components/Status';

@connect(store => ({
  x: store.playground.x,
  y: store.playground.y,
  pred: store.playground.pred
}))
export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.train = this.train.bind(this);
    this.loss = this.loss.bind(this);
    this.predict = this.predict.bind(this);

    // this.model = tf.sequential();
    // this.model.add(tf.layers.dense({ units: 5, inputShape: [1], activation: 'sigmoid' }));
    // this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    // this.model.compile({ optimizer: tf.train.sgd(0.4), loss: 'meanSquaredError' });
    this.a = tf.variable(tf.scalar(Math.random()));
    this.b = tf.variable(tf.scalar(Math.random()));
    this.optimizer = tf.train.sgd(0.6);
    this.train();
  }

  handleClick(e) {
    this.props.dispatch(addPoint(e.evt.layerX, e.evt.layerY));
  }

  loss(pred, labels) {
    return pred.sub(labels).square().mean();
  }

  predict(x) {
    const xt = tf.tensor1d(x).div(tf.scalar(500));
    return xt.mul(this.a).add(this.b);
  }

  train() {
    setTimeout(() => {
      if (this.props.x.length >= 2) {
        tf.tidy(() => {
          const yt = tf.tensor1d(this.props.y).div(tf.scalar(500));
          this.optimizer.minimize(() => this.loss(this.predict(this.props.x), yt));
          const res = this.predict([0, 500]).mul(tf.scalar(500)).dataSync();
          res[ 0 ] = Math.floor(res[ 0 ]);
          res[ 1 ] = Math.floor(res[ 1 ]);
          if (this.props.pred.a !== res[ 0 ] && this.props.pred.b !== res[ 1 ]) {
            this.props.dispatch(updatePred({ a: res[ 0 ], b: res[ 1 ] }));
          }
        });
      }
      this.train();
    }, 10);
  }

  render() {
    const pts = this.props.x.map((p, i) => (
      <Circle
        key={i}
        x={p}
        y={this.props.y[ i ]}
        width={5}
        height={5}
        fill="#fff"
      />
    ));
    return (
      <div className="playground">
        <Stage width={500} height={500} onClick={this.handleClick}>
          <Layer >
            <Rect
              width={500}
              height={500}
              fillLinearGradientStartPoint={{ x: 0, y: 0 }}
              fillLinearGradientEndPoint={{ x: 500, y: 500 }}
              fillLinearGradientColorStops={[0, '#12c2e9', 0.5, '#c471ed', 1, '#f64f59']}
            />
            <Line
              stroke="#fff"
              points={[0, this.props.pred.a, 500, this.props.pred.b]}
            />
            {pts}
          </Layer>
        </Stage>
      </div>
    );
  }
}
Playground.WrappedComponent.displayName = 'Playground';
Playground.WrappedComponent.propTypes = {
  // history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired,
  pred: PropTypes.object.isRequired
};
Playground.WrappedComponent.defaultProps = {
};
