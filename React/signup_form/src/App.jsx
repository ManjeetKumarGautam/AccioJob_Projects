import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SignupForm from './pages/SignupForm'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path='/' element={<SignupForm />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>

    </>
  )
}

export default App
