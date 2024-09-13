import React from 'react'
import { Route, Routes } from 'react-router-dom'
import path from './utils/path'
import { AboutUs, Home, OurAgent, Properties, PublicLayout, Search } from './pages/public'
import { Modal } from './components'
import { useAppStore } from './store/useAppStore'

// thẻ Routes dùng để bao hết thẻ Route
const App = () => {
  const {isShowModel} = useAppStore()

  return (
    <div>
      {isShowModel && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_US} element={<AboutUs />} />
          <Route path={path.OUR_AGENTS} element={<OurAgent />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
          <Route path={path.SEARCH} element={<Search />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App