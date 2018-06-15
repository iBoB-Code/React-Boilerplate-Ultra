import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Button, Statistic } from 'semantic-ui-react';
// import { Lines } from 'react-preloading-component';
import { play, reset } from 'REDUX/actions/dashboardActions';

@connect(store => ({
  aChoice: store.dashboard.aChoice,
  bChoice: store.dashboard.bChoice,
  aScore: store.dashboard.aScore,
  bScore: store.dashboard.bScore,
  message: store.dashboard.message,
  hasPlayed: store.dashboard.hasPlayed
}))
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.playHandler = this.playHandler.bind(this);
  }

  playHandler(a) {
    const b = Math.floor(Math.random() * 5) + 1;
    this.props.dispatch(play(a, b));
    setTimeout(() => {
      this.props.dispatch(reset());
    }, 2000);
  }

  render() {
    return (
      <main className="dashboard">
        <Header as="h1" icon textAlign="center" color="grey">
          <Icon name="street view" color="teal" circular />
          <Header.Content>
            WELCOME TO THE PRIVILEGE PAGE
          </Header.Content>
        </Header>
        <span>Play rock paper cisors lizard spock with me !</span>
        <div className="gameContainer">
          <div className="player1">
            {!this.props.hasPlayed ?
              (<div className="notPlayed">
                <div className="line1">
                  <Button icon="hand rock" color="teal" onClick={() => this.playHandler(1)} />
                  <Button icon="hand paper" color="teal" onClick={() => this.playHandler(2)} />
                </div>
                <div className="line2">
                  <Button icon="hand scissors" color="teal" onClick={() => this.playHandler(3)} />
                </div>
                <div className="line3">
                  <Button icon="hand lizard" color="teal" onClick={() => this.playHandler(4)} />
                  <Button icon="hand spock" color="teal" onClick={() => this.playHandler(5)} />
                </div>
              </div>)
              :
              (<div className="hasPlayed">
                <Icon name={this.props.aChoice} color="teal" size="huge" circular />
              </div>)
            }
          </div>
          <div className="player2">
            <Icon name={this.props.bChoice} color="teal" size="huge" circular />
          </div>
        </div>
        <div className="gameResult">
          <Header color="teal" size="huge">{this.props.message}</Header>
          <div className="scores">
            <Statistic.Group>
              <Statistic>
                <Statistic.Value>{this.props.aScore}</Statistic.Value>
                <Statistic.Label>YOU</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{this.props.bScore}</Statistic.Value>
                <Statistic.Label>SHELDON</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </div>
        </div>
        <Button content="Back to homepage" icon="left arrow" labelPosition="left" onClick={() => this.props.history.push('/')} />
      </main>
    );
  }
}

Dashboard.WrappedComponent.displayName = 'Dashboard';
Dashboard.WrappedComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  aChoice: PropTypes.string.isRequired,
  bChoice: PropTypes.string.isRequired,
  aScore: PropTypes.number.isRequired,
  bScore: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  hasPlayed: PropTypes.bool.isRequired
};
Dashboard.WrappedComponent.defaultProps = {
  login: null
};
