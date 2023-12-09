import React from 'react'
import './SideBar.css'
import SidebarRow from './SidebarRow.js'
import HomeIcon from "@material-ui/icons/Home";
import TrendingIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import WatchLater from "@material-ui/icons/WatchLater";
import ThumbDownAltOutlined from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined.js";

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={ HomeIcon } title="Home"/>
        <SidebarRow Icon={TrendingIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionIcon} title="Subscription"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideo} title="Your Videos"/>
        <SidebarRow Icon={WatchLater} title="Watch Later"/>
        <SidebarRow Icon={ThumbDownAltOutlined} title="Likes Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Show more"/>
        <hr />
    </div>
  )
}

export default Sidebar