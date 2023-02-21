
import {BrowserRouter, Routes ,Route } from 'react-router-dom';

import Home from "../Pages/Home.jsx";
import Archive from "../Pages/Archive.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element= { <Home/> } />
          <Route path = "/archive" element= { <Archive/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
