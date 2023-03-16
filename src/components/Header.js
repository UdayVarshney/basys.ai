import React from 'react';
import "../App.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

function TopHeader(){
    return (
        <div className='TopHeader'>
            <p>*This is a demo login with limited but essential functionality</p>
            <h1>Welcome Mervin!</h1>
            <h3>Scorecard</h3>
            <div className="flex-container">
             <div><SearchIcon /></div> 
             <div><NotificationsIcon /></div> 
             <div><AccountCircleIcon /></div>
             <div><LogoutIcon /></div>  
            </div>
        </div>
    );
}

export default TopHeader;;
