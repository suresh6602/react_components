/* eslint-disable react/prop-types */
import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../../context';

export const CustomAlert = ({ onclose }) => {
    const { alert, setAlert } = useContext(Context);

    const handleAlertClose = (event, reason) => {
        if (onclose) {
            if (reason === 'clickaway') {
                return;
            }
            setAlert({ ...alert, open: false });
        }
    };
    return (
        <Snackbar
            sx={{ borderRadius: '10px' }}
            open={alert?.open}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleAlertClose}
            style={{ zIndex: 5000 }}
        >
            <Alert
                elevation={4}
                sx={{
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                }}
                onClose={handleAlertClose}
                severity={alert?.severity}
            >
                {alert?.message}
            </Alert>
        </Snackbar>
    );
};
