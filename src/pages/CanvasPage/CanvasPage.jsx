import React, { useContext, useState, memo, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './CanvasPage.css'
import { ListContext } from '../../components/Contexts/Contexts';
import BabylonScene from '../../components/BabylonScene/BabylonScene'

import Carousel from 'framer-motion-carousel'
import { BsCircle } from 'react-icons/bs'
import { BiCuboid, BiCube } from 'react-icons/bi'

const CanvasPage = () => {

  const [textureImg, setTextureImg] = useState(null)
  const [shape, setShape] = useState('cuboid')
  const [valueArr, setValueArr] = useState(undefined)

  const listContext = useContext(ListContext);
  useEffect(() => {
    if (listContext.YourCaptures) {
      if ((listContext.YourCaptures).length !== 0) {
        setValueArr(listContext.YourCaptures);
      }
    }
  }, [listContext.YourCaptures]);

  const imageSelectHandler = (image_selected) => {
    setTextureImg(image_selected)
  }

  const listofImgs = (valueArr !== undefined ? (valueArr.map((img) => {
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

  const shapeChangeHandler = (changedShape) => {
    setShape(changedShape)
  }

  const deleteTextureHandler = () => {
    setTextureImg(null)
  }

  const gotoMapbox = (<div className='gotomap_container'>
    You dont have any images in your captures. <br></br>Capture images of your choice from the map here:<br></br>
    <Link to="/mapbox">
      <button className='btn gotomap_btn blue_btn'>Go to Mapbox</button>
    </Link>
  </div>)

  return (
    <div className='canvas_page'>
      <div className='canvas_heading'><span className='emphasis_txt'>GeoSnap</span>canvas</div>
      <div className='canvas_container'>
        <div className='canvas_left'>
          <BabylonScene textureImg={textureImg} shape={shape} />
          <div className='canvas_shapes'>
            <button className='btn sphere_btn shapes_btn blue_btn' onClick={() => { shapeChangeHandler('sphere') }}>
              <span className='canvas_shapes_icon'><BsCircle /></span>
              Sphere
            </button>
            <button className='btn shapes_btn blue_btn' onClick={() => { shapeChangeHandler('cube') }}>
              <span className='canvas_shapes_icon'><BiCube /></span>
              Cube
            </button>
            <button className='btn shapes_btn blue_btn' onClick={() => { shapeChangeHandler('cuboid') }}>
              <span className='canvas_shapes_icon'><BiCuboid /></span>
              Cuboid
            </button>
          </div>
        </div>
        <div className='canvas_right'>
          <div className='canvas_right_inner'>
            {
              valueArr !== undefined ?
                (<>
                  <div className='canvas_right_prompt'>Click on an image to apply texture to the model</div>
                  <div className='carousel_container'>
                    <Carousel interval={4000}>
                      {listofImgs}
                    </Carousel>
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
