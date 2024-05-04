import { Button } from '@mui/material';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)({
    '&&&': {
        padding: '0px 30px',
        backgroundColor: '#1B4075',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: '700',
        textAlign: 'center',
        color: '#F2C13F',
        height: '40px',
        '&:hover': {
            backgroundColor: '#D1E7DF',
            color: '#1B4075',
        },
        textTransform: 'none',
    },
});

export const SecondaryButton = styled(Button)({
    '&&&': {
        padding: '13px 30px',
        // backgroundColor: '#E0DBE6',
        border: '1px solid #1B4075 ',
        borderRadius: '10px',
        fontFamily: 'Poppins',
        fontSize: '15px',
        fontWeight: '700',
        textAlign: 'center',
        color: '#808080',
        height: '40px',
        '&:hover': {
            backgroundColor: '#1B4075',
            color: '#ffffff',
        },
        textTransform: 'capitalize',
    },
});
