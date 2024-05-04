/* eslint-disable no-unused-vars */
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import React from 'react';
export const Sidebardata = [
    {
        title: 'Dashboard',
        icon: <DashboardOutlinedIcon />,
        link: '/dashboard',
        isSubData: false,
    },
    {
        title: 'Cohort',
        icon: <GroupsOutlinedIcon />,
        link: '/myCohort',
        isSubData: false,
    },
    {
        title: 'Students',
        icon: <SchoolOutlinedIcon />,
        link: '/students',
        isSubData: false,
    },
    // {
    // 	title: 'Settings',
    // 	icon: <SettingsOutlinedIcon />,
    // 	link: '/settings',
    // 	isSubData: false,
    // },
];
