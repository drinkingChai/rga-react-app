import React from 'react'

// styles
import '../css/Main.css'

// components
import Header from './Header'
import VideoModal from './VideoModal'
import BackToTop from './BackToTop'
import Social from './Social'
import ExhibitCollection from './ExhibitCollection'

// helper
import { youtubeEmbedUrl } from '../helpers/urlFormat'

// video data
import { videos, feature } from '../assets/videos'

export default function () {
  return (
    <div className='Main'>
      <VideoModal />
      <Header />

      <div className='feature-video-container'>
        <iframe
          src={ youtubeEmbedUrl(feature.youtubeId, { noInfo: true }) }
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          title={ feature.title }
          allowFullScreen></iframe>
      </div>

      <h4 className='subheader'>Look what we found...</h4>

      <ExhibitCollection collection={ videos } />
      <BackToTop />
      <Social />
    </div>
  )
}
