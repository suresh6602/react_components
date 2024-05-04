/* eslint-disable react/prop-types */
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { PrimaryButton } from '../../elements/buttonStyles';
import { SecondaryButton } from '../../elements/buttonStyles';

const LogoutModel = ({ open, handleConfirm, handleClose }) => {
    return (
        <Dialog open={open}>
            <DialogContent sx={{ width: '250px' }}>
                <DialogContentText sx={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>Are you sure?</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <PrimaryButton onClick={handleClose}>No</PrimaryButton>
                <SecondaryButton onClick={handleConfirm}>yes</SecondaryButton>
            </DialogActions>
        </Dialog>
    );
};
export default LogoutModel;
