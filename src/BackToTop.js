import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

// style
import './css/BackToTop.css'

export default function () {
  return (
    <div className='BackToTop' onClick={ () => scroll.scrollToTop({ duration: 400 }) }>
      <span>Back to Top</span><i className="fas fa-chevron-up"></i> 
    </div>
  )
}