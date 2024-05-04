/* eslint-disable react/prop-types */
import React from 'react';
import { Chip } from '@mui/material';

export const StyledChip = ({ onClick, label, icon, display, filled }) => {
    return (
        <Chip
            clickable
            onClick={onClick}
            size='small'
            variant={filled ? 'filled' : 'outlined'}
            color={filled ? 'primary' : 'secondary'}
            label={label}
            icon={icon}
            sx={{
                color: filled ? 'white' : 'grey',
                fontWeight: 'bold',
                fontSize: '13px',
                boxShadow: 1,
                px: { md: 2, xs: 1 },
                display: display,
                textTransform: 'capitalize',
                paddingY: 0,
                lineHeight: '18px',
            }}
        />
    );
};
