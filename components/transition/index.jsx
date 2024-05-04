/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Transition = ({ children, animate }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={animate ? animate : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
