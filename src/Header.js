import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';



function Header() {
    const [inputSearch, setInputSearch] = useState("");
    debugger;
    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon />
                <Link to="/">
                    <img
                        className='header_logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=""
                    />
                </Link>

            </div>
            <div className='header_input'>

                    <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type='text' placeholder='Search' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_inputButton' />
                </Link>

            </div>
            <div className='header_icons'>
                <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationIcon className='header_icon' />
                <Avatar
                    alt="Name"
                    src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg"
                />
            </div>
        </div>
    )
}

export default Header