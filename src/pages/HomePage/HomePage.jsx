import React, {memo} from 'react'

import './HomePage.css'
import Mapbox from '../../components/Mapbox/Mapbox'

const HomePage = () => {
  
  return (
    <div className='homepage'>
      <div className='welcome_txt'>
        Welcome to GeoSnap!
      </div>
        <Mapbox/>
    </div>
  )
}

export default memo(HomePage)
