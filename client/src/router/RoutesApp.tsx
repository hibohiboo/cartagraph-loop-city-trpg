import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SceneCardListPage from '@/components/pages/SceneCardList'
import Top from '@/components/pages/Top'
import ActionCardList from '@/card/ActionCard/ActionList'
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
      <Route path="/scenes" element={<SceneCardListPage />} />
      <Route path="/actions" element={<ActionCardList />} />
    </Routes>
  )
}

export default App
