import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Terms from './pages/Terms'
import PriceList from './pages/PriceList'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <Routes>
      {/* Redirect home "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login page */}
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/pricelist" element={
        <ProtectedRoute>
          <PriceList />
        </ProtectedRoute>
      } />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}

export default App
