import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'
import globe from '../../globe_spin.gif'

const HomePage = () => {

  return (
    <div className='homepage'>
      <div className='welcome_txt'>
        Welcome to <span className='emphasis_txt'>GeoSnap</span>!
      </div>
      <div>
        <p className='homepage_intro_txt'>A cutting-edge application that combines the power of maps and 3D rendering<br></br> to provide a truly immersive and interactive experience.</p>
        <img src={globe} alt="" className='scale-in-center' />
      </div>
      <div className='homepage_btns'>
        <Link to="/mapbox">
          <button className='btn getstarted_btn'>
            Get Started
          </button></Link>
        <Link to="/about">
          <button className='btn knowmore_btn'>
            Know More
          </button></Link>
      </div>
    </div>
  )
}

export default memo(HomePage)
