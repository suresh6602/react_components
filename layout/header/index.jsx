import React from 'react';
import { useContext, useState } from 'react';
import { AppbarHeader } from '../../elements/textStyles';
import Transition from '../../components/transition';
import Sidebar from '../sidebar/index';
import { Context } from '../../context';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    const navigateTo = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { selectedTitle } = useContext(Context);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>

                        <IconButton size='small' edge='start' color='inherit' aria-label='menu' onClick={() => navigateTo(-1)}>
                            <ArrowBackIcon color='secondary' />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            <Transition animate={selectedTitle}>
                                <AppbarHeader>{selectedTitle}</AppbarHeader>
                            </Transition>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer} onClick={toggleDrawer}>
                <div style={{ width: '200px' }}>
                    <Sidebar />
                </div>
            </Drawer>
        </>
    );
};

export default Header;
