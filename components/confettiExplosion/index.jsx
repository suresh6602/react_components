/* eslint-disable react/prop-types */
import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
const CustomConfetti = ({ data, isSmall }) => {
    return (
        data >= 50 && (
            <>
                <ConfettiExplosion
                    particleCount={isSmall ? 30 : 120}
                    particleSize={isSmall ? 10 : 12}
                    duration={isSmall ? 5000 : 5000} // Increase duration for a slower effect
                    zIndex={isSmall ? 20 : 100} // Set the zIndex to control the stacking order
                    force={0.5}
                    height={isSmall ? '60vh' : '90vh'}
                    width={isSmall ? 300 : 1000}
                />
            </>
        )
    );
};

export default CustomConfetti;
