/* eslint-disable quotes */
import Cookies from 'js-cookie';
import React, { useContext, useState } from 'react';
import ReactJoyride from 'react-joyride';
import { Context } from './context';
import Instructiontaransition from './components/interaction/instructiontransition';

const steps = [
    {
        target: '.step-0',
        content: 'Count your badges',
    },
    {
        target: '.step-1',
        content: 'Count your badges',
    },
    {
        target: '.step-2',
        content: 'Change to preferred voice',
    },
    {
        target: '.step-3',
        content: 'Know in which level you are',
    },
    {
        target: '.step-4',
        content: 'Listen to the above question/answer in Mother tongue',
    },
    {
        target: '.step-5',
        content: 'Listen to the above question/answer in English',
    },
    {
        target: '.step-6',
        content: 'Listen to the above question/answer in Kannada',
    },
    {
        target: '.step-7',
        content: 'Go to the previous question/answer',
    },
    {
        target: '.step-8',
        content: 'Go to the next question/answer',
    },
    {
        target: '.step-9',
        content: 'Speak like me',
    },
    {
        target: '.step-10',
        content: 'Listen to what you have spoken',
    },
    {
        target: '.step-11',
        content: 'Change to your preferred language',
    },
];

// eslint-disable-next-line react/prop-types
const AppTour = ({ children }) => {
    const { runTour, setRunTour, setUserInstruction } = useContext(Context);
    const [instructionMessage, setInstructionMessage] = useState(false);

    const handleTourEnd = () => {
        setRunTour(false);
        setInstructionMessage(true);
        Cookies.remove('tour');
        setUserInstruction(true);
        Cookies.set('userInstruction', 'true');
    };

    return (
        <div>
            {children}

            {instructionMessage == true && (
                <Instructiontaransition
                    text={"Let's see how we can practice"}
                />
            )}

            <ReactJoyride
                locale={{
                    skip: 'Skip',
                    last: "Let's start",
                }}
                steps={steps}
                run={runTour}
                continuous
                hideBackButton
                hideCloseButton
                showSkipButton={true}
                disableOverlayClose
                callback={(data) => {
                    if (data.status === 'finished') {
                        handleTourEnd();
                    } else if (data.status === 'skipped') {
                        handleTourEnd();
                    }
                }}
                styles={{
                    options: {
                        arrowColor: '#9367AE',
                        backgroundColor: '#F4E8FB',
                        primaryColor: 'gold',
                        textColor: 'grey',
                        width: 230,
                        zIndex: 1000,
                        height: 0,
                    },
                    buttonNext: {
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        backgroundColor: '#9367AE',
                    },
                    tooltip: {
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        border: '3px solid #9367AE',
                    },
                    tooltipFooterSpacer: {},
                    tooltipContent: {
                        padding: 0,
                    },
                    buttonBack: {
                        border: '1px solid grey',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        color: 'grey',
                        padding: 6,
                    },
                }}
            />
        </div>
    );
};

export default AppTour;
