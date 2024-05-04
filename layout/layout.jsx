import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} flexDirection={'row'} xs={12} md={12}>
            <Grid
                item
                md={2}
                xs={0}
                display={{ md: 'flex', xs: 'none' }}
                sx={{
                    borderRight: '3px  solid #47668f',
                }}
            >
                <Sidebar />
            </Grid>

            <Grid item md={10} xs={12} display={'flex'} flexDirection={'column'} width={'100%'} maxHeight={'100vh'} overflow={'scroll'}>
                <Grid width={'100%'}>
                    <Header />
                </Grid>

                <Grid paddingY={2} paddingX={2}>
                    <Outlet />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Layout;
