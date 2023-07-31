import './Mapbox.css'

import React, { useEffect, useRef, useState, memo, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { saveAs } from 'file-saver'

import MAPBOX_ACCESS_TOKEN from '../../constants/constants'
import CaptureBox from '../../components/CaptureBox/CaptureBox';
import DisplayCarousel from '../../components/DisplayCarousel/DisplayCarousel'
import { ListContext } from '../../components/Contexts/Contexts';


const Mapbox = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null)
  const [dataURL, setdataURL] = useState("");
  const [valueArr, setValueArr] = useState([])
  // const [mapDidRender, setMapDidRender] = useState(false)

  const listContext = useContext(ListContext);
  useEffect(() => {
    console.log(listContext.YourCaptures)
    if(listContext.YourCaptures){
      if ((listContext.YourCaptures).length !== 0) {
        setValueArr(listContext.YourCaptures);
      }
    }    
  }, [listContext.YourCaptures]);

  useEffect(() => {
      // console.log('Mapbox is getting rendered')
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
      map.addControl(new mapboxgl.NavigationControl());

      mapRef.current = map;

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
    listContext.YourCaptures = [...valueArr, { dataURL }]
  }
  

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
    <div className='mapbox_page'>
      <div className='mapbox_heading'><span className='emphasis_txt'>GeoSnap</span> - Mapbox</div>
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
          <div className='display_captures_heading'>Your captures</div>
          <DisplayCarousel valueArr={valueArr} />
        </div> : null}
    </div>
  )
};

export default memo(Mapbox);


