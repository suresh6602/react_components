/* eslint-disable react/prop-types */
import { Card, Grid } from '@mui/material';
import React from 'react';
import { SmallInfoText, SmallPrimaryText } from '../../elements/textStyles';

export const CustomCard = ({ children, width, onClick }) => {
    return (
        <Card
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                paddingX: 2,
                paddingY: 2,
                maxWidth: width,
                width: width,
                border: '1px solid #D3D3D3',
                ':hover': {
                    boxShadow: 10,
                },
            }}
        >
            {children}
        </Card>
    );
};

export const CohortCard = ({ children, onClick }) => {
    return (
        <Card
            onClick={onClick}
            square
            sx={{
                marginY: 2,
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                width: '283px',
                rowGap: '5px',
                border: '1px solid #D3D3D3',
                boxShadow: 5,
                ':hover': {
                    boxShadow: 10,
                },
                overflow: 'hidden',
            }}
        >
            {children}
        </Card>
    );
};

export const CohortCardContent = ({ label, value }) => {
    return (
        <Grid container direction='row' justifyContent='flex-start' spacing={1} width={'100%'}>
            <Grid item xs={6} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <SmallInfoText>{label}</SmallInfoText>
                <SmallInfoText>:</SmallInfoText>
            </Grid>
            <Grid item xs={6}>
                <SmallPrimaryText>{value}</SmallPrimaryText>
            </Grid>
        </Grid>
    );
};
