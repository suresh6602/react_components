/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';

export const SyllableButton = ({ label, onClick, selectedItems, language }) => {
    const item = language === 'ta' ? label.syllable : language === 'kn' ? label.syllable : label;
    const isSelected = selectedItems.includes(item);
    return (
        <Button
            onClick={onClick}
            size='small'
            sx={{
                backgroundColor: isSelected ? '#1B4075' : 'transparent',
                textTransform: 'lowercase',
                border: !isSelected ? '1px solid #D3D3D3' : '1px solid #319795',
                fontSize: '12px',
                fontWeight: 'bold',
                color: isSelected ? 'white' : 'gray',
                '&:hover': {
                    backgroundColor: '#1B4075',
                    color: 'white',
                },
                height: '27px',
            }}
        >
            {language === 'ta' ? (
                <>
                    {label?.syllable} - <p>{label?.sound}</p>
                </>
            ) : language === 'kn' ? (
                <>
                    {label?.syllable} - <p>{label?.sound}</p>
                </>
            ) : (
                <>{label}</>
            )}
        </Button>
    );
};

