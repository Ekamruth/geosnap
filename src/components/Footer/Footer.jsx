import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
// import mapicon from '../../geomap_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        {/* <li><img width={40} height={30} src={mapicon} alt="" /></li> */}
        <li>
          Copyright © 2023 <span className='emphasis_txt'>GeoSnap</span>
        </li>
        <li>
          Version 2.0
        </li>
        <li>
          Acknowledgement: A special thanks to <a href="https://www.snaptrude.com/" target="_blank" rel="noopener noreferrer">Snaptrude</a>
        </li>
        <li>
          <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox</a>
        </li>
        <li>
          <a href="https://github.com/Ekamruth/geosnap" target="_blank" rel="noopener noreferrer">github.com/Ekamruth/geosnap</a>
        </li>
        <li><Link to='/about'>About</Link></li>
      </ul>







    </div>
  )
}

export default Footer
