import React from 'react'
import { Link } from 'react-router-dom'
import { TbCapture } from 'react-icons/tb'
import {HiOutlinePresentationChartLine} from 'react-icons/hi'

import './CaptureBox.css'

const CaptureBox = (props) => {
  const savetoListHandler = props.savetoListHandler
  const savetoDeviceHandler = props.savetoDeviceHandler
  const deleteCaptureHandler = props.deleteCaptureHandler
  return (
    <div className='capture_box'>
      <div className='capture_btn_container'>
        <button onClick={props.captureMapImage}
          className='btn blue_btn '>
          <div className='capture_btn'>
            <span className='capture_btn_icon'><TbCapture /></span>
            Capture
          </div>
        </button>
      </div>
      <div className='captured_img'>
        {props.dataURL ?
          <img width={350} height={300} src={props.dataURL} alt="" /> : null}
      </div>

      {props.dataURL ?
        <>
          <div>
            <button className='btn actions_btn blue_btn' onClick={savetoListHandler}>
                Save to list
            </button>
            <button className='btn actions_btn blue_btn' onClick={savetoDeviceHandler}>Save to device</button>
            <button className='btn actions_btn blue_btn' onClick={deleteCaptureHandler}>Delete</button>
          </div>
          <div className='canvas_btn_container'>
            <Link to="/canvas">
              <button className='btn canvas_btn black_btn'>
                <span className='canvas_btn_icon'><HiOutlinePresentationChartLine/></span>
                <span className='canvas_btn_txt'>Canvas</span>
              </button>
            </Link>
          </div>

        </> : <div className='nocapture_txt'>
          Adjust the map view as you wish and then click on the button to capture an image.
        </div>}

    </div>)
}

export default CaptureBox
