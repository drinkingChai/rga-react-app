import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

// styles
import './css/Main.css'

// components
import Exhibit from './Exhibit'
import { toggleModal } from './redux/store'

// helper
import { youtubeEmbedUrl } from './urlFormat'

// video data
import { videos, feature } from './assets/videos'

const paragraphs = [
  "In the not too distant future, next Sunday, AD",
  "There was a man. There were some puppets. It was amazing.",
  "These are the experiments of the SOL."
]

const Main = ({ modal, toggleModal }) => {
  return (
    <div className='Main'>
      <Modal open={ modal.state } onClose={ toggleModal } little>
        <a className='close' onClick={ () => toggleModal() }><i className="far fa-times-circle"></i></a>
        <div className='loading'></div>
        <iframe
          width='560'
          height='315'
          src={ modal.embedUrl }
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          title={ feature.title }
          allowFullScreen></iframe>
      </Modal>

      <div className='header'>
        <div className='rotated-text'>
          <div className='inner'>
          { 'the early days'.split('').map((c, i) => <h3 key={ i } className={ `rotate-${(i+1)}deg` }>{ c }</h3>) }
          </div>
        </div>

        <h1>MST3K</h1>
        { paragraphs.map((para, i) => <p className='large' key={ i }>{ para }</p>) }
        <p className='small'>{ paragraphs.join(' ') }</p>
      </div>

      <div className='video-container'>
        <iframe
          width='560'
          height='315'
          src={ youtubeEmbedUrl(feature.youtubeId, { noInfo: true }) }
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          title={ feature.title }
          allowFullScreen></iframe>
      </div>

      <div className='subheader'>
        <h4>Look what we found...</h4>
      </div>

      <div className='exhibit-container'>
        { videos.map((video, i) =>
          <Exhibit
            video={ video }
            key={ i }
            onClick={ () => toggleModal(youtubeEmbedUrl(video.youtubeId)) } />) } 
      </div>

      <div className='back-to-top' onClick={ () => window.scrollTo(0, 0) }>
        <span>Back to Top</span><i className="fas fa-chevron-up"></i> 
      </div>
    </div>
  )
}

const mapState = ({ modal }) => ({ modal })
export default connect(mapState, { toggleModal })(Main)
