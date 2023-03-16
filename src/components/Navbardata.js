import React from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbardata = [
    {
        title:"Score Card" ,
        icon: <ContentPasteIcon /> ,
        link: "/score-card",
    },
    {
        title:"Risk Management" ,
        icon: <ReportProblemIcon /> ,
        link: "/risk-management",
    },
    {
        title:"Prior Authorization" ,
        icon: <EventNoteIcon /> ,
        link: "/prior-authorization",
    },
    {
        title:"Claims" ,
        icon: <MenuIcon /> ,
        link: "/claims",
    },
    {
        title:"My Profile" ,
        icon: <AccountCircleIcon /> ,
        link: "/my-profile",
    }
]



