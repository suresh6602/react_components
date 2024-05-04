import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Typography } from '@mui/material';
import Transition from '../transition';

// eslint-disable-next-line react/prop-types
const Instructiontaransition = ({ text }) => {
    const [model, setmodel] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setmodel(false);
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
                        border: 'none',
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 10.25,
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

export default Instructiontaransition;
