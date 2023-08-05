import React from 'react'
import Carousel from 'framer-motion-carousel'

import './DisplayCarousel.css'

const DisplayCarousel = (props) => {

  const listofImgs = (props.valueArr.map((img) => {
    return (
      <div key={img.dataURL.slice(100, 110)} className='texture_img_container'>
        <button onClick={() => { props.imageSelectHandler(img.dataURL) }} className='img_btn'>
          <img
            className='carousel_img'
            src={img.dataURL}
            alt=''
          />
        </button>
        <button className='delete_one_btn black_btn' onClick={() => { props.deleteOneHandler(img.dataURL) }}>Delete</button>

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