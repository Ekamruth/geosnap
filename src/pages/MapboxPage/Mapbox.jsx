import './Mapbox.css'

import React, { useEffect, useRef, useState, memo, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { saveAs } from 'file-saver'
import {Element} from 'react-scroll'

import CaptureBox from '../../components/CaptureBox/CaptureBox';
import Canvas from '../../components/Canvas/Canvas';
import ListContext  from '../../components/Contexts/Contexts';


const Mapbox = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null)
  const [dataURL, setdataURL] = useState("");
  const [valueArr, setValueArr] = useState([])

  //Accessing the context
  const listContext = useContext(ListContext);
  useEffect(() => {
    if (listContext.YourCaptures) {
      if ((listContext.YourCaptures).length !== 0) {
        setValueArr(listContext.YourCaptures);
      }
    }
  }, [listContext.YourCaptures]);

  //Rendering the map from Mapbox
  useEffect(() => {
    const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    mapboxgl.accessToken = TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [75, 25], // Default initial center
      zoom: 3, // Default initial zoom level
      attributionControl: false, // This will disable the attribution control
      zoomControl: true, // This will enable the zoom control
      preserveDrawingBuffer: true,
    });
    map.addControl(new mapboxgl.NavigationControl());
    mapRef.current = map;

    //Adding a search bar to the map using geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      position: 'bottom-left',
    });

    map.addControl(geocoder);

    return () => map.remove();
    
  }, []);

  //Capturing an image from the set map
  const captureMapImage = () => {
    const map = mapRef.current;
    if (map) {
      const dataURL = map.getCanvas().toDataURL('image/png');
      setdataURL(dataURL)
    }
  }

  //Saving the image to the list of captures and context
  const savetoListHandler = () => {
    setValueArr(valueArr => [...valueArr, { dataURL }])
    listContext.YourCaptures = [...valueArr, { dataURL }]
  }

  //Function to save a captured image to the device
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

  const deleteListHandler = () => {
    setValueArr([])
    listContext.YourCaptures = []
  }

  return (
    <div className='mapbox_page'>
      <div className='mapbox_page_inner'>
        <Element name='mapboxSection'>
          <div className='mapbox_heading'><span className='emphasis_txt'>GeoSnap</span> - Mapbox</div>
        </Element>
        <div className='map_container'>
          <div className='map_box'>
            <div ref={mapContainerRef} id='map' className='map' />
          </div>
          <CaptureBox
            dataURL={dataURL}
            captureMapImage={captureMapImage}
            savetoListHandler={savetoListHandler}
            savetoDeviceHandler={savetoDeviceHandler}
            deleteCaptureHandler={deleteCaptureHandler}
          />
        </div>
      </div>
      <Canvas valueArr={valueArr} deleteListHandler={deleteListHandler} />
    </div>
  )
};

export default memo(Mapbox);


