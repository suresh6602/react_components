/* eslint-disable react/prop-types */
import { Dialog, DialogActions, DialogContent, Grid, IconButton, ListItemButton, Radio } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import Cookies from 'js-cookie';
import CloseIcon from '@mui/icons-material/Close';
import { CardHeaderPrimary } from '../../elements/textStyles';
import { Changelanguage } from './languageChange.api';
import { useMutation } from 'react-query';
import { CustomAlert } from '../alert';
import Loader from '../loader';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';

const options = ['Tamil', 'English', 'kannada'];

const Languagemodel = ({ open, handleClose }) => {
    const [selectedOption, setSelectedOption] = useState(Cookies.get('appLanguage'));
    const { alert, setAlert } = useContext(Context);
    const navigatTo = useNavigate();
    const handleClick = (item) => {
        setSelectedOption(item);
    };
    const { mutate, isLoading: mutateLoading } = useMutation(Changelanguage, {
        onSuccess: (response) => {
            if (response?.data?.responseObj?.responseCode == 200) {
                setAlert({
                    open: true,
                    severity: 'success',
                    message: response?.data?.responseObj?.responseMessage,
                });
                setTimeout(() => {
                    Cookies.set('appLanguage', selectedOption);
                    handleClose();
                    setAlert({
                        open: false,
                        severity: '',
                        message: '',
                    });
                    navigatTo('/dashboard');
                    location.reload();
                }, 1000);
            } else {
                setAlert({
                    open: true,
                    severity: 'warning',
                    message: response?.data?.responseObj?.responseMessage,
                });
            }
        },

        onError: (error) => {
            setAlert({
                open: true,
                severity: 'error',
                message: 'Something went wrong...!',
            });
            return error;
        },
    });
    const handleNext = () => {
        const language = { language: selectedOption === 'Tamil' ? 'ta' : selectedOption === 'English' ? 'en' : 'kn' };
        mutate(language);
    };

    // const handleNext = () => {
    //     let languageCode;
    //     if (selectedOption === 'Tamil') {
    //         languageCode = 'ta';
    //     } else if (selectedOption === 'English') {
    //         languageCode = 'en';
    //     } else {
    //         languageCode = 'kn';
    //     }
    //     const language = { language: languageCode };
    //     mutate(language);
    // };

    useEffect(() => {
        const storedLanguage = Cookies.get('appLanguage');
        if (storedLanguage && options.includes(storedLanguage)) {
            setSelectedOption(storedLanguage);
        }
    }, []);

    return (
        <>
            <Loader circle={true} load={mutateLoading} />

            <CustomAlert open={alert?.open} message={alert?.message} severity={alert?.severity} onclose={() => true} />
            <Dialog open={open} sx={{ borderRadius: '10px' }}>
                <Grid container px={1} py={1}>
                    <Grid item xs={12} md={12} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <CardHeaderPrimary>Select Language</CardHeaderPrimary>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <DialogContent sx={{ width: { md: '400px' } }}>
                    <Grid container>
                        <Grid
                            item
                            display={'flex'}
                            flexWrap={'wrap'}
                            flexDirection={'column'}
                            justifyContent={'flex-start'}
                            alignItems={'center'}
                            width={'100%'}
                            gap={2}
                        >
                            {options.map((item, index) => (
                                <ListItemButton
                                    key={index}
                                    onClick={() => handleClick(item)}
                                    sx={{
                                        backgroundColor: selectedOption === item ? '#1A4073' : '#e0e0e0',
                                        borderRadius: '40px',
                                        width: '100%',
                                        height: '45px',
                                        textAlign: 'center',
                                        ':hover': {
                                            backgroundColor: selectedOption === item ? '#1A4073' : '#e0e0e0',
                                        },
                                        color: selectedOption === item ? 'white' : 'gray',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <Radio checked={selectedOption === item} color='secondary' size='small' />
                                    {item}
                                </ListItemButton>
                            ))}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <PrimaryButton sx={{ alignSelf: 'flex-end' }} onClick={handleNext}>
                        confirm
                    </PrimaryButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Languagemodel;
