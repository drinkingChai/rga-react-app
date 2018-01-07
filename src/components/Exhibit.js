import React from 'react'

// styles
import '../css/Exhibit.css'

// helpers
import { youtubeThumbnail } from '../helpers/urlFormat'

export default function ({ video, link, onClick }) {
  return (
    <div className='Exhibit' onClick={ onClick }>
      <div className='image' style={{ backgroundImage: `url(${youtubeThumbnail(video.youtubeId)})` }}></div>
      <div className='overlay'></div>

      <div className='info'>
        <h4>{ video.title }</h4>
        <a>Explore <i className="fas fa-arrow-circle-right"></i></a> { /* replace arrows */ }      
      </div>
    </div>
  ) 
}
