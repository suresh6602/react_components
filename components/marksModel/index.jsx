/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Box, Modal } from '@mui/material';
import Transition from '../transition';
import { Content } from '../../elements/textStyles';
import CustomConfetti from '../confettiExplosion';

const MarksModel = ({ mark, open }) => {
    const [model, setmodel] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (open == true) {
                setmodel(false);
            } else {
                setmodel(false);
            }
        }, 3000);
    }, []);

    return (
        <>
            <Transition animate={model}>
                <Modal open={model}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '65%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { xs: '70%', md: '40%' },
                            background:
                                mark < 25
                                    ? '#fab3ae'
                                    : mark < 50
                                    ? '#f5d3af'
                                    : mark < 75
                                    ? '#f8e098'
                                    : mark < 100
                                    ? '#afc8a4'
                                    : '#afc8a4',

                            boxShadow: 24,
                            p: 2,
                            textAlign: 'center',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Transition animate={mark}>
                            <Content style={{ textAlign: 'center' }}>
                                {mark < 25
                                    ? 'try again for success  👏👏👏'
                                    : mark < 50
                                    ? 'Keep pushing your self  👏👏👏'
                                    : mark < 70
                                    ? 'You almost there 🥳🥳🥳'
                                    : mark < 100
                                    ? 'Well done 🥳👏👏'
                                    : 'Keep pushing your self 👏👏👏'}
                                <CustomConfetti data={mark} />
                            </Content>
                        </Transition>
                    </Box>
                </Modal>
            </Transition>
        </>
    );
};

export default MarksModel;
