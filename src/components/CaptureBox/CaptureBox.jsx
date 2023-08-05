import React from 'react'
import { TbCapture } from 'react-icons/tb'


import './CaptureBox.css'

const CaptureBox = (props) => {
  const savetoListHandler = props.savetoListHandler
  const savetoDeviceHandler = props.savetoDeviceHandler
  const deleteCaptureHandler = props.deleteCaptureHandler
  return (
    <div className='capture_box'>
      <div className='capture_box_inner'>
        <div className='capture_btn_container'>
          <button onClick={props.captureMapImage}
            className='btn black_btn capture_btn'>
            <span className='capture_btn_icon'><TbCapture /></span>
            Capture
          </button>
        </div>

        {/* Displaying the captured image and action buttons conditionally*/}
        {props.dataURL ?
          <>
            <div className='captured_img scale-in-center'>
              <img src={props.dataURL} alt="" />
            </div>
            <div className='actions_btns_container'>
              <div>
                <button className='btn black_btn' onClick={savetoListHandler}>
                  Save to list
                </button>
              </div>
              <div>
                <button className='btn black_btn' onClick={savetoDeviceHandler}>Save to device</button>
              </div>
              <div>
                <button className='btn black_btn' onClick={deleteCaptureHandler}>Delete</button>
              </div>
            </div>
          </> : <div className='nocapture_txt'>
            Adjust the map view as you wish and then click on the button to capture an image.
          </div>}
      </div>
    </div>)
}

export default CaptureBox
