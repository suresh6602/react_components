/* eslint-disable react/prop-types */
import { Grid, IconButton, Tooltip } from '@mui/material';
import React from 'react';
const IconButtonWithLabel = ({
    icon,
    label,
    onClick,
    sx,
    buttonStyle,
    disabled,
    isWithLabel,
    tooltipText,
    className,
}) => {
    return (
        <>
            {isWithLabel === true ? (
                <Grid
                    item
                    direction={'column'}
                    sx={sx}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                >
                    <Tooltip title={tooltipText} arrow>
                        <IconButton
                            className={className}
                            onClick={disabled ? null : onClick}
                            style={buttonStyle}
                            sx={{
                                backgroundColor: disabled
                                    ? '#bababa'
                                    : '#D9D9D9',
                                height: { md: '70px', xs: '50px' },
                                width: { md: '70px', xs: '50px' },
                                boxShadow: 6,
                                transition: 'background-color 0.3s ease-in-out',
                                ':hover': {
                                    backgroundColor: '#BCB8B8',
                                },
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {icon}
                        </IconButton>
                    </Tooltip>

                    <p
                        style={{
                            fontWeight: 'bold',
                            color: disabled ? '#bababa' : '#9367AE',
                            fontSize: '19px',
                        }}
                    >
                        {label}
                    </p>
                </Grid>
            ) : (
                <Tooltip title={tooltipText} arrow>
                    <IconButton
                        onClick={disabled ? null : onClick}
                        style={buttonStyle}
                        sx={{
                            backgroundColor: disabled ? '#bababa' : '#D9D9D9',
                            height: { md: '70px', xs: '50px' },
                            width: { md: '70px', xs: '50px' },
                            boxShadow: 3,
                            transition: 'background-color 0.3s ease-in-out',
                            ':hover': {
                                backgroundColor: '#BCB8B8',
                            },
                        }}
                    >
                        {icon}
                    </IconButton>
                </Tooltip>
            )}
        </>
    );
};

export default IconButtonWithLabel;
