import './App.css';
import React from 'react';
import Root from './components/Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListContext from './components/Contexts/Contexts';
import Mapbox from './pages/MapboxPage/Mapbox';

function App() {

  // Create an empty array to store the user's captures
  const YourCaptures = [];
  
  // Create a router using the createBrowserRouter function
  const router = createBrowserRouter([
    {path: "/", element:<Root/>, children:[
      {path:"/", element:<HomePage/>},
      {path:"/mapbox", element:<Mapbox/>},
      {path:"/about", element:<AboutPage/>},
    ]}
  ])
  return (
    <div className="App">
      {/* Wrapping the app with the context provider to access it anywhere in the app*/}
      <ListContext.Provider value={YourCaptures}>  
        <RouterProvider router={router}/>
      </ListContext.Provider>
    </div>
  );
}

export default App;
