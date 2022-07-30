import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Top from '@/components/pages/Top'
import useRouterApp from '@/hooks/useRouterApp'

const App: React.FC = () => {
  const { authenticated } = useRouterApp()
  const location = useLocation()
  console.log(authenticated)

  if (!location.pathname.startsWith('/')) {
    return <Navigate to="/" replace />
  }
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  )
}

export default App
