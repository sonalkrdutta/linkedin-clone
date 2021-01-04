import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useSelector } from "react-redux";

function Header(){
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
        };
    return (
        <div className='header'>
            <div className="header_left">
                <img src="linkedin.svg" alt=""/>
                <div className="header__search">
                <SearchIcon />
                <input type="text"/>
                </div>
            </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="my Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Business"/>
            <HeaderOption Icon={ChatIcon} title="Chat"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://i.pinimg.com/originals/c9/c5/9d/c9c59dec72e6fd299a0b163df077e763.jpg" title='me'
            onClick={logoutOfApp}/>
        </div>
        </div>
    )
}

export default Header