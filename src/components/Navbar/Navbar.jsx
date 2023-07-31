import React from 'react'
import { Link } from 'react-router-dom'

import mapicon from '../../geomap_icon.png'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav_left'>
        <img width={70} height={50} src={mapicon} alt="" />
        <span className='nav_heading'>
          <Link to="/">GeoSnap</Link></span> 
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mapbox">Mapbox</Link></li>
        <li><Link to="/canvas">Canvas</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
