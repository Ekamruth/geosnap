import React from 'react'

import './AboutPage.css'

const AboutPage = () => {
  const importantStyle = {
    fontWeight: 'bold',
    color: '#007bff', // Blue color for emphasis
  };
  const italicStyle = { fontStyle: 'italic' };
  return (
    <div className='about_page'>
      <h1 style={{ textAlign: 'center' }}>
        <span style={importantStyle}>GeoSnap</span>: Explore, Capture, and Create with Maps and 3D Shapes
      </h1>
      <p>
        Welcome to <span style={importantStyle}>GeoSnap</span>, a cutting-edge application that combines the power of maps and 3D rendering to provide a truly immersive and interactive experience. GeoSnap allows users to explore different locations on a map, capture their favorite views, and transform them into captivating 3D scenes.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>
          <span style={importantStyle}>Location Selection on Maps:</span> With GeoSnap, users can easily choose any location on the map using Google Maps or Mapbox. Simply pan and zoom to find the perfect spot for your next 3D adventure.
        </li>
        <li>
          <span style={importantStyle}>Capture and Save:</span> Once you've found a picturesque location on the map, click a button to capture the visible region as an image. GeoSnap goes beyond the original assignment by letting you save these captured images to a list for future reference.
        </li>
        <li>
          <span style={importantStyle}>3D Shape Rendering and Customization:</span> GeoSnap takes the captured images to a whole new level. By incorporating BabylonJS, users can unleash their creativity and apply their captured images as materials (textures) to various 3D shapes, such as cubes, cuboids, and spheres.
        </li>
      </ul>
      <h2>How to Use:</h2>
      <ol>
        <li>
          <span style={importantStyle}>Explore:</span> Launch GeoSnap and explore the world using the map functionalities. Pan, zoom, and find your favorite locations to capture.
        </li>
        <li>
          <span style={importantStyle}>Capture:</span> Click the "Capture" button to take a snapshot of the visible region on the map. The image will be saved in your list of captures.
        </li>
        <li>
          <span style={importantStyle}>Create:</span> Click on the cube, cuboid, or sphere buttons. See your captures come to life as materials for these 3D shapes.
        </li>
      </ol>
      <p style={{ textAlign: 'center', marginTop: '30px' }}>
        <span style={italicStyle}>GeoSnap</span> is more than just a mapping application; it's a versatile and imaginative platform that empowers you to merge the beauty of maps with the creativity of 3D shapes. Embark on your journey of exploration and artistic expression with <span style={importantStyle}>GeoSnap</span> today!
      </p>

    </div>
  )
}

export default AboutPage
