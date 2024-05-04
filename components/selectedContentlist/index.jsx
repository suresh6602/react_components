/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import React from 'react';
import { SmallPrimaryText } from '../../elements/textStyles';

const SelectedContentList = ({ title, words }) => {
    return (
        <Grid
            item
            width={'100%'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            columnGap={2}
            rowGap={2}
            paddingY={1}
            alignItems={'center'}
            flexWrap={'wrap'}
        >
            <SmallPrimaryText>{title} :</SmallPrimaryText>
            {words?.map((data, index) => (
                <span key={index}>{data},</span>
            ))}
        </Grid>
    );
};

export default SelectedContentList;
