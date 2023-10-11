import React from 'react'
import trollface from '../images/trollface.png'


export default function Header() {
  return (
    <header className='Header'>
      <img src={trollface} alt="trollface"
      className='Header-image' />
      <h1 className='Header-title'>Header Component</h1>
      <h4 className='Header-project'>React Project -3</h4>
    </header>
  )
}
