import React from 'react';
import './index.css';
// eslint-disable-next-line react/prop-types
const Bounce = ({ bounce, src }) => {
    return (
        <div id={bounce == true && 'target'}>
            <img src={src} alt="images" className="image" />
        </div>
    );
};

export default Bounce;
