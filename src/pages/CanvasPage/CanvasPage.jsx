import React, { useContext, useState, memo } from 'react'

import './CanvasPage.css'
import { ListContext } from '../../components/Contexts/Contexts';
import BabylonScene from '../../components/BabylonScene/BabylonScene'

import Carousel from 'framer-motion-carousel'

const CanvasPage = () => {

  const [textureImg, setTextureImg] = useState(null)
  const [shape, setShape] = useState('cuboid')

  const listContext = useContext(ListContext);
  const valueArr = listContext.YourCaptures;
  // console.log(valueArr)

  const imageSelectHandler = (image_selected) => {
    setTextureImg(image_selected)
  }
  const listofImgs = (valueArr !== undefined ? (valueArr.map((img) => {
    // console.log(img.dataURL)
    return (
      <div key={img.dataURL.slice(100, 110)} className='texture_img_container'>
        <button onClick={() => { imageSelectHandler(img.dataURL) }} className='img_btn'>
          <img
            src={img.dataURL}
            width={300}
            height={250}
            alt=''
          />
        </button>
      </div>
    )
  })) : null
  )

  const shapeChangeHandler = (changedShape)=>{
    setShape(changedShape)
  } 

  return (
    <div className='canvas_page'>
      <div className='canvas_heading'>GeoSnap canvas</div>
      <div className='canvas_container'>
        <div className='canvas_left'>
          <BabylonScene textureImg={textureImg} shape={shape} />
          <div className='canvas_shapes'>
            <button onClick={()=>{shapeChangeHandler('sphere')}}>Sphere</button>
            <button onClick={()=>{shapeChangeHandler('cube')}}>Cube</button>
            <button onClick={()=>{shapeChangeHandler('cuboid')}}>Cuboid</button>
          </div>
        </div>
        {
          valueArr !== undefined ? (
            <Carousel>
              {listofImgs}
            </Carousel>) : null
        }
      </div>
    </div>
  )
}

export default memo(CanvasPage);
