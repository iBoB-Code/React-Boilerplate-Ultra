import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import pics from './pics';

const getDaysPics = (x) => {
  const r = x.map(l => (<Image src={l} style={{ marginBottom: '10px' }} />));
  return r;
};

const Photos = ({ selectedPictures }) => (
  <div className="photos">
    {
      selectedPictures === 0 ? (
        pics.map(i => getDaysPics(i))
      ) : (
        getDaysPics(pics[ selectedPictures - 1 ])
      )
    }
  </div>
);

Photos.propTypes = {
  selectedPictures: PropTypes.number.isRequired
};

export default Photos;
