import React from 'react'
import Carousel from 'framer-motion-carousel'

import './DisplayCarousel.css'

const DisplayCarousel = (props) => {

  const listofImgs = (props.valueArr.map((img) => {
    return (
      <div key={img.dataURL.slice(100, 110)} className='texture_img_container'>
        <button onClick={() => { props.imageSelectHandler(img.dataURL) }} className='img_btn'>
          <img
            src={img.dataURL}
            width={300}
            height={250}
            alt=''
          />
        </button>
      </div>
    )
  })
  )

  return (
    <div className='carousel_container'>
      <Carousel autoPlay={false}>
        {listofImgs}
      </Carousel>
    </div>
  )
}

export default DisplayCarousel