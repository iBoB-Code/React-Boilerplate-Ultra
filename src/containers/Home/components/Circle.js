import React from 'react';
import PropTypes from 'prop-types';
// import { Label, Icon } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

function Circle(props) {
  return (
    <div className="circle">
      <div className="donut">
        <div className="back">
          <h1>{props.percent}%</h1>
        </div>
        <div className="overContainer">
          <ScrollAnimation animateIn="skillRot">
            <div className={`over r${props.percent}`} />
          </ScrollAnimation>
        </div>
      </div>
      <div className="desc">
        <h1>{props.title}</h1>
        <span>{props.details}</span>
      </div>
    </div>
  );
}

Circle.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired
};

export default Circle;
