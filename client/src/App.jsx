import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Login from './pages/Login'
import Footer from './components/Footer'  
import Signup from './pages/Signup'
import RequirementPage from './pages/RequirementPage'
import ResponsePage from './pages/ResponsePage'
import MyPlans from './pages/MyPlans'
import ProtectedRoute from './components/ProtectedRoute'  

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route 
          path="/requirementpage" 
          element={
           <ProtectedRoute>
              <RequirementPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/response/:id" 
          element={
            <ProtectedRoute>
              <ResponsePage />
           </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/myplans" 
          element={
           <ProtectedRoute>
              <MyPlans />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App