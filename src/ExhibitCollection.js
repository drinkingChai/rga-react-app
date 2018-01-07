import React from 'react'
import { connect } from 'react-redux'

// styles
import './css/ExhibitCollection.css'

// components
import Exhibit from './Exhibit'

// redux
import { toggleModal } from './redux/store'

const ExhibitCollection = ({ collection, toggle }) => {
  return (
    <div className='ExhibitCollection'>
    { collection.map((video, i) =>
      <Exhibit
        video={ video }
        key={ i }
        onClick={ () => toggle(video.youtubeId) } />) } 
    </div> 
  )
}

const mapDispatch = dispatch => ({
  toggle(youtubeId) {
    dispatch(toggleModal(youtubeId))
  }
})
export default connect(null, mapDispatch)(ExhibitCollection)
