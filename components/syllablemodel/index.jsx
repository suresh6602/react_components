/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { tamilSyllables } from './tamilEluthukal';
import { Grid, IconButton, Stack, TextField } from '@mui/material';
import { SyllableButton } from '../custombutton';
import { CardHeaderPrimary } from '../../elements/textStyles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { PrimaryButton } from '../../elements/buttonStyles';
import { Context } from '../../context';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { CustomAlert } from '../alert';
import { useMutation } from 'react-query';
import { createCustomCohort } from './createcustomCohart.api';
import Loader from '../loader';
import { kannadaSyllables } from './kannada';
import { ipaSymbols } from './syllabels';

const SyllablesModel = ({ open, setOpen }) => {
    const syllables =
        Cookies.get('appLanguage') === 'Tamil' ? tamilSyllables : Cookies.get('appLanguage') === 'English' ? ipaSymbols : kannadaSyllables;

    const language = Cookies.get('appLanguage') === 'Tamil' ? 'ta' : Cookies.get('appLanguage') === 'English' ? 'en' : 'kn';

    const [selectedItem, setSelectedItem] = useState({ cohortName: '', syllables: [], description: '' });
    const { cohardData, setCohardData, setAlert, alert } = useContext(Context);

    const handleSelectclick = (label) => {
        setSelectedItem((selectedItem) => {
            const updatedSyllables = selectedItem.syllables.includes(label)
                ? selectedItem.syllables.filter((item) => item !== label)
                : [...selectedItem.syllables, label];
            return {
                ...selectedItem,
                syllables: updatedSyllables,
            };
        });
    };

    const navigateTo = useNavigate();

    const { mutate, isLoading } = useMutation(createCustomCohort, {
        onSuccess: (response) => {
            if (response?.data?.responseObj?.responseCode == 200) {
                setAlert({
                    open: true,
                    severity: 'success',
                    message: response?.data?.responseObj?.responseMessage,
                });

                setCohardData({
                    ...cohardData,
                    cohardName: selectedItem.cohortName,
                    syllabus: selectedItem.syllables,
                    description: selectedItem.description,
                    studentIds: [],
                    cohardId: response?.data?.responseObj?.responseDataParams?.data?.cohortList[0]?._id
                        ? response?.data?.responseObj?.responseDataParams?.data?.cohortList[0]?._id
                        : '',
                });

                Cookies.set(
                    'cohardData',
                    JSON.stringify({
                        ...cohardData,
                        cohardName: selectedItem.cohortName,
                        syllabus: selectedItem.syllables,
                        description: selectedItem.description,
                        studentIds: [],
                        cohardId: response?.data?.responseObj?.responseDataParams?.data?.cohortList[0]?._id
                            ? response?.data?.responseObj?.responseDataParams?.data?.cohortList[0]?._id
                            : '',
                    })
                );

                setTimeout(() => {
                    setOpen(false);
                    navigateTo('/cohort');
                    setAlert({
                        open: false,
                        severity: '',
                        message: '',
                    });
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

    const handleconfirm = () => {
        if (selectedItem.cohortName !== '' && selectedItem.syllables.length >= 5) {
            const requestBody = {
                cohortName: selectedItem.cohortName,
                syllables: selectedItem.syllables,
                description: selectedItem.description,
                language: language,
                isPredefined: false,
            };

            mutate(requestBody);
        } else {
            setAlert({
                open: true,
                severity: 'warning',
                message: 'Please enter a cohort name and select at least five syllables and description is mandatory',
            });
        }
    };

    const handleClose = () => {
        setSelectedItem({ cohortName: '', syllables: [], description: '' });
        setOpen(false);
    };

    return (
        <Dialog open={open} hideBackdrop onClose={handleClose} sx={{ borderRadius: '10px' }}>
            <CustomAlert open={alert?.open} message={alert?.message} severity={alert?.severity} onclose={() => true} />
            <Loader circle={true} load={isLoading} />

            <Grid container padding={1} gap={2}>
                <Grid item width='100%' xs={12} md={12} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <CardHeaderPrimary>Create Cohort</CardHeaderPrimary>
                    <IconButton onClick={handleClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </Grid>
                {selectedItem.syllables.length >= 5 && (
                    <>
                        <Grid container justifyContent='space-between' alignItems='center' spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label='Cohort Name'
                                    variant='outlined'
                                    fullWidth
                                    size='small'
                                    value={selectedItem.cohortName}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, cohortName: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <TextField size='small' disabled fullWidth value={selectedItem.syllables.join(', ')} />
                            </Grid>
                        </Grid>
                        {Cookies.get('appLanguage') === 'Tamil' ||
                            (Cookies.get('appLanguage') === 'kannada' && (
                                <Grid container justifyContent='space-between' alignItems='center' spacing={2}>
                                    <Grid item xs={12} md={8}>
                                        <TextField
                                            label='Description'
                                            variant='outlined'
                                            fullWidth
                                            size='small'
                                            value={selectedItem.description}
                                            onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                                        />
                                    </Grid>
                                </Grid>
                            ))}
                    </>
                )}
            </Grid>

            <DialogContent sx={{ height: '400px', padding: '10px' }}>
                <Grid container spacing={3}>
                    <Grid item display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                        {Cookies.get('appLanguage') === 'Tamil' || Cookies.get('appLanguage') === 'kannada' ? (
                            <>
                                {syllables.map((item) => (
                                    <SyllableButton
                                        language={Cookies.get('appLanguage') === 'Tamil' ? 'ta' : 'kn'}
                                        key={item?.syllable}
                                        label={item}
                                        onClick={() => handleSelectclick(item.syllable)}
                                        selectedItems={selectedItem.syllables}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                {syllables.map((item) => (
                                    <SyllableButton
                                        language={'en'}
                                        key={item}
                                        label={item}
                                        onClick={() => handleSelectclick(item)}
                                        selectedItems={selectedItem.syllables}
                                    />
                                ))}
                            </>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Stack direction='row' spacing={1} sx={{ width: '100%', justifyContent: 'flex-end' }}>
                    <PrimaryButton onClick={handleClose}>Cancel</PrimaryButton>
                    <PrimaryButton onClick={handleconfirm}>Confirm</PrimaryButton>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};

export default SyllablesModel;
