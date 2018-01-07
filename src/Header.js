import React from 'react'

// styles
import './css/Header.css'

const paragraphs = [
  "In the not too distant future, next Sunday, AD",
  "There was a man. There were some puppets. It was amazing.",
  "These are the experiments of the SOL."
]

export default function () {
  return (
    <div className='Header'>
      <div className='rotated-text'>
        <div className='inner'>
        { 'the early days'.split('').map((c, i) =>
          <h3 key={ i } className={ `rotate-${(i+1)}deg` }>{ c }</h3>) }
        </div>
      </div>

      <h1>MST3K</h1>
      { paragraphs.map((para, i) => <p className='large' key={ i }>{ para }</p>) }
      <p className='small'>{ paragraphs.join(' ') }</p>
    </div>
  )
}