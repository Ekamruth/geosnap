import React from 'react'

import { BsCircle } from 'react-icons/bs'
import { BiCuboid, BiCube } from 'react-icons/bi'

import './CanvasShapes.css'

const CanvasShapes = (props) => {
  return (
    <div className='canvas_shapes'>
      <button className='btn sphere_btn shapes_btn blue_btn' onClick={()=> props.shapeChangeHandler('sphere') }>
        <span className='canvas_shapes_icon'><BsCircle /></span>
        Sphere
      </button>
      <button className='btn shapes_btn blue_btn' onClick={()=> props.shapeChangeHandler('cube')}>
        <span className='canvas_shapes_icon'><BiCube /></span>
        Cube
      </button>
      <button className='btn shapes_btn blue_btn' onClick={()=> props.shapeChangeHandler('cuboid') }>
        <span className='canvas_shapes_icon'><BiCuboid /></span>
        Cuboid
      </button>
    </div>
  )
}

export default CanvasShapes
