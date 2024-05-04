import { Button, Tooltip } from '@mui/material';
import React from 'react';

const SyllableChip = ({ label, mark, onClick }) => {
    const color = mark >= 0.7 ? 'green' : mark >= 0.4 ? '#fa9f74' : '#a1a1a1';
    const fontColor = mark >= 0.7 ? 'white' : mark >= 0.4 ? 'black' : 'white';

    return (
        <Tooltip title={mark}>
            <Button
                onClick={onClick}
                size='small'
                variant='outlined'
                sx={{
                    borderColor: color,
                    // padding: 2,
                    color: fontColor,
                    fontWeight: 'bolder',
                    fontSize: '15px',
                    backgroundColor: color,
                    borderRadius: '50px',
                    width: '100px',
                    ':hover': {
                        borderColor: color,
                        color: 'whitesmoke',
                        fontWeight: 'bolder',
                        backgroundColor: color,
                    },
                }}
            >
                {label} : {mark}
            </Button>
        </Tooltip>
    );
};

export default SyllableChip;
