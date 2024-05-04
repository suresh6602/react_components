import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { Content } from '../../elements/textStyles';

const Listening = () => {
    return (
        <Content
            color={'GrayText'}
            sx={{ display: 'flex', alignItems: 'center' }}
        >
            <ScaleLoader color="#36d7b7" speedMultiplier={0.9} height={18} />
            <ScaleLoader height={18} color="#36d7b7" />
        </Content>
    );
};

export default Listening;
