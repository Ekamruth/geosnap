import React from 'react'

import './CaptureBox.css'

const CaptureBox = (props) => {
  const savetoListHandler = props.savetoListHandler
  const savetoDeviceHandler = props.savetoDeviceHandler
  const deleteCaptureHandler = props.deleteCaptureHandler  
  return (
    <div className='capture_box'>
      <div>
        Adjust the map view as you wish and then click on the button to capture an image.
      </div>
      <div className='capture_btn'>
        <button onClick={props.captureMapImage}
          className='btn'
        >Capture</button>
      </div>
      <div className='captured_img'>
        {props.dataURL ?
          <img width={350} height={300} src={props.dataURL} alt="" /> : null}
      </div>
      <div>
        {props.dataURL ? 
          <>
            <button className='btn actions_btn' onClick={savetoListHandler}>Save to list</button>
            <button className='btn actions_btn' onClick={savetoDeviceHandler}>Save to device</button>
            <button className='btn actions_btn' onClick={deleteCaptureHandler}>Delete</button>
          </> : null}
      </div>
    </div>)
}

export default CaptureBox
