import { Card, Dialog, ListItemButton, Radio, Stack } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { PrimaryButton } from '../../elements/buttonStyles';
import { Context } from '../../context';

// eslint-disable-next-line react/prop-types
const MotherTongueModel = ({ open, handleClose }) => {
    const { language, setLanguage } = useContext(Context);
    // const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

    const options = [
        { label: 'தமிழ்', value: 'ta' },
        { label: 'ಕನ್ನಡ', value: 'kn' },
        { label: 'తెలుగు', value: 'te' },
        { label: 'മലയാളം', value: 'ml' },
        { label: 'हिंदी', value: 'hi' },
    ];

    const handleSelectLanguage = (language) => {
        setLanguage(language);
    };

    const handleConfirm = () => {
        setLanguage(language);
        Cookies.set('motherTongue', JSON.stringify(language));
        handleClose();
    };

    return (
        <Dialog
            open={open}
            maxWidth={'lg'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card
                elevation={10}
                sx={{
                    padding: 2,
                    // width: { md: '100%', xs: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    rowGap: 1,
                }}
            >
                <h2 style={{ color: 'GrayText' }}>
                    Change to preferred language
                </h2>
                <Stack
                    sx={{
                        padding: 1,
                        width: { md: '100%', xs: '100%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        rowGap: 1,
                        maxHeight: '50vh',
                        overflowY: 'scroll',
                    }}
                >
                    {options.map((item, index) => (
                        <ListItemButton
                            color="primary"
                            key={index}
                            sx={{
                                backgroundColor:
                                    item.label === language?.label
                                        ? '#9367AE'
                                        : '#e0e0e0',
                                borderRadius: '40px',
                                width: { md: '80%', xs: '90%' },
                                textAlign: 'center',
                                height: '45px',
                                ':hover': {
                                    backgroundColor:
                                        item.label === language?.label
                                            ? '#9367AE'
                                            : '#e0e0e0',
                                },
                                color:
                                    item.label === language?.label && 'white',
                                fontWeight: 'bold',
                            }}
                            onClick={() => handleSelectLanguage(item)}
                        >
                            <Radio
                                color="info"
                                checked={item.label === language?.label}
                                size="small"
                            />{' '}
                            {item.label}
                        </ListItemButton>
                    ))}
                </Stack>

                <PrimaryButton
                    sx={{ alignSelf: 'flex-end', mt: 4 }}
                    onClick={handleConfirm}
                >
                    Confirm
                </PrimaryButton>
            </Card>
        </Dialog>
    );
};

export default MotherTongueModel;
