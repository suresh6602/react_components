/* eslint-disable quotes */
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gif from './test.gif';
import IconButtonWithLabel from '../iconButtonwithLabel';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Context } from '../../context';

// eslint-disable-next-line react/prop-types
const PracticeCompletedModel = ({ level, onRestart }) => {
    const navigateTo = useNavigate();
    const [unlock, setUnlock] = useState(false);
    const { setTestTour } = useContext(Context);
    return (
        <Container
            maxWidth={'md'}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                paddingX: { xs: 0, md: 5 },
            }}
        >
            <Grid
                item
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                padding={3}
            >
                {unlock ? (
                    <img src={gif} style={{ width: '300px' }} />
                ) : (
                    <Card
                        elevation={10}
                        sx={{
                            padding: 2,
                            width: { md: '90%', xs: '100%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            rowGap: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                lineHeight: '40px',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                textAlign: 'center',
                                color: 'grey',
                            }}
                        >
                            Looks like you have completed practicing.
                            <br />
                            {" Wow that's great...!"}
                            <br />
                            <span style={{ fontSize: '29px' }}>👏 🥳 👏</span>
                            <br />
                            Now you can test your skills
                            <br />
                        </Typography>
                        <Button
                            onClick={() => {
                                setUnlock(true);
                                setTimeout(() => {
                                    if (level === 1) {
                                        setTestTour(true);
                                    }
                                    navigateTo('/test');
                                }, 5100);
                            }}
                            sx={{
                                border: 'none',
                                width: '60%',
                                px: 1,
                                py: 2,
                                borderRadius: '10px',
                                background:
                                    'radial-gradient( circle farthest-corner at -14.3% -17.5%,  rgba(245,168,168,1) 4%, rgba(164,168,248,1) 100.2% )',
                                textTransform: 'none',
                                fontSize: '19px',
                                fontWeight: 'bold',
                                color: 'white',
                                boxShadow: 1,
                                ':hover': {
                                    background:
                                        'radial-gradient( circle farthest-corner at -14.3% -17.5%,  rgba(245,168,168,1) 4%, rgba(164,168,248,1) 100.2% )',
                                    color: 'grey',
                                },
                            }}
                        >
                            Click to attempt your level {level}
                        </Button>
                    </Card>
                )}
            </Grid>
            {unlock === false && (
                <IconButtonWithLabel
                    isWithLabel={true}
                    onClick={onRestart}
                    icon={<AutorenewIcon fontSize="large" color="primary" />}
                    label={'Start over'}
                    tooltipText={'start over'}
                />
            )}
        </Container>
    );
};

export default PracticeCompletedModel;
