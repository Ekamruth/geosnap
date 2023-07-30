import './Mapbox.css'

import React, { useEffect, useRef, useState, memo, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { saveAs } from 'file-saver'

import MAPBOX_ACCESS_TOKEN from '../../constants/constants'
import CaptureBox from '../CaptureBox/CaptureBox';
import DisplayCarousel from '../DisplayCarousel/DisplayCarousel';
import {ListContext} from '../Contexts/Contexts';


const Mapbox = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null)
  const isInitialRender = useRef(true)
  const [dataURL, setdataURL] = useState("");
  const [valueArr, setValueArr] = useState([])
  // const [mapDidRender, setMapDidRender] = useState(false)

  const listContext = useContext(ListContext);

  useEffect(() => {
    console.log(isInitialRender.current)
      const TOKEN = MAPBOX_ACCESS_TOKEN;
      mapboxgl.accessToken = TOKEN;
      const map = new mapboxgl.Map({
        // container: 'map',
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [75, 25], // Default initial center
        zoom: 3, // Default initial zoom level
        attributionControl: false, // This will enable the attribution control
        zoomControl: true, // This will enable the zoom control
        preserveDrawingBuffer: true,
      });

      mapRef.current = map;
      if (isInitialRender.current) {
        isInitialRender.current = false
      }
      return () => map.remove();

  }, []);

  const captureMapImage = () => {
    const map = mapRef.current;
    if (map) {
      const dataURL = map.getCanvas().toDataURL('image/png');
      // console.log(dataURL)
      setdataURL(dataURL)
    }
  }

  const savetoListHandler = () => {
    console.log(valueArr)
    setValueArr(valueArr => [...valueArr, { dataURL }])
    // console.log(listContext.YourCaptures)
  }
  listContext.YourCaptures = valueArr;

  const savetoDeviceHandler = () => {
    const map = mapRef.current;
    if (map) {
      const canvas = map.getCanvas();
      canvas.toBlob(function (blob) {
        saveAs(blob, "image.png");
      })
    }
  }

  const deleteCaptureHandler = () => {
    setdataURL(null);
  }

  return (
    <>
      <div className='map_container'>
        <div className='map_box'>
          <div ref={mapContainerRef} id='map' />
        </div>
        <CaptureBox
          dataURL={dataURL}
          captureMapImage={captureMapImage}
          savetoListHandler={savetoListHandler}
          savetoDeviceHandler={savetoDeviceHandler}
          deleteCaptureHandler={deleteCaptureHandler}
        />
      </div>
      {valueArr.length !== 0 ?
        <div className='display_captures'>
          <h3>Your captures</h3>
          <DisplayCarousel valueArr={valueArr} />
        </div> : null}
    </>
  )
};

export default memo(Mapbox);


