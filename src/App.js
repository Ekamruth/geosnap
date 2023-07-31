import './App.css';
import Root from './components/Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'
import CanvasPage from './pages/CanvasPage/CanvasPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {ListContext} from './components/Contexts/Contexts';
import { useContext, useMemo, useState } from 'react';
import Mapbox from './pages/MapboxPage/Mapbox';

function App() {

  const YourCaptures = [];
  
  const router = createBrowserRouter([
    {path: "/", element:<Root/>, children:[
      {path:"/", element:<HomePage/>},
      {path:"/mapbox", element:<Mapbox/>},
      {path:"/about", element:<AboutPage/>},
      {path:"/canvas", element:<CanvasPage/>} 
    ]}
  ])
  return (
    <div className="App">
      <ListContext.Provider value={YourCaptures}>
        <RouterProvider router={router}/>
      </ListContext.Provider>
    </div>
  );
}

export default App;
