import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

// styles
import '../css/VideoModal.css'

// redux
import { toggleModal } from '../redux/store'

// helper
import { youtubeEmbedUrl } from '../helpers/urlFormat'

const VideoModal = ({ youtubeId, state, url, toggle }) => {
  return (
    <Modal open={ state } onClose={ toggle } little>
      <a className='close' onClick={ () => toggle() }><i className="far fa-times-circle"></i></a>
      <div className='loading'></div>
      <iframe
        src={ youtubeEmbedUrl(url, { autoplay: true }) }
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        title={ url }
        allowFullScreen></iframe>
    </Modal>
  )
}

const mapState = ({ modal }) => ({
  state: modal.state,
  url: modal.embedUrl
})
const mapDispatch = dispatch => ({
  toggle() {
    dispatch(toggleModal())
  }
})
export default connect(mapState, mapDispatch)(VideoModal)
