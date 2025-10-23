import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Terms from './pages/Terms'

function App() {

  return (
    <Routes>
      {/* Redirect home "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}

export default App
