import React, { useState, memo } from 'react'
import {Link as ScrollLink} from 'react-scroll'
 

import './Canvas.css'
import BabylonScene from '../BabylonScene/BabylonScene'

import CanvasShapes from '../CanvasShapes/CanvasShapes'
import DisplayCarousel from '../DisplayCarousel/DisplayCarousel'

const CanvasPage = (props) => {

  const [textureImg, setTextureImg] = useState(null)
  const [shape, setShape] = useState('cuboid')
  const valueArr = props.valueArr

  const imageSelectHandler = (image_selected) => {
    setTextureImg(image_selected)
  }

  const shapeChangeHandler = (changedShape) => {
    setShape(changedShape)
  }

  const deleteTextureHandler = () => {
    setTextureImg(null)
  }

  const gotoMapbox = (<div className='gotomap_container'>
    You dont have any images in your captures. <br></br>Capture images of your choice from the map here:<br></br>
    <ScrollLink to="mapboxSection" smooth={true} duration={500}>
      <button className='btn gotomap_btn blue_btn'>Go to Mapbox</button>
    </ScrollLink>
  </div>)

  return (
    <div className='canvas_page'>
      <div className='canvas_heading'><span className='emphasis_txt'>GeoSnap</span>- Canvas</div>
      <div className='canvas_container'>
        <div className='canvas_left'>
          <BabylonScene textureImg={textureImg} shape={shape} />
          <CanvasShapes shapeChangeHandler={shapeChangeHandler}/>
        </div>
        <div className='canvas_right'>
          <div className='canvas_right_inner'>
            {
              valueArr.length !== 0 ?
                (<>
                  <div className='canvas_right_prompt'>Click on an image to apply texture to the model</div>
                  <DisplayCarousel valueArr={valueArr} imageSelectHandler={imageSelectHandler}/>
                  <div>
                    <button className='btn black_btn' onClick={props.deleteListHandler}>
                      Delete Captures
                    </button>
                  </div>
                  {textureImg ?
                    <div>
                      <button className='btn blue_btn' onClick={deleteTextureHandler}>Remove Texture</button>
                    </div> : null}
                </>) : gotoMapbox
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CanvasPage);