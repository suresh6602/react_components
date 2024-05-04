/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import { ContentText } from '../../elements/textStyles';
import { useNavigate } from 'react-router-dom';
import TellTittle from '../tittle';
import CustomConfetti from '../confettiExplosion';

// eslint-disable-next-line react/prop-types
const TestCompletedModel = ({ overAllMark }) => {
    const navigateTo = useNavigate();
    const marks = overAllMark?.mark ? overAllMark?.mark : 0;
    const handleClick = () => {
        localStorage.setItem('overAllMark', JSON.stringify(overAllMark));
        localStorage.setItem(
            'wordsToImprove',
            JSON.stringify(overAllMark?.wordsToImprove)
        );
        navigateTo('/improvement');
    };

    return (
        <Container
            maxWidth={'md'}
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center',
                paddingX: { xs: 0, md: 5 },
                height: '80vh',
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
                <Card
                    elevation={10}
                    sx={{
                        mt: -7,
                        padding: 2,
                        width: { md: '80%', xs: '100%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        rowGap: 1,
                    }}
                >
                    <TellTittle color="#F1EAFF" />

                    <CustomConfetti data={marks} />
                    <Card
                        sx={{
                            padding: 2,
                            height: '120px',
                            width: '120px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            border: '5px solid gold',
                            background:
                                'linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '39px',
                                display: 'flex',
                                lineHeight: '40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            {marks}{' '}
                            <Divider
                                sx={{
                                    width: '110px',
                                    border: '2px solid grey',
                                }}
                            />
                            100
                        </Typography>
                    </Card>

                    {marks > 50 ? (
                        <ContentText>
                            Congratulations {overAllMark?.userName} you have
                            successfully completed the level{' '}
                            {overAllMark?.level} of your 'Speak like me Speak
                            with me' through
                            <br />
                            Technology enabled language learning
                        </ContentText>
                    ) : (
                        <ContentText>
                            Keep pushing! Your effort counts. Try again for
                            success!
                        </ContentText>
                    )}
                    <ContentText sx={{ mt: 1 }}>Thank you</ContentText>

                    <Button
                        onClick={handleClick}
                        sx={{
                            border: 'none',
                            width: { md: '60%', xs: '80%' },
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
                        Next
                    </Button>
                </Card>
            </Grid>
        </Container>
    );
};

export default TestCompletedModel;
