import React from 'react'
import PropTypes from 'prop-types'
import './facts-image.css'

const FactsImage = ({ link, caption, rounded }) => (
    <div>
        <div className={ "facts-image-container " + getRounding(rounded) } >
            <img src={ link } alt="" />
        </div>
        <p className="facts-image-caption">{ caption }</p>
    </div>
);

const getRounding = (rounded) => {
    return rounded ? 'facts-image-round' : '';
};

FactsImage.propTypes = {
    link: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    rounded: PropTypes.bool.isRequired
};

export default FactsImage