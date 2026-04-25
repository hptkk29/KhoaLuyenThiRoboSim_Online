import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OnlinePage from './pages/OnlinePage'
import OfflinePage from './pages/OfflinePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luyen-thi-robosim-r1-r2" element={<OnlinePage />} />
        <Route path="/khoa-hoc-robosim-offline" element={<OfflinePage />} />
      </Routes>
    </BrowserRouter>
  )
}
