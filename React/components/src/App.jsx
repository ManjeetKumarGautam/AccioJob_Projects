import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Rating from './pages/rating/Rating'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Rating />} />
        <Route path='/rating' element={<Rating />} />
      </Routes>

    </>
  )
}

export default App
