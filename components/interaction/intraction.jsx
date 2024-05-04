/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';
import Transition from '../transition';

const Intraction = ({ text, welcome }) => {
    const navigateTo = useNavigate();
    const [model, setmodel] = useState(true);
    const { setRunTour } = useContext(Context);

    useEffect(() => {
        setTimeout(() => {
            if (welcome == true) {
                setmodel(false);
                Cookies.set('tour', true);
                Cookies.set('isCompletedOnBoard', true);
                setRunTour(true);
                navigateTo('/practice');
            } else {
                setmodel(false);
            }
        }, 4000);
    }, []);

    return (
        <Transition animate={model}>
            <Modal
                open={model}
                sx={{ backgroundColor: 'transparent', border: 'none' }}
                slotProps={{
                    backdrop: {
                        sx: {
                            background:
                                'linear-gradient( 109.6deg,  rgba(79,148,243,0.73) 11.2%, rgba(140,105,193,0.87) 91.2% )',
                        },
                    },
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: 400,
                        width: '100%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: '700',
                        backgroundColor: 'transparent',
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 14.25,
                            delay: 9 / 100,
                        }}
                    >
                        <Typography
                            variant="h3"
                            color={'white'}
                            sx={{ fontWeight: 'bold', wordSpacing: 3 }}
                        >
                            {text}
                        </Typography>
                    </motion.span>
                </div>
            </Modal>
        </Transition>
    );
};

export default Intraction;
