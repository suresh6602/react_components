/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import React from 'react';
import { PrimarySubHeader, SmallPrimaryText } from '../../elements/textStyles';
import { LineChart } from '@mui/x-charts';
import CloseIcon from '@mui/icons-material/Close';

const SyllablePieChart = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen({
            open: false,
            data: {
                studentId: '',
                syllable: '',
            },
        });
    };

    const marks = [
        { date: 21, mark: 0.39 },
        { date: 22, mark: 0.49 },
        { date: 23, mark: 0.59 },
        { date: 24, mark: 0.69 },
        { date: 25, mark: 0.89 },
        { date: 26, mark: 0.79 },
        { date: 27, mark: 0.89 },
        { date: 28, mark: 0.59 },
        { date: 29, mark: 0.79 },
        { date: 30, mark: 0.69 },
    ];

    return (
        <Dialog open={open.open} hideBackdrop onClose={handleClose} sx={{ borderRadius: '10px' }}>
            <DialogTitle id='scroll-dialog-title' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <PrimarySubHeader sx={{ flex: 1 }}>Syllables Improvement</PrimarySubHeader>
                <IconButton size='medium' onClick={handleClose}>
                    <CloseIcon color='primary' />
                </IconButton>
            </DialogTitle>
            <DialogTitle
                id='scroll-dialog-title'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                }}
            >
                <SmallPrimaryText>Student Id : {open.data?.studentId}</SmallPrimaryText>
                <SmallPrimaryText>Syllable : {open.data?.syllable}</SmallPrimaryText>
            </DialogTitle>

            <DialogContent dividers={scroll === 'paper'}>
                <Grid width={'100%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
                    <LineChart
                        xAxis={[
                            {
                                data: marks.map((entry) => entry.date),
                                name: 'date',
                                label: 'Last 10 days',
                            },
                        ]}
                        yAxis={[
                            {
                                name: 'marks',
                                label: 'Score',
                            },
                        ]}
                        tooltip={{
                            xLabel: 'Last 10 Date',
                            yLabel: 'Score',
                        }}
                        series={[
                            {
                                data: marks.map((entry) => entry.mark),
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default SyllablePieChart;
