import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Login from './pages/Login'
import Footer from './components/Footer'  
import Signup from'./pages/Signup'
import RequirementPage from './pages/RequirementPage'
import ResponsePage from './pages/ResponsePage'
function App() {
  return (
    <div className="App">
     
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/requirementpage" element={<RequirementPage />} />
           {/* Dynamic page with unique ID */}
        <Route path="/response/:id" element={<ResponsePage />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
