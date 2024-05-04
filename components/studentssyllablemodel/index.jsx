/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SyllableChip from './syllebleChip';
import { PrimarySubHeader } from '../../elements/textStyles';
import CloseIcon from '@mui/icons-material/Close';
import SyllablePieChart from '../syllablepiechart';

const StudentSyllableModel = ({ data, setOpen }) => {
    const syllableArray = data?.data ? data?.data : [];
    const [openSyllbleChart, setSyllableChart] = useState({
        open: false,
        data: {
            studentId: '',
            syllable: '',
        },
    });
    const handleClose = () => {
        setOpen({ open: false, data: [], studentId: '' });
    };
    return (
        <Dialog open={data?.open} maxWidth={'md'} onClose={handleClose} sx={{ borderRadius: '10px' }}>
            <DialogTitle id='scroll-dialog-title' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <PrimarySubHeader sx={{ flex: 1 }}>Syllables</PrimarySubHeader>
                <IconButton size='medium' onClick={handleClose}>
                    <CloseIcon color='primary' />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <Grid width={'100%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexWrap={'wrap'} gap={2}>
                    {syllableArray
                        .slice() // Make a copy of the array to avoid mutating the original one
                        .sort((a, b) => b.value - a.value) // Sort the copied array in descending order based on the 'value' property
                        .map((item, index) => (
                            <SyllableChip
                                key={index}
                                label={item.key}
                                mark={item.value}
                                onClick={() =>
                                    setSyllableChart({
                                        open: true,
                                        data: {
                                            studentId: data?.studentId,
                                            syllable: item.key,
                                        },
                                    })
                                }
                            />
                        ))}
                </Grid>
            </DialogContent>
            <SyllablePieChart open={openSyllbleChart} setOpen={setSyllableChart} />
        </Dialog>
    );
};

export default StudentSyllableModel;

// renderCell: (params) => {
//     let obj = params?.row;
//     delete obj.userId;
//     delete obj.milestone;
//     delete obj._id;

//     // console.log(obj);
//     let arrayOfObjects = Object.entries(obj).map(([key, value]) => ({ key, value }));

//     // console.log(arrayOfObjects);
//     return (
//         <>
//             {arrayOfObjects.map((data, index) => (
//                 <p key={index}>
//                     {data.key} : {data.value}
//                 </p>
//             ))}
//         </>
//     );
// },
