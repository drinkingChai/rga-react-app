import React from 'react'

// styles
import '../css/Footer.css'

export default function () {
  return (
    <footer>
      <div className='left'>
        <a href='/'><i className="fas fa-question-circle"></i>Help</a>
        <a href='/'>Privacy & Terms</a>
        <a className='dd-link'>English<i className="fas fa-caret-down"></i></a>
      </div>

      <div className='right'>
        <span>Follow us on:</span>
        <a href='/'><i className="fab fa-google-plus-square"></i></a>
        <a href='/'><i className="fab fa-blogger"></i></a>
        <a href='/'><i className="fab fa-tumblr-square"></i></a>
        <a href='/'><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  )
}