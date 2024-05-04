import { Button, ListItemButton, Stack, Tooltip } from '@mui/material';
import { Sidebardata } from './sidebardata';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutModel from '../../components/logoutmodel/index';
import Cookies from 'js-cookie';
import React from 'react';
import Languagemodel from '../../components/languagemodel';
import LoginScreenimage from '../../asset/image/TeacherAssist.png';

const Sidebar = () => {
    const location = useLocation();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [languagemodel, setLanguagemodel] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Object.keys(Cookies.get()).forEach((cookieName) => {
            Cookies.remove(cookieName);
        });
        navigate('/');
        setIsDialogOpen(false);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    const handleLanguageModelClose = () => {
        setLanguagemodel(false);
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
                <Stack width={'100%'} py={'10px'} justifyContent={'center'} display={'flex'} alignItems={'center'}>
                    <Tooltip title='Click to navigate Dashboard'>
                        <Button onClick={() => navigate('/dashboard')}>
                            <img
                                style={{
                                    width: '90%',
                                }}
                                src={LoginScreenimage}
                                alt='Image'
                            />
                        </Button>
                    </Tooltip>
                </Stack>

                {Sidebardata.map((item, index) => {
                    return (
                        <NavLink
                            to={item.link}
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                padding: item.isSubData == false && '14px 10px',
                                marginTop: '1px',
                                gap: item.isSubData == false && '10px',
                                textDecoration: 'none',
                                backgroundColor: item.link === location.pathname ? '#E9E0EE' : '',
                                color: item.link === location.pathname ? '#1B4075' : '#D9A595',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '20px',
                                    width: '15%',
                                }}
                            >
                                {item.icon}
                            </div>
                            <div
                                style={{
                                    fontSize: '18px',
                                    width: '85%',
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.title}
                            </div>
                        </NavLink>
                    );
                })}

                <div>
                    <ListItemButton
                        onClick={() => setLanguagemodel(true)}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: '10px',
                            gap: '15px',
                            marginTop: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        <Stack display={'flex'} justifyContent={'flex-start'} alignItems={'center'} color={'gray'}>
                            <LanguageIcon color='error' />
                        </Stack>
                        <Stack fontSize={'18px'} color={'#D9A595'} fontWeight={'bold'}>
                            Language
                        </Stack>
                    </ListItemButton>
                    <Languagemodel open={languagemodel} handleClose={handleLanguageModelClose} />
                </div>
            </div>

            <div
                style={{
                    borderTop: '1px solid #ccc',
                }}
            >
                <ListItemButton
                    onClick={() => setIsDialogOpen(true)}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingLeft: '10px',
                        gap: '15px',
                        marginTop: '10px',
                        cursor: 'pointer',
                    }}
                >
                    <Stack display={'flex'} justifyContent={'flex-start'} alignItems={'center'} color={'#D9A595'}>
                        <ExitToAppIcon />
                    </Stack>
                    <Stack fontSize={'18px'} color={'#D9A595'} fontWeight={'bold'}>
                        Logout
                    </Stack>
                </ListItemButton>
                <LogoutModel open={isDialogOpen} handleConfirm={handleLogout} handleClose={handleClose} />
            </div>
        </div>
    );
};

export default Sidebar;
