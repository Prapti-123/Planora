import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Login from './pages/Login'
import Footer from './components/Footer'  
function App() {
  return (
    <div className="App">
     
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
