import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Image, Card, Icon } from 'semantic-ui-react';
import { Grow } from 'react-preloading-component';
import Slider from 'react-viewport-slider';
// import { reset } from 'redux-form';
// import { login } from 'REDUX/actions/asyncActions';
import { homeReady, changeSocialDesc } from 'REDUX/actions/homeActions';

import headBackgroundPic from 'ASSETS/images/networkLT.jpg';
import idPic from 'ASSETS/images/ID.jpg';
import tekPic from 'ASSETS/images/tek.png';
import cauPic from 'ASSETS/images/cau.png';
import maestroPic from 'ASSETS/images/maestro.png';
import cremePic from 'ASSETS/images/creme.png';
import projNeoPic from 'ASSETS/images/projNeo.png';
import reactPic from 'ASSETS/images/react.png';
import tfPic from 'ASSETS/images/tf.png';

// import Status from './components/Status';
import Circle from './components/Circle';

@connect(store => ({
  login: store.asyn.login,
  ready: store.home.ready,
  socialDesc: store.home.socialDesc,
  fetching: store.asyn.fetching
}))
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.loadHandler = this.loadHandler.bind(this);
  }

  loadHandler() {
    this.props.dispatch(homeReady());
  }

  render() {
    return (
      <div className="home">
        { this.props.ready >= 9 ?
          <div className="homeContainer">
            <Slider>
              <Slider.Item buttonLabel="RESUME" className="head">
                <div className="mycontent">
                  <h1>{'HELLO I\'M DYLAN, I\'M A DATA SCIENTIST'}</h1>
                  <div className="faceContainer">
                    <div className={`descContainer ${this.props.socialDesc === '' ? '' : 'active'}`}>
                      <div className="desc">
                        <span>{this.props.socialDesc}</span>
                      </div>
                      <div className="descArr" />
                    </div>
                    <div className="picContainer">
                      <div className="socialBalls">
                        <div className="socialBallsContainer">
                          <Button className="a r" circular color="linkedin" icon="linkedin" onClick={(event) => { event.preventDefault(); window.open('https://www.linkedin.com/in/dylanheirstraeten'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Visit my Linkedin'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                          <Button className="b r" circular color="black" icon="github" onClick={(event) => { event.preventDefault(); window.open('https://github.com/iBoB-Code'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Explore my Github'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                          <Button className="c r" circular color="red" icon="like" onClick={(event) => { event.preventDefault(); window.open('https://cremedelacreme.io/'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Need my Services ?'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                          <Button className="d l" circular color="twitter" icon="twitter" onClick={(event) => { event.preventDefault(); window.open('https://twitter.com/heirst_d'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Follow me on Twitter'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                          <Button className="e l" circular color="youtube" icon="youtube" onClick={(event) => { event.preventDefault(); window.open('https://www.youtube.com/c/TeksInSeoul'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Take a look at my Youtube channel'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                          <Button className="f l" circular color="instagram" icon="instagram" onClick={(event) => { event.preventDefault(); window.open('https://www.instagram.com/iboblife/'); }} onMouseOver={() => this.props.dispatch(changeSocialDesc('Check out my instagram if you like to travel'))} onMouseOut={() => this.props.dispatch(changeSocialDesc(''))} />
                        </div>
                      </div>
                      <img alt="id" src={idPic} />
                    </div>
                  </div>
                </div>
              </Slider.Item>
              <Slider.Item buttonLabel="ABOUT ME" className="cv">
                <div className="mycontent">
                  <div className="skillsContainer">
                    <h1 className="title">SKILLS</h1>
                    <div className="skills">
                      <Circle
                        title="REACT / REDUX"
                        details="JSX - SCSS - NODE - WEBPACK"
                        percent={95}
                      />
                      <Circle
                        title="ADMIN SYS"
                        details="DOCKER - AWS - GCLOUD - JENKINS - RANCHER"
                        percent={70}
                      />
                      <Circle
                        title="PYTHON / AI"
                        details="TENSORFLOW - KERAS"
                        percent={80}
                      />
                      <Circle
                        title="C / C++ / C#"
                        details="EPITECH PROJECTS - UNITY"
                        percent={80}
                      />
                      <Circle
                        title="ANDROID / IOS"
                        details="JAVA - XAML - SWIFT - GO"
                        percent={40}
                      />
                      <Circle
                        title="INFOGRAPHICS"
                        details="ILLUSTRATOR - PREMIERE PRO - PHOTOSHOP"
                        percent={65}
                      />
                    </div>
                  </div>
                  <div className="sep" />
                  <div className="studExp">
                    <div className="stud">
                      <h1 className="title">STUDIES</h1>
                      <ul>
                        <li>
                          <h2>EPITECH</h2>
                          <span>MASTER DEGREE - 2014/2019</span>
                          <span style={{ visibility: 'hidden' }}>.</span>
                          <Image size="mini" circular src={tekPic} onClick={(event) => { event.preventDefault(); window.open('http://www.epitech.eu/'); }} />
                        </li>
                        <li>
                          <h2>CHUNG ANG</h2>
                          <span>EXCHANGE STUDENT - 2017/2018</span>
                          <span style={{ visibility: 'hidden' }}>.</span>
                          <Image size="mini" circular src={cauPic} onClick={(event) => { event.preventDefault(); window.open('https://neweng.cau.ac.kr/'); }} />
                        </li>
                      </ul>
                    </div>
                    <div className="exp">
                      <h1 className="title">EXPERIENCE</h1>
                      <ul>
                        <li>
                          <h2>MAESTRO CORP</h2>
                          <span>WEB DEVELOPER - 6 MONTHS</span>
                          <span>LEAD DEV DATA SCIENCE - 1 YEAR</span>
                          <Image size="mini" circular src={maestroPic} onClick={(event) => { event.preventDefault(); window.open('https://maestro-corporation.com/'); }} />
                        </li>
                        <li>
                          <h2>FREELANCE</h2>
                          <span>VARIOUS MISSIONS - 1 YEAR</span>
                          <span style={{ visibility: 'hidden' }}>.</span>
                          <Image size="mini" circular src={cremePic} onClick={(event) => { event.preventDefault(); window.open('https://cremedelacreme.io/'); }} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sep" />
                  <div className="spContainer">
                    <h1 className="title">SOME SIDE PROJECTS</h1>
                    <div className="projects">
                      <Card>
                        <Card.Content>
                          <Card.Header>NEO PROJECT <Image size="mini" circular src={projNeoPic} /></Card.Header>
                          <Card.Meta>
                            <span>2017 - 2019</span>
                          </Card.Meta>
                          <Card.Description>
                            The Neo Project aims to facilitate comunication between generations inside a familly. The team is composed of 8 people working onto 2 mobile apps, 1 web app, an API and a physical device (hardware/software).
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://web.neo.ovh" target="_blank" rel="noopener noreferrer">
                            <Icon name="child" />
                            See the project
                          </a>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Card.Header>CUSTOM BOILERPLATE <Image size="mini" circular src={reactPic} /></Card.Header>
                          <Card.Meta>
                            <span>2017 - 2018</span>
                          </Card.Meta>
                          <Card.Description>
                            I created this open source boilerplate so that anyone can use it to quickly and easely create web apps and deploy them in production or development (this website is running on it).
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a href="https://github.com/iBoB-Code/React-Boilerplate-Ultra" target="_blank" rel="noopener noreferrer">
                            <Icon name="child" />
                            See the project
                          </a>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Card.Header>LITTLE BRAIN <Image size="mini" circular src={tfPic} /></Card.Header>
                          <Card.Meta>
                            <span>2018</span>
                          </Card.Meta>
                          <Card.Description>
                            Still in development : more infos to come soon.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            <Icon name="child" />
                            See the project
                          </a>
                        </Card.Content>
                      </Card>
                    </div>
                  </div>
                </div>
              </Slider.Item>
              <Slider.Item className="more">
                <div className="mycontent">
                  <h1>BIO</h1>
                  <p>
                    I am a very curious man who loves learning or discovering new things everyday.
                    I am a social person who also has a strong personality : I am not afraid of responsibilites or taking decisions which generally makes me end up as a leader in a group.
                    Talking more about my hobbies, I am interested in a whole bunch of different things and my main problem in life is finding time to do everything that I want to do.
                    Coding is my main passion, but I also cannot live without sport and I of course do a lot.
                    I also enjoy some peaceful gardening, playing some music (guitar) and reading some books.
                    Another hobby of mine is telling stories trough my video editings and I have done it now since several years on various YouTube channels : personals or officials ones.<br />
                    And of course with all of this comes a great passion for trips and exploring new countries or areas.
                    I have been living in South Korea for one year and also travelled backpacking during 2 months throughout South East Asia.
                    If you are interested in exploring this area of the world or if you simply like traveling and want to see some great landscapes I would recommend you to check out the other page of my website by clicking the button below (sorry but everything is in French).
                  </p>
                  <span role="button" onClick={() => this.props.history.push('/roadtrip')}>THE ROADTRIP STORY</span>
                </div>
              </Slider.Item>
            </Slider>
          </div> : <Grow size={100} color="#3e9a94" />
        }
        <div className="hidden">
          <img alt="id" src={idPic} onLoad={this.loadHandler} />
          <img alt="head" src={headBackgroundPic} onLoad={this.loadHandler} />
          <img alt="tekPic" src={tekPic} onLoad={this.loadHandler} />
          <img alt="cauPic" src={cauPic} onLoad={this.loadHandler} />
          <img alt="maestroPic" src={maestroPic} onLoad={this.loadHandler} />
          <img alt="cremePic" src={cremePic} onLoad={this.loadHandler} />
          <img alt="projNeoPic" src={projNeoPic} onLoad={this.loadHandler} />
          <img alt="reactPic" src={reactPic} onLoad={this.loadHandler} />
          <img alt="tfPic" src={tfPic} onLoad={this.loadHandler} />
        </div>
      </div>
    );
  }
}
Home.WrappedComponent.displayName = 'Home';
Home.WrappedComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  // fetching: PropTypes.bool.isRequired,
  // login: PropTypes.bool,
  ready: PropTypes.number.isRequired,
  socialDesc: PropTypes.string.isRequired
};
Home.WrappedComponent.defaultProps = {
  login: null
};
