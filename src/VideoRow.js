import React from 'react'
import './VideoRow.css'
import { Avatar } from '@material-ui/core'


function VideoRow({ view, subs, description, timestamp, channel, title, image}) {
  return (
    <div className='videoRow'>
        <img src={image} alt=""/>
        <div className='videoRow_text'>
            <h3>{title}</h3>
            <p className='videoRow_headline'>
                {channel} . {subs} Subscribers {view} views . {timestamp}
            </p>
            <p className='videoRow_description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow