import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
            image="https://yt3.ggpht.com/r7mISTzNbcLem_plduc_SKMh9KUiP8CWnuhS7H4-CCErF4juXxkrK-5_4LOIMeYl-lXAXMUG=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel="Rockstar Games"
            verified
            subs="10.1M"
            noOfVideos="342"
            description="The official home of Rockstar Games on YouTube."
        />
        <hr />
        <VideoRow
            view="133M"
            subs="10.1M"
            description="Song: Love Is A Long Road Artist: Tom Petty Written by Thomas Earl Petty and Michael W. Campbell Published by Universal ..."
            timestamp="4 days ago"
            channel="Rockstar Games"
            title="Grand Theft Auto VI Trailer 1"
              image="https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpeKvBo82hW7HFlC8bnoOjK60hEw"
        />
        <VideoRow
            view="133M"
            subs="10.1M"
            description="Song: Love Is A Long Road Artist: Tom Petty Written by Thomas Earl Petty and Michael W. Campbell Published by Universal ..."
            timestamp="4 days ago"
            channel="Rockstar Games"
            title="Grand Theft Auto VI Trailer 1"
              image="https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpeKvBo82hW7HFlC8bnoOjK60hEw"
        />
        <VideoRow
            view="133M"
            subs="10.1M"
            description="Song: Love Is A Long Road Artist: Tom Petty Written by Thomas Earl Petty and Michael W. Campbell Published by Universal ..."
            timestamp="4 days ago"
            channel="Rockstar Games"
            title="Grand Theft Auto VI Trailer 1"
              image="https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpeKvBo82hW7HFlC8bnoOjK60hEw"
        />
        <VideoRow
            view="133M"
            subs="10.1M"
            description="Song: Love Is A Long Road Artist: Tom Petty Written by Thomas Earl Petty and Michael W. Campbell Published by Universal ..."
            timestamp="4 days ago"
            channel="Rockstar Games"
            title="Grand Theft Auto VI Trailer 1"
              image="https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpeKvBo82hW7HFlC8bnoOjK60hEw"
        />
        
    </div>    
  )
}

export default SearchPage