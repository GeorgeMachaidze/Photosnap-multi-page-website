import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Home from './Home.tsx';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
