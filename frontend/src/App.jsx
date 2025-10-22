import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      {/* Redirect home "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
