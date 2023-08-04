# GeoSnap - Explore, Capture, and Create with Maps and 3D Shapes

## Introduction

GeoSnap is an advanced ReactJS application that allows users to explore and choose locations on a map, capture the visible region as an image, and apply it as a texture to 3D shapes using BabylonJS. The app aims to provide an immersive experience where users can unleash their creativity by transforming captured maps into captivating 3D scenes.


## Features

- Choose a location on the map using Google Maps or Mapbox.
- Capture the visible region on the map as an image.
- Apply the captured image as a texture to a 3D cuboid using BabylonJS.
- Save captured images to a list for future reference.
- Delete captured images from the list as needed.
- Download captured images to the device for offline use.
- Switch between different 3D shapes (cube, cuboid, and sphere).
- View a carousel of captured map images and change the texture of the selected 3D shape.


## Usage

1. Launch the GeoSnap app by navigating to `https://geosnap.netlify.app/` in your web browser.

2. Choose a location on the map using the provided map interface (Mapbox).

3. Click the "Capture" button to take a snapshot of the visible region on the map. The captured image will be displayed below.

4. Use the "Save to List" button to save the captured image to the list of captures for future reference.

5. View the list of captured images and use the "Delete" button to remove any images you no longer need.

6. Click the "Save to Device" button to download the selected captured image to your PC for offline use.

7. Switch between different 3D shapes (cube, cuboid, and sphere) using the provided buttons in the BabylonJS scene.

8. Interact with the carousel of captured map images. Click on an image to change the texture of the selected 3D shape to the corresponding map image.


## Technologies Used

- ReactJS for the frontend user interface.
- React-Router-Dom to route between different pages.
- Mapbox for location selection and map display.
- BabylonJS for rendering the 3D scenes and applying textures.