/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import React from 'react';
import noData from './Nodata.gif';

const NoDataFound = ({ message }) => {
    return (
        <Grid container width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <img src={noData} alt='no data' style={{ width: '30%' }} />
            <b>{message}</b>
        </Grid>
    );
};

export default NoDataFound;
