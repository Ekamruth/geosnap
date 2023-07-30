import React from 'react'
import Carousel from 'framer-motion-carousel'

import './DisplayCarousel.css'

const DisplayCarousel = (props) => {
  
  const carousal_items = props.valueArr.map((item) => {
    // console.log(item.dataURL) 
    return (
        <img 
          src={item.dataURL}
          width={350} 
          height={300} 
          key={item.dataURL.slice(10,15)}
          alt="" />
    )
  })

  return (
    <div className='carousel'>
      {
        carousal_items ?
          (<Carousel>
            { carousal_items }
        </Carousel >) : null
      }
    </div>
    
  )
}

export default DisplayCarousel
