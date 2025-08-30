import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Consultation from './components/Consultation/Consultation';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='consultation' element={<Consultation/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}

export default App
